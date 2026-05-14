import Image from 'next/image'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-primary py-4 px-4 md:px-10 lg:px-15 xl:px-20 gap-y-0">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-14 text-white">
        <div className="lg:col-span-3 pt-4 order-2 lg:order-1">
          <Image src="/logonavbar.png" width={140} height={42} alt="footerlogo" />
          <div className="lg:py-4 space-y-2 mt-3">
            <div className="flex">
              <MapPin className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <div className="flex">
              <Phone className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">(480) 555-0103</p>
            </div>
            <div className="flex ">
              <Mail className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">hello@FixinMoto.com</p>
            </div>
            <div className="flex">
              <Globe className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">www.FixinMoto.com</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 lg:py-5 order-3 lg:order-2">
          <h3 className="text-2xl font-medium">Opening Hours</h3>
          <div className="space-y-2 mt-7">
            <p className="text-white/50">Mon-Fri : 08.00 - 20.00</p>
            <p className="text-white/50">Sat-Sun: 10.00 - 16.00</p>
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
                Contact with us
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
                placeholder=" Email Address"
                className="w-full border border-white/50 rounded-lg px-3 py-2.5 bg-transparent text-white/50 placeholder:text-white/50"
              />
              <button className="bg-secondary rounded-lg px-8 py-[15px] text-white text-sm font-medium shadow-[0px_4px_12px_rgba(34,34,34,0.1)] flex items-center gap-2">
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 4 12 L 11 5 M 11 5 L 11 9 M 11 5 L 7 5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/50 mt-10" />
      <div className="text-center text-white/50 text-sm py-8">
        Copyright © 2024 FixinMoto. All rights reserved.
      </div>
    </footer>
  )
}
