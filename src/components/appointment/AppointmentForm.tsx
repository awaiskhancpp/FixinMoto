'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { CarMake, CarModel, Service, Location } from '@/payload-types'
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
const ButtonName = [
  { name: 'Oil Change', onclick: {} },
  { name: 'Brake Repair', onclick: {} },
  { name: 'Tire Services', onclick: {} },
  { name: 'Battery Check/Replacement', onclick: {} },
  { name: 'Engine Diagnostic', onclick: {} },
  { name: 'Transmission Service', onclick: {} },
  { name: 'AC/Heating Repair', onclick: {} },
  { name: 'Suspension/Steering Repair', onclick: {} },
  { name: 'Exhaust Repair', onclick: {} },
  { name: 'General Maintenance', onclick: {} },
  { name: 'Car Wash and Detailing', onclick: {} },
  { name: 'Windshield Repair', onclick: {} },
]
interface AppointmentFormProps {
  location: Location[]
  carMake: CarMake[]
  carModel: CarModel[]
  service: Service[]
}

export default function AppointmentForm({
  location,
  carMake,
  carModel,
  service,
}: AppointmentFormProps) {
  const [activeCard, setActiveCard] = useState<Number | null>(null)
  const [selectedButtons, setSelectedButtons] = useState<Set<number>>(new Set())
  const [selectedMake, setSelectedMake] = useState<string | number>('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    carYear: '',
    licensePlate: '',
    vin: '',
    date: '',
    time: '',
    location: '',
    services: [] as string[],
    mainService: [] as string[],
  })
  const toggleButton = (i: number) => {
    setSelectedButtons((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(i)) {
        newSet.delete(i)
      } else {
        newSet.add(i)
      }
      return newSet
    })
  }
  const filteredModels = carModel.filter(
    (model) => typeof model.make === 'object' && model.make?.id === selectedMake,
  )
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (name === 'carMake') {
      setSelectedMake(value)
    }
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

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Appointment booked successfully!')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to book appointment')
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white px-4 py-4 md:px-6 min-[1441px]:px-0 md:py-10"
      >
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="font-medium">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-3 pt-3 grid-cols-1 ">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-white rounded-sm text-black py-2 pl-6"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-white rounded-sm text-black py-2 pl-6"
              />
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image
                    src="/appointmentForm/mail.png"
                    alt=""
                    width={16}
                    height={16}
                    className=""
                  />
                </span>
                <input
                  type="text"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white rounded-sm text-black py-2 pl-9 w-full"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image
                    src="/appointmentForm/call.png"
                    alt=""
                    width={16}
                    height={16}
                    className=""
                  />
                </span>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white rounded-sm text-black py-2 w-full pl-9"
                />
              </div>
            </div>
          </div>
          <div className="pt-6">
            <h2 className="font-medium">Car Information</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 pt-3 gap-2">
              <select
                name="carmake"
                value={formData.carMake}
                onChange={handleInputChange}
                id="carmake"
                className=" py-2 rounded-lg text-black bg-white"
              >
                <option defaultValue="">Select Car Make</option>
                {carMake.map((make) => (
                  <option key={make.id} value={make.id}>
                    {make.name}
                  </option>
                ))}
              </select>
              <select
                name="carmodel"
                id="carmodel"
                value={formData.carModel}
                onChange={handleInputChange}
                className=" py-2 rounded-lg text-black bg-white"
              >
                <option defaultValue="">Select Car Model</option>
                {filteredModels.map((model) => (
                  <option value={model.id}>{model.name}</option>
                ))}
              </select>
              <input
                name="caryear"
                placeholder="Car Year"
                value={formData.carYear}
                onChange={handleInputChange}
                id="caryear"
                className=" py-2 rounded-lg text-black bg-white pl-6"
              />
              <div className="md:col-span-3 grid md:grid-cols-2 grid-cols-1 gap-2">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      src="/appointmentForm/car_rental.png"
                      alt=""
                      width={16}
                      height={16}
                      className=""
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Licence Plate"
                    value={formData.licensePlate}
                    onChange={handleInputChange}
                    className="col-start-1 col-end-[5/2] bg-white rounded-sm text-black py-2 w-full pl-9"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      src="/appointmentForm/barcode_scanner.png"
                      alt=""
                      width={16}
                      height={16}
                      className=""
                    />
                  </span>
                  <input
                    type="text"
                    value={formData.vin}
                    onChange={handleInputChange}
                    placeholder="Vin (Optional)"
                    className="bg-white rounded-sm text-black py-2 w-full pl-9"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <h2 className="font-medium">Appointment Details</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 pt-3 gap-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image
                    src="/appointmentForm/calendar_month.png"
                    alt=""
                    width={16}
                    height={16}
                    className=""
                  />
                </span>
                <input
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="text-black bg-white py-2 rounded-sm w-full pl-9"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image
                    src="/appointmentForm/alarm.png"
                    alt=""
                    width={16}
                    height={16}
                    className=""
                  />
                </span>
                <input
                  type="time"
                  id="appointment"
                  name="appointment"
                  value={formData.time}
                  onChange={handleInputChange}
                  min="09:00"
                  max="18:00"
                  className="bg-white text-black py-2 rounded-sm w-full pl-9"
                />
              </div>
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image
                    src="/appointmentForm/location_on.png"
                    alt=""
                    width={16}
                    height={16}
                    className=""
                  />
                </span>
                <select
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="py-2 rounded-lg text-black bg-white w-full pl-9 "
                >
                  <option defaultValue="">Select Location</option>
                  {location.map((l, i) => (
                    <option value={l.name} key={i}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <h2 className="font-medium">Service Details</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2 pt-2 ">
              {CarInfo.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className={`border border-secondary rounded-[15px] ${activeCard === i ? 'bg-secondary' : ''}`}
                >
                  <Card
                    iconImg={c.iconImg}
                    imgOnClick={c.imgOnClick}
                    serviceTitle={c.serviceTitle}
                    content={c.content}
                    clicked={activeCard === i}
                  />
                </div>
              ))}
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              {ButtonName.map((b, i) => (
                <button
                  key={i}
                  onClick={() => toggleButton(i)}
                  className={`rounded-3xl px-3 py-2 ${
                    selectedButtons.has(i) ? 'bg-secondary' : 'border border-white'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>
          <button className="mt-4 rounded-lg bg-secondary px-5 py-2">Make an Appointment</button>
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
    <div className={`flex flex-row py-2 px-2 rounded-[15px] `}>
      <Image src={imgSrc || '/'} alt="..." width={64} height={64} className=" object-contain" />
      <div className="flex flex-col pl-2">
        <h3 className="font-medium">{serviceTitle}</h3>
        <p className="text-white/50">{content}</p>
      </div>
    </div>
  )
}
