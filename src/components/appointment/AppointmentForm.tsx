'use client'
import { useState } from 'react'
import Image from 'next/image'
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

export default function AppointmentForm() {
  const [activeCard, setActiveCard] = useState<Number | null>(null)
  const [selectedButtons, setSelectedButtons] = useState<Set<number>>(new Set())

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
  return (
    <>
      <section className="bg-black text-white px-4 py-4 md:px-10 lg:px-15 xl:px-20 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="font-medium">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-3 pt-3 grid-cols-1 ">
              <input
                type="text"
                placeholder="   First Name"
                className="bg-white rounded-sm text-black py-2"
              />
              <input
                type="text"
                placeholder="   Last Name"
                className="bg-white rounded-sm text-black py-2"
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
                  className="bg-white rounded-sm text-black py-2 pl-9 w-full"
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
                  className="bg-white rounded-sm text-black py-2 w-full pl-9"
                />
              </div>
            </div>
          </div>
          <div className="pt-3">
            <h2 className="font-medium">Car Information</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 pt-2 gap-2">
              <select name="carmake" id="carmake" className=" py-2 rounded-lg text-black bg-white">
                <option defaultValue="null">Select Car Make</option>
                <option value="audi">Audi</option>
                <option value="audi">Mercedes</option>
              </select>
              <select
                name="carmodel"
                id="carmodel"
                className=" py-2 rounded-lg text-black bg-white"
              >
                <option defaultValue="null">Select Car Model</option>
                <option value="a4">A4</option>
                <option value="a3">A3</option>
              </select>
              <select name="caryear" id="caryear" className=" py-2 rounded-lg text-black bg-white">
                <option defaultValue="null">Select Car Year</option>
                <option value="2000">2000</option>
                <option value="2026">2026</option>
              </select>
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
                    placeholder="Vin (Optional)"
                    className="bg-white rounded-sm text-black py-2 w-full pl-9"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <h2 className="font-medium">Appointment Details</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
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
                <input type="date" className="text-black bg-white py-2 rounded-sm w-full pl-9" />
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
                  className="py-2 rounded-lg text-black bg-white w-full pl-9 "
                >
                  <option defaultValue="null">Select Location</option>
                  <option value="abt">Abbottabad</option>
                  <option value="rawalpindi">Rawalpindi</option>
                </select>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <h2 className="font-medium">Service Details</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 pt-2 ">
              {CarInfo.map((c, i) => (
                <div key={i} onClick={() => setActiveCard(i)}>
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
      </section>
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
    <div
      className={`flex flex-row border py-2 border-secondary rounded-[15px] px-2 ${clicked ? 'bg-secondary' : ''}`}
    >
      <Image src={imgSrc || '/'} alt="..." width={64} height={64} className=" object-fit" />
      <div className="flex flex-col pl-2">
        <h3 className="font-medium">{serviceTitle}</h3>
        <p className="text-white/50">{content}</p>
      </div>
    </div>
  )
}
