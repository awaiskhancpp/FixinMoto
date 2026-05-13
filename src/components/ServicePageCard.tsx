'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ServicePageCard {
  title: string
  description: string
  imageSrc: string
}

export default function ServicePageCard({ title, description, imageSrc }: ServicePageCard) {
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    carMake: '',
    carModel: '',
    carYear: '',
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
      address: '',
      carMake: '',
      carModel: '',
      carYear: '',
      cardTitle: title,
      cardDescription: description,
    })
  }
  return (
    <div className="flex h-full flex-col items-center rounded-[15px] bg-primary px-6 py-16 text-center text-white">
      <div className="flex h-[118px] w-[118px] shrink-0 items-center justify-center">
        <Image src={imageSrc} alt="" width={118} height={118} className="object-contain" />
      </div>
      <h3 className="text-2xl font-medium leading-[1.3333333]">{title}</h3>
      <p className="flex flex-1 flex-col justify-center text-base leading-[1.625] text-white/50">
        {description}
      </p>
      <div className="mt-auto flex w-full flex-col xl:flex-row items-center justify-end gap-2 pt-2">
        <a
          href={`/services/${title}`}
          className="rounded-lg bg-secondary px-8 py-[15px] text-sm font-medium  text-white"
        >
          Details
        </a>
        <button
          type="button"
          onClick={() => setOpenModal(!openModal)}
          className="rounded-lg bg-secondary px-8 py-[15px] text-sm font-medium  text-white"
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
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="flex items-center absolute top-6 right-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 cursor-pointer fill-white hover:fill-secondary"
                viewBox="0 0 329.269 329"
              >
                <path d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
              </svg>
            </button>

            <div className="bg-secondary rounded-lg py-1">
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
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Car Make</label>
                <select
                  name="carMake"
                  value={formData.carMake}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select car make</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">
                  Car Model
                </label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  placeholder="Enter car model"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-slate-700 text-sm font-medium w-20 shrink-0">Car Year</label>
                <input
                  type="number"
                  name="carYear"
                  value={formData.carYear}
                  onChange={handleInputChange}
                  placeholder="Enter car year"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
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
