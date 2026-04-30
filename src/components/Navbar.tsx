'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="fixed z-50 flex justify-around w-full pt-4 bg-transparent">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
              className="text-white border-white"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? 'block' : 'hidden'} bg-white border-none text-gray-700 md:block md:bg-transparent flex justify-center md:w-auto text-l md:text-white sm:flex-row`}
        >
          <ul className="font-medium flex flex-col md:p-0  rounded-base md:flex-row md:space-x-8  md:bg-neutral-primary">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                AboutUS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Appointment
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Pages
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Image src={'/logonavbar.png'} alt="navbarlogo" width={140} height={42} />
        </div>
        <div>
          <button className="rounded-lg bg-[#DB323E] w-25 h-12 text-white">Login</button>
        </div>
      </nav>
    </>
  )
}
