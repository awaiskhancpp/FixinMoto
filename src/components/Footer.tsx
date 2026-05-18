'use client'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react'
import type { Setting as FooterType } from '@/payload-types'
import { useState } from 'react'
interface FooterProps {
  data: FooterType
}

export default function Footer({ data }: FooterProps) {
  const [email, setEmail] = useState('')
  return (
    <footer className="w-full bg-primary py-4 px-4 md:px-6 min-[1441px]:px-0 gap-y-0">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-14 text-white">
        <div className="lg:col-span-3 pt-4 order-2 lg:order-1">
          <Image
            src={
              typeof data.logo === 'object'
                ? data.logo?.url || '/logonavbar.png'
                : '/logonavbar.png'
            }
            width={140}
            height={42}
            alt="footerlogo"
          />
          <div className="lg:py-4 space-y-2 mt-3">
            <div className="flex">
              <MapPin className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">{data.address}</p>
            </div>
            <div className="flex">
              <Phone className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">{data.phone}</p>
            </div>
            <div className="flex ">
              <Mail className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">{data.contactEmail}</p>
            </div>
            <div className="flex">
              <Globe className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">{data.website}</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 lg:py-5 order-3 lg:order-2">
          <h3 className="text-2xl font-medium">Opening Hours</h3>
          <div className="space-y-2 mt-7">
            <p className="text-white/50">Mon-Fri : {data.serviceHours?.weekDays}</p>
            <p className="text-white/50">Sat-Sun: {data.serviceHours?.weekEnds}</p>
          </div>
        </div>
        <div className="lg:col-span-3  order-4 lg:order-3">
          <div className="grid">
            <h3 className="text-2xl font-medium lg:mt-5 pb-2">Quick Links</h3>
            <div className="space-y-2 mt-4 grid">
              <a href="aboutus" className="text-white/50">
                About us
              </a>
              <a href="#" className="text-white/50">
                Why with us
              </a>
              <a href="/services" className="text-white/50">
                Out Services
              </a>
              <a href="/appointment" className="text-white/50">
                Appointment
              </a>
              <a href="#" className="text-white/50">
                Blog
              </a>
              <a href="/contact" className="text-white/50">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 order-1 lg:order-4">
          <div className="grid-cols-1">
            <h3 className="font-medium pt-6">Subscribe to Our Newsletter</h3>
            <div className="space-y-5 mt-3">
              <p className="text-white/50">
                Sign up for our newsletter to receive exclusive promotions, news, and tips straight
                to your inbox.
              </p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Email Address"
                className="w-full border border-white/50 rounded-lg px-3 py-2.5 bg-transparent text-white/50 placeholder:text-white/50"
              />
              <button
                onClick={async () => {
                  fetch('/api/newsletter', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                  })
                  setEmail('')
                }}
                className="bg-secondary rounded-lg px-8 py-[15px] text-white text-sm font-medium shadow-[0px_4px_12px_rgba(34,34,34,0.1)] flex items-center gap-2"
              >
                Submit
                <ArrowUpRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/50 mt-10" />
      <div className="text-center text-white/50 text-sm py-8">
        Copyright © {new Date().getFullYear()} FixinMoto. All rights reserved.
      </div>
    </footer>
  )
}
