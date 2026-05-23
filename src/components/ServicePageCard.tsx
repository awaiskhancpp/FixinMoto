'use client'
import Image from 'next/image'
import type { Setting } from '@/payload-types'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { isValidFormEmail } from '@/lib/validateEmail'
import type { ScheduleForDayPayload } from '@/lib/scheduling'

interface ServicePageCardProps {
  title: string
  description: string
  imageSrc: string
  slug: string
  services: string[]
  serviceHours?: Setting['serviceHours'] | null
}

type BoundsResponse = {
  bounds: { minDate: string; maxDate: string }
  serviceHours?: { weekDays?: string | null; weekEnds?: string | null }
}

export default function ServicePageCard({
  title,
  description,
  imageSrc,
  services,
  slug,
}: ServicePageCardProps) {
  const [openModal, setOpenModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bounds, setBounds] = useState<{ minDate: string; maxDate: string } | null>(null)
  const [hoursLabel, setHoursLabel] = useState<BoundsResponse['serviceHours'] | null>(null)
  const [daySchedule, setDaySchedule] = useState<ScheduleForDayPayload | null>(null)
  const [scheduleLoading, setScheduleLoading] = useState(false)

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
    let cancelled = false
    async function loadBounds() {
      try {
        const res = await fetch('/api/booking-schedule')
        const data = (await res.json()) as BoundsResponse
        if (!cancelled && data.bounds) {
          setBounds(data.bounds)
          setHoursLabel(data.serviceHours ?? null)
        }
      } catch {
        if (!cancelled) toast.error('Could not load booking dates')
      }
    }
    if (openModal) loadBounds()
    return () => {
      cancelled = true
    }
  }, [openModal])

  useEffect(() => {
    let cancelled = false
    async function loadDay() {
      if (!openModal || !formData.date) {
        setScheduleLoading(false)
        setDaySchedule(null)
        return
      }
      setScheduleLoading(true)
      try {
        const res = await fetch(`/api/booking-schedule?date=${encodeURIComponent(formData.date)}`)
        const data = (await res.json()) as ScheduleForDayPayload
        if (!cancelled) setDaySchedule(data)
      } catch {
        if (!cancelled) setDaySchedule(null)
      } finally {
        if (!cancelled) setScheduleLoading(false)
      }
    }
    void loadDay()
    return () => {
      cancelled = true
    }
  }, [openModal, formData.date])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => {
      if (name === 'date') {
        return { ...prev, date: value, time: '' }
      }
      return { ...prev, [name]: value }
    })
  }

  const slotsForUi = daySchedule?.slots ?? []
  const usedCount = daySchedule?.usedCount ?? 0
  const capacity = daySchedule?.capacity ?? 5
  const scheduleReady = !!daySchedule && daySchedule.date === formData.date
  const noSlotsLeft =
    scheduleReady && slotsForUi.length === 0 && !scheduleLoading && !daySchedule?.error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.date || !bounds) {
      toast.error('Please select a date')
      return
    }

    if (formData.date < bounds.minDate || formData.date > bounds.maxDate) {
      toast.error('Date outside the allowed booking window')
      return
    }

    if (!formData.time) {
      toast.error('Please select a time')
      return
    }

    if (slotsForUi.length === 0 || !slotsForUi.includes(formData.time) || scheduleLoading) {
      toast.error('This slot is no longer available')
      return
    }

    if (!isValidFormEmail(formData.email)) {
      toast.error('Enter a valid email address')
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
        setDaySchedule(null)
        setOpenModal(false)
      } else {
        let msg = 'Failed to submit booking'
        try {
          const data = (await response.json()) as {
            errors?: Array<{ message?: string }>
            message?: string
          }
          msg = data?.errors?.[0]?.message || data?.message || `Server error (${response.status})`
        } catch {
          msg = `Server error (${response.status})`
        }
        toast.error(msg)
      }
    } catch {
      toast.error('Something went wrong!')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          className="fixed inset-0 z-[1000] flex flex-wrap justify-center items-center p-4 before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[rgba(0,0,0,0.5)]"
          onClick={() => setOpenModal(false)}
        >
          <div
            role="dialog"
            className="relative z-10 w-full max-w-md rounded-lg border border-slate-100 bg-white shadow-lg outline-none overflow-y-auto max-h-[95vh] p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 rounded-lg bg-secondary px-4 py-4">
              <h2 className="mb-2 text-xl font-semibold text-white">{title}</h2>
              <p className="text-sm text-white">{description}</p>
              {hoursLabel?.weekDays || hoursLabel?.weekEnds ? (
                <p className="mt-3 text-xs text-white/85">
                  <span className="font-semibold">Hours</span>{' '}
                  {hoursLabel.weekDays ? `Mon–Fri: ${hoursLabel.weekDays}` : null}
                  {hoursLabel.weekDays && hoursLabel.weekEnds ? ' · ' : null}
                  {hoursLabel.weekEnds ? `Sat–Sun: ${hoursLabel.weekEnds}` : null}
                </p>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <FieldRow label="Name" required>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </FieldRow>

              <FieldRow label="Email" required>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </FieldRow>

              <FieldRow label="Phone" required>
                <input
                  type="number"
                  maxLength={11}
                  minLength={10}
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </FieldRow>

              <FieldRow label="Date" required>
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={bounds?.minDate}
                    max={bounds?.maxDate}
                    disabled={!bounds}
                    className={`w-full rounded-lg border px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${
                      scheduleReady && usedCount >= capacity
                        ? 'border-red-300 bg-red-100'
                        : 'border-slate-300'
                    }`}
                    required
                  />
                  {scheduleLoading ? (
                    <span className="absolute right-10 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">
                      Loading…
                    </span>
                  ) : null}
                  {formData.date && bounds && scheduleReady ? (
                    <span className="absolute right-10 top-1/2 -translate-y-1/2 text-xs font-semibold text-green-700">
                      ({Math.min(usedCount, capacity)}/{capacity})
                    </span>
                  ) : null}
                </div>
              </FieldRow>

              <FieldRow label="Time" required>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  disabled={
                    !formData.date ||
                    scheduleLoading ||
                    !slotsForUi.length ||
                    noSlotsLeft ||
                    isSubmitting
                  }
                  required
                >
                  <option value="">Select time</option>
                  {slotsForUi.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </FieldRow>

              <FieldRow label="Service">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={title}>{title}</option>
                  {services.map((s, i) =>
                    s !== title ? (
                      <option value={s} key={i}>
                        {s}
                      </option>
                    ) : null,
                  )}
                </select>
              </FieldRow>

              {daySchedule?.error ? (
                <p className="text-sm text-red-600">{daySchedule.error}</p>
              ) : null}

              <div className="mt-6 flex gap-3 border-t pt-4">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="flex-1 cursor-pointer rounded-md border border-slate-300 bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    scheduleLoading ||
                    !formData.date ||
                    !formData.time ||
                    !slotsForUi.length ||
                    noSlotsLeft ||
                    isSubmitting
                  }
                  className="flex-1 cursor-pointer rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting…' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function FieldRow({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-4">
      <label className="w-20 shrink-0 text-sm font-medium text-slate-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {children}
    </div>
  )
}
