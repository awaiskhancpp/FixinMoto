import Image from 'next/image'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#292929]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 py-4 px-4 lg:px-20 text-white">
        <div className="lg:col-span-3 pt-4">
          <Image src="/logonavbar.png" width={140} height={42} alt="footerlogo" />
          <div className="py-4 space-y-2 mt-3">
            <div className="flex">
              <MapPin className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <div className="flex">
              <Phone className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p>(480) 555-0103</p>
            </div>
            <div className="flex ">
              <Mail className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p>hello@FixinMoto.com</p>
            </div>
            <div className="flex">
              <Globe className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p>www.FixinMoto.com</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 py-5">
          <h1 className="font-medium ">Opening Hours</h1>
          <div className="space-y-2 mt-7">
            <p>Mon-Fri : 08.00 - 20.00</p>
            <p>Sat-Sun: 10.00 - 16.00</p>
          </div>
        </div>
        <div className="lg:col-span-3 ">
          <div className="grid">
            <h1 className="font-medium mt-6">Quick Links</h1>
            <div className="space-y-2 mt-4 grid">
              <a href="#">About us</a>
              <a href="#">Why with us</a>
              <a href="#">Out Services</a>
              <a href="#">Appointment</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="grid-cols-1">
            <h1 className="font-medium pt-6">Subscribe to Our Newsletter</h1>
            <div className="space-y-5 mt-3">
              <p>
                Sign up for our newsletter to receive exclusive promotions, news, and tips straight
                to your inbox.
              </p>
              <input
                type="text"
                placeholder=" Email Address"
                className="w-full border-[0.5px] pt-2 pr-1.5 pb-2 pl-1rem border-white rounded-lg"
              />
              <button className="bg-red-500 p-2 rounded-lg px-3 pr-3 flex">
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
      <div className="border-t border-gray-700" />
      <div className="text-center text-gray-400 text-small py-4">
        Copyright © 2024 FixinMoto. All rights reserved.
      </div>
    </footer>
  )
}
