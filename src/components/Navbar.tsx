'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    console.log(scrolled)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed z-50 flex items-center justify-around w-full pt-6 pb-3 ${scrolled ? ' bg-white text-black' : 'bg-transparent text-white'}`}
      >
        <div className="flex items-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
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
            className={`${isOpen ? 'flex' : 'hidden'} bg-white flex-col md:top-auto top-full gap-4 border-none absolute  md:flex md:flex-row md:bg-transparent md:w-auto text-l `}
          >
            <a
              href="#"
              className="block py-2 px-3  rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
            >
              AboutUS
            </a>
            <a
              href="#"
              className="block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
            >
              Appointment
            </a>
            <a
              href="#"
              className="block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
            >
              Pages
            </a>
          </div>
        </div>
        <div>
          <Image
            src={'/logonavbar.png'}
            alt="navbarlogo"
            width={140}
            height={42}
            className={`${scrolled ? 'invert' : ' '} object-cover object-center`}
          />
        </div>
        <div>
          <button className="rounded-lg bg-[#DB323E] w-25 h-12 text-white">Login</button>
        </div>
      </nav>
    </>
  )
}
