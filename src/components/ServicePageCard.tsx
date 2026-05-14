'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ServicePageCard {
  title: string
  description: string
  imageSrc: string
  services: string[]
}

export default function ServicePageCard({
  title,
  description,
  imageSrc,
  services,
}: ServicePageCard) {
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    cardTitle: title,
    cardDescription: description,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOpenModal(false)
    setFormData({
      name: '',
      email: '',
      contact: '',
      cardTitle: title,
      cardDescription: description,
    })
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
          href={`/services/${title}`}
          className="rounded-lg border border-white px-11 xl:px-9 py-[15px] text-sm font-medium  text-white"
        >
          Details
        </a>
        <button
          type="button"
          onClick={() => setOpenModal(!openModal)}
          className="rounded-lg bg-secondary px-8 xl:px-6 py-[15px] text-sm font-medium  text-white"
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
            <div className="bg-secondary rounded-lg py-2">
              <h2 id="modal-title" className="text-white text-xl font-semibold mb-4">
                {title}
              </h2>
              <p className="text-white text-sm mb-4">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 mt-4">
              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Name</label>
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
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Email</label>
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
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Phone</label>
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
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Date</label>
                <input
                  type="date"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Time</label>
                <input
                  type="time"
                  id="appointment"
                  name="appointment"
                  min="09:00"
                  max="18:00"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Service</label>
                <select
                  name="location"
                  id="location"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 "
                >
                  <option defaultValue={title}>{title}</option>
                  {services.map((s, i) => (
                    <>
                      {s != title && (
                        <option value={s} key={i}>
                          {s}
                        </option>
                      )}
                    </>
                  ))}
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
                  className="flex-1 px-4 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-secondary transition-colors hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
