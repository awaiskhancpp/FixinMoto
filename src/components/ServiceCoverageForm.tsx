'use client'
import Map from './MapClient'
import { Card } from './appointment/AppointmentForm'
import { useState } from 'react'
export default function ServiceCoverageForm() {
  const [activeCard, setActiveCard] = useState<Number | null>(null)
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
  return (
    <div className="relative w-full ">
      <Map />
      <div className="absolute inset-0 z-[500] flex items-center justify-center md:px-20 md:py-10 px-6 py-6">
        <div className="w-full md:mx-auto max-w-[1440px] ">
          <div className="bg-black md:w-[500px] md:h-[600px] h-auto rounded-xl flex flex-col justify-center items-start space-y-4 py-6">
            <h3 className="text-white">We’ve Got You Covered</h3>
            <p className="text-white/50">
              Fast, Reliable Auto Repair and Roadside Assistance, Delivered Right to Your Location
              Anytime, Anywhere.
            </p>
            <div className="grid md:grid-cols-2 grid-col-1">
              <input
                type="text"
                placeholder="First Name"
                className=" text-gray-500 border border-white/50 px-3 py-3 rounded-lg bg-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" text-gray-500 border border-white/50 px-3 py-3 rounded-lg bg-white"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="text-white/50 border border-white/50 px-3 py-3 rounded-[15px] bg-transparent"
            />
            <input
              type="text"
              placeholder="Phone"
              className="text-white/50 border border-white/50 px-3 py-3 rounded-[15px] bg-transparent"
            />
            <input
              type="text"
              placeholder="Enter Your Location"
              className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
            />
            <select
              name="places"
              id="places"
              className="border w-[90%] px-3 py-3 rounded-lg text-gray-500 bg-white"
            >
              <option defaultValue="null">Select Your Area</option>
              <option value="london">London</option>
              <option value="newyork">New York</option>
              <option value="sandiego">San Diego</option>
            </select>
            <div className="w-full ">
              <h2 className="font-medium">Service Details</h2>
              <div className="grid text-white grid-cols-1 gap-2 pt-2 ">
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
            </div>

            <button className="bg-secondary rounded-lg text-white py-3 px-10 flex items-start">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
