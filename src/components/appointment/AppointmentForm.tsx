'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import type { CarMake, CarModel, Service, Location, MainService } from '@/payload-types'
import { toast } from 'react-toastify'
import Select from 'react-select'
const CarInfo = [
  {
    iconImg: '/appointmentForm/carhood.png',
    imgOnClick: '/appointmentForm/carhoodwhite.png',
    serviceTitle: 'Towing Services',
    content: "Fast & Reliable Towing: We're Here When You Need Us",
  },
  {
    iconImg: '/appointmentForm/towtruck.png',
    imgOnClick: '/appointmentForm/towtruckwhite.png',
    serviceTitle: 'Emergency Roadside Assistance',
    content: '24/7 Roadside Help: Jump Starts, Tire Changes & More',
  },
  {
    iconImg: '/appointmentForm/carwrench.png',
    imgOnClick: '/appointmentForm/carwrenchwhite.png',
    serviceTitle: 'Fleet Maintenance Services',
    content: 'Keep Your Fleet Running: Professional Maintenance for Vehicles',
  },
]

interface AppointmentFormProps {
  location: Location[]
  carMake: CarMake[]
  carModel: CarModel[]
  service: Service[]
  mainService: MainService[]
}

export default function AppointmentForm({
  location,
  carMake,
  carModel,
  service,
  mainService,
}: AppointmentFormProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [selectedMakeId, setSelectedMakeId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    carYear: '',
    licencePlate: '',
    vin: '',
    date: '',
    time: '',
    location: '',
    services: [] as string[],
    mainService: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dateRef = useRef<HTMLInputElement>(null)
  const timeRef = useRef<HTMLInputElement>(null)

  const makeIdParsed = selectedMakeId ?? (formData.carMake === '' ? NaN : Number(formData.carMake))
  const handleMainServiceClick = (index: number, serviceId: string) => {
    setActiveCard(index)
    setFormData((prev) => ({
      ...prev,
      mainService: serviceId,
    }))
  }
  const filteredModels = carModel.filter((model) => {
    if (typeof model.make !== 'object' || model.make === null) return false
    return model.make.id === makeIdParsed
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const next = { ...prev, [name]: value }
      if (name === 'carMake') {
        next.carModel = ''
        setSelectedMakeId(value === '' ? null : Number(value))
      }
      return next
    })
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.mainService && (!formData.services || formData.services.length === 0)) {
      toast.error('Select at least one main service or service')
      return
    }

    setIsSubmitting(true)

    const appointmentData = {
      ...formData,
      carMake: formData.carMake ? Number(formData.carMake) : null,
      carModel: formData.carModel ? Number(formData.carModel) : null,
      location: formData.location ? Number(formData.location) : null,
      services: formData.services.map((id) => Number(id)),
      mainService: formData.mainService ? Number(formData.mainService) : null,
      carYear: formData.carYear ? Number(formData.carYear) : null,
    }

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      })

      if (response.ok) {
        toast.success('Appointment Submitted Successfully')

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          carMake: '',
          carModel: '',
          carYear: '',
          licencePlate: '',
          vin: '',
          date: '',
          time: '',
          location: '',
          services: [],
          mainService: '',
        })

        setActiveCard(null)
      } else {
        toast.error('Failed to send Appointment')
      }
    } catch (error) {
      toast.error('Something went wrong! Please try again')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-black px-4 py-4 text-white md:px-6 md:py-10 min-[1441px]:px-0"
      >
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="font-medium">
              Personal Information <span className="text-red-500">*</span>
            </h2>
            <div className="grid grid-cols-1 gap-3 pt-3 md:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[0-9]/g, '')
                  handleInputChange({ target: { name: 'firstName', value } } as any)
                }}
                required
                className="rounded-sm bg-white py-2 pl-6 text-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[0-9]/g, '')
                  handleInputChange({ target: { name: 'lastName', value } } as any)
                }}
                required
                className="rounded-sm bg-white py-2 pl-6 text-black"
              />
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image src="/appointmentForm/mail.png" alt="" width={16} height={16} />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  className="w-full rounded-sm bg-white py-2 pl-9 text-black"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image src="/appointmentForm/call.png" alt="" width={16} height={16} />
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9+\-\s]/g, '')
                    handleInputChange({ target: { name: 'phone', value } } as any)
                  }}
                  name="phone"
                  required
                  className="w-full rounded-sm bg-white py-2 pl-9 text-black"
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="font-medium">Car Information</h2>
            <div className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-3">
              <select
                name="carMake"
                value={formData.carMake}
                onChange={handleInputChange}
                id="carMake"
                required
                className="rounded-lg bg-white py-2 text-black"
              >
                <option value="" className="rounded-lg">
                  Select Car Make
                </option>
                {carMake.map((make) => (
                  <option className="" key={make.id} value={make.id}>
                    {make.name}
                  </option>
                ))}
              </select>

              <select
                name="carModel"
                id="carModel"
                value={formData.carModel}
                onChange={handleInputChange}
                required
                disabled={formData.carMake === '' || Number.isNaN(makeIdParsed)}
                className="rounded-lg bg-white py-2 text-black disabled:opacity-50"
              >
                <option value="">Select Car Model</option>
                {filteredModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>

              <input
                name="carYear"
                placeholder="Car Year *"
                value={formData.carYear}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '')
                  handleInputChange({ target: { name: 'carYear', value } } as any)
                }}
                required
                id="carYear"
                maxLength={4}
                className="rounded-lg bg-white py-2 pl-6 text-black"
              />

              <div className="grid grid-cols-1 gap-2 md:col-span-3 md:grid-cols-2">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image src="/appointmentForm/car_rental.png" alt="" width={16} height={16} />
                  </span>
                  <input
                    type="text"
                    placeholder="Licence Plate *"
                    value={formData.licencePlate}
                    onChange={(e) => {
                      const value = e.target.value.toUpperCase().replace(/[^A-Z0-9\s\-]/g, '')
                      handleInputChange({ target: { name: 'licencePlate', value } } as any)
                    }}
                    name="licencePlate"
                    className="w-full rounded-sm bg-white py-2 pl-9 text-black"
                    required
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      src="/appointmentForm/barcode_scanner.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </span>
                  <input
                    type="text"
                    value={formData.vin}
                    onChange={(e) => {
                      const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')
                      handleInputChange({ target: { name: 'vin', value } } as any)
                    }}
                    placeholder="Vin (Optional)"
                    name="vin"
                    maxLength={17}
                    className="w-full rounded-sm bg-white py-2 pl-9 text-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="font-medium">
              Appointment Details <span className="text-red-500">*</span>
            </h2>
            <div className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-3">
              <div className="relative" onClick={() => dateRef.current?.showPicker()}>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image src="/appointmentForm/calendar_month.png" alt="" width={16} height={16} />
                </span>
                <input
                  ref={dateRef}
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  name="date"
                  required
                  className="custom-date-input w-full rounded-sm bg-white py-2 pl-9 text-black cursor-pointer"
                />
              </div>
              <div className="relative" onClick={() => timeRef.current?.showPicker()}>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image src="/appointmentForm/alarm.png" alt="" width={16} height={16} />
                </span>
                <input
                  ref={timeRef}
                  type="time"
                  id="appointment"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  min="09:00"
                  max="18:00"
                  required
                  className="custom-date-input w-full rounded-sm bg-white py-2 pl-9 text-black cursor-pointer"
                />
              </div>
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image src="/appointmentForm/location_on.png" alt="" width={16} height={16} />
                </span>
                <select
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg bg-white py-3 pl-9 text-black"
                >
                  <option value="">Select Location</option>
                  {location.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="font-medium">
              Service Details <span className="text-red-500">*</span>
            </h2>
            <div className="grid grid-cols-1 gap-2 pt-2 md:grid-cols-2 lg:grid-cols-3">
              {mainService.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleMainServiceClick(i, String(c.id))}
                  className={`rounded-[15px] border border-secondary text-left transition-colors ${
                    activeCard === i ? 'bg-secondary' : 'bg-transparent'
                  }`}
                >
                  <Card
                    iconImg={typeof c.mainIcon === 'object' ? c.mainIcon?.url || '' : ''}
                    imgOnClick={typeof c.changedIcon === 'object' ? c.changedIcon?.url || '' : ''}
                    serviceTitle={c.title}
                    content={c.description}
                    clicked={activeCard === i}
                  />
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-6">
              {service.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleServiceToggle(String(s.id))}
                  className={`rounded-3xl px-3 py-2 transition-colors ${
                    formData.services.includes(String(s.id))
                      ? 'bg-secondary'
                      : 'border border-white'
                  }`}
                >
                  {s.serviceName}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
    mt-6
    rounded-lg
    bg-secondary
    px-6
    py-3
    font-medium
    text-white
    transition-all
    duration-300
    hover:scale-[1.03]
    hover:shadow-lg
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-70
    disabled:hover:scale-100
    flex
    items-center
    justify-center
    min-w-[220px]
  "
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </div>
            ) : (
              'Make an Appointment'
            )}
          </button>
        </div>
      </form>
    </>
  )
}

interface CardProps {
  iconImg: string
  imgOnClick: string | undefined
  serviceTitle: string
  content: string
  clicked: boolean
}

export const Card = ({ iconImg, imgOnClick, serviceTitle, content, clicked }: CardProps) => {
  const imgSrc = clicked ? imgOnClick : iconImg
  return (
    <div className="flex flex-row rounded-[15px] px-2 py-2">
      <Image src={imgSrc || iconImg} alt="" width={64} height={64} className="object-contain" />
      <div className="flex flex-col pl-2">
        <h3 className="font-medium">{serviceTitle}</h3>
        <p className="text-white/50">{content}</p>
      </div>
    </div>
  )
}
