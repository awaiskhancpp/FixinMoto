'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

interface ServicePageCard {
  title: string
  description: string
  imageSrc: string
  slug: string
  services: string[]
}

export default function ServicePageCard({
  title,
  description,
  imageSrc,
  services,
  slug,
}: ServicePageCard) {
  const [openModal, setOpenModal] = useState(false)
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    time: '',
    service: title,
    cardTitle: title,
    cardDescription: description,
  })

  useEffect(() => {
    if (openModal) {
      fetchBookedSlots()
    }
  }, [openModal])

  const fetchBookedSlots = async () => {
    try {
      const response = await fetch('/api/service-booking')
      const data = await response.json()

      const slots: Record<string, string[]> = {}
      data.docs?.forEach((booking: any) => {
        if (booking.date && booking.time && booking.bookingStatus !== 'cancelled') {
          if (!slots[booking.date]) {
            slots[booking.date] = []
          }
          if (!slots[booking.date].includes(booking.time)) {
            slots[booking.date].push(booking.time)
          }
        }
      })
      setBookedSlots(slots)
    } catch (error) {
      console.error('Failed to fetch booked slots:', error)
    }
  }

  const getMinDate = () => {
    const today = new Date()
    today.setDate(today.getDate() + 1)
    return today.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const today = new Date()
    today.setDate(today.getDate() + 14)
    return today.toISOString().split('T')[0]
  }

  const isDateDisabled = (dateString: string) => {
    return (bookedSlots[dateString]?.length || 0) >= 5
  }

  const isTimeSlotBooked = (dateString: string, timeString: string) => {
    return bookedSlots[dateString]?.includes(timeString) || false
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.date) {
      toast.error('Please select a date')
      return
    }

    if (!formData.time) {
      toast.error('Please select a time')
      return
    }

    if (isDateDisabled(formData.date)) {
      toast.error('This date is fully booked')
      return
    }

    if (isTimeSlotBooked(formData.date, formData.time)) {
      toast.error('This time slot is already booked')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/service-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Booking submitted successfully!')

        await fetchBookedSlots()

        setFormData({
          name: '',
          email: '',
          contact: '',
          date: '',
          time: '',
          service: title,
          cardTitle: title,
          cardDescription: description,
        })
        setOpenModal(false)
      } else {
        const data = await response.json()
        toast.error(data?.message || 'Failed to submit booking')
      }
    } catch (error) {
      toast.error('Something went wrong!')
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ]

  return (
    <div className="flex h-full flex-col items-center rounded-[15px] bg-primary px-6 py-10 text-center text-white">
      <div className="flex shrink-0 items-center justify-center">
        <Image src={imageSrc} alt="" width={118} height={118} className="object-contain" />
      </div>
      <h3 className="text-2xl font-medium leading-[1.3333333]">{title}</h3>
      <p className="flex flex-1 flex-col justify-center text-base leading-[1.625] text-white/50">
        {description}
      </p>
      <div className="mt-auto flex w-full flex-row items-center justify-center gap-2 pt-2">
        <a
          href={`/services/${slug}`}
          className="rounded-lg border border-white px-11 xl:px-9 py-[15px] text-sm font-medium text-white"
        >
          Details
        </a>
        <button
          type="button"
          onClick={() => setOpenModal(!openModal)}
          className="rounded-lg bg-secondary px-11 lg:px-6 xl:px-8 py-[15px] text-sm font-medium text-white whitespace-nowrap"
        >
          Book Now
        </button>
      </div>

      {openModal && (
        <div
          id="modalOverlay"
          className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]"
          onClick={() => setOpenModal(false)}
        >
          <div
            role="dialog"
            className="w-full max-w-md bg-white border border-slate-100 shadow-lg rounded-lg relative max-h-[95vh] overflow-y-auto outline-none p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-secondary rounded-lg py-4 px-4 mb-4">
              <h2 id="modal-title" className="text-white text-xl font-semibold mb-2">
                {title}
              </h2>
              <p className="text-white text-sm">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 mt-4">
              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">
                  Date <span className="text-red-500">*</span>
                </label>
                <div className="flex-1 relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={getMinDate()}
                    max={getMaxDate()}
                    className={`w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formData.date && isDateDisabled(formData.date)
                        ? 'bg-red-100 border-red-300'
                        : 'border-slate-300'
                    }`}
                    required
                  />
                  {formData.date && isDateDisabled(formData.date) && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 text-xs font-semibold">
                      Full
                    </span>
                  )}
                  {formData.date && !isDateDisabled(formData.date) && (
                    <span className="absolute right-10 top-1/2 -translate-y-1/2 text-green-600 text-xs font-semibold">
                      ({bookedSlots[formData.date]?.length || 0}/5)
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">
                  Time <span className="text-red-500">*</span>
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  required
                  disabled={!formData.date || isDateDisabled(formData.date) || isSubmitting}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => {
                    const isBooked = isTimeSlotBooked(formData.date, slot)
                    return (
                      <option
                        key={slot}
                        value={slot}
                        disabled={isBooked}
                        className={isBooked ? 'line-through text-gray-400' : ''}
                      >
                        {slot} {isBooked ? '(Booked)' : ''}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={title}>{title}</option>
                  {services.map(
                    (s, i) =>
                      s !== title && (
                        <option value={s} key={i}>
                          {s}
                        </option>
                      ),
                  )}
                </select>
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="flex-1 px-4 py-2 text-slate-700 text-sm font-semibold rounded-md cursor-pointer bg-slate-200 border border-slate-300 transition-colors hover:bg-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    !formData.date ||
                    !formData.time ||
                    isDateDisabled(formData.date) ||
                    isTimeSlotBooked(formData.date, formData.time) ||
                    isSubmitting
                  }
                  className="flex-1 px-4 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-secondary transition-colors hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
