'use client'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
  }
  const socials = [
    { src: '/social/twitter.png', alt: 'twitter' },
    { src: '/social/insta.png', alt: 'instagram' },
    { src: '/social/facebook.png', alt: 'facebook' },
    { src: '/social/linkdin.png', alt: 'linkedin' },
  ]

  return (
    <div className="w-full bg-primary">
      <div className="relative flex min-h-[480px] w-full flex-col justify-center items-center">
        <Image
          src="/contact_us_main.jpg"
          alt="..."
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 flex w-full flex-col justify-center items-center px-4 py-4 md:px-10 lg:px-15 xl:px-20 md:py-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <h1 className="mx-auto text-4xl font-semibold leading-[1.125] text-white md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
              Get in Touch with Us
            </h1>
            <p className="text-white/80 mt-3">
              We're here to assist you. Send us a message, and we'll get back to you with the
              information you need.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 md:px-10 lg:px-15 xl:px-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12  text-white gap-5">
          <div className="md:col-span-7 flex flex-col gap-5">
            <div>
              <h2 className="text-4xl">Send us a Message!</h2>
              <p className="text-white/50 mt-2">
                We're here to assist you. Send us a message, and we'll get back to you with the
                information you need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="text-white/50 border border-white/50 px-3 py-3 rounded-[15px] bg-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="text-white/50 border border-white/50 px-3 py-3 rounded-[15px] bg-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-white/50 border border-white/50 px-3 py-3 rounded-[15px] bg-transparent"
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="text-white/50 border border-white/50 px-3 py-3 rounded-[15px] bg-transparent"
              />
              <div className="col-span-1 sm:col-span-2">
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-[160px] rounded-[15px] border border-white/50 bg-transparent px-3 py-3 text-white placeholder:text-white/50"
                />
              </div>
              <button className="bg-secondary px-4 py-4 rounded-lg" onSubmit={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-4">
            <div>
              <h2 className="text-4xl">Our Contact</h2>
              <p className="text-white/50 mt-2">
                Whether you need support or want to discuss something with our team, we're here to
                help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <button className="flex items-center bg-secondary px-3 py-3 rounded-lg gap-2 text-white text-sm">
                <MapPin className="shrink-0" size={18} />
                2464 Royal Ln. Mesa, New Jersey 45463
              </button>
              <button className="flex items-center justify-center bg-secondary px-3 py-3 rounded-lg gap-2 text-white text-sm">
                <Phone className="shrink-0" size={18} />
                (480) 555-0103
              </button>
              <div className="col-span-2">
                <button className="w-full flex items-center justify-center bg-secondary px-3 py-6 rounded-lg gap-2 text-white text-sm">
                  <Mail className="shrink-0" size={18} />
                  hello@FixinMoto.com
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-auto pt-4">
              <h3 className="text-lg font-medium">Follow Us on</h3>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.alt}
                    className="bg-secondary rounded-md p-2 flex items-center justify-center cursor-pointer"
                  >
                    <Image src={s.src} alt={s.alt} width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
