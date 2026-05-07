'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isPageClicked, setIsPageClicked] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoSrc = scrolled || isOpen ? '/logoNavbarBlack.png' : '/logonavbar.png'

  return (
    <nav
      className={`fixed px-6 md:px-20 z-[900] w-full ${scrolled ? 'bg-white text-black' : isOpen ? 'bg-white text-black' : 'bg-transparent text-white'}`}
    >
      <div className="mx-auto w-full max-w-[1440px] grid md:grid-cols-3  grid-cols-2 items-center pt-6 pb-3">
        <div className="flex items-center">
          <a href="/" className="md:hidden">
            <Image
              src={logoSrc}
              alt="navbarlogo"
              width={120}
              height={36}
              className="object-cover"
            />
          </a>
          <div className="hidden md:flex flex-row gap-4 items-center">
            <a href="/aboutus" className="py-2 hover:text-secondary">
              AboutUS
            </a>
            <a href="/appointment" className="py-2 hover:text-secondary">
              Appointment
            </a>
            <div className="relative">
              <button
                onClick={() => setIsPageClicked(!isPageClicked)}
                className="flex items-center gap-1 py-2 hover:text-secondary"
              >
                Pages
                <svg
                  className={`w-4 h-4 transition-transform ${isPageClicked ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              {isPageClicked && (
                <div className="absolute top-full left-0 bg-white text-black rounded-lg shadow-lg w-44 z-10">
                  <ul className="p-2 text-sm font-medium">
                    <li>
                      <a href="#" className="inline-flex w-full p-2 hover:bg-gray-100 rounded">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="inline-flex w-full p-2 hover:bg-gray-100 rounded">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="inline-flex w-full p-2 hover:bg-gray-100 rounded"
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <a href="/">
            <Image
              src={logoSrc}
              alt="navbarlogo"
              width={140}
              height={42}
              className="object-cover"
            />
          </a>
        </div>

        <div className="flex justify-end items-center">
          <button
            type="button"
            className={`inline-flex p-2 w-10 h-10 justify-center rounded-base md:hidden ${scrolled || isOpen ? 'text-black' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <button className="hidden md:block rounded-lg bg-secondary px-6 h-12 text-white">
            Login
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-0 z-[-1] bg-white text-black flex flex-col gap-4 px-6 pt-24 md:hidden">
          <a href="/aboutus" className="text-lg py-3 border-b border-gray-100">
            AboutUS
          </a>
          <a href="/appointment" className="text-lg py-3 border-b border-gray-100">
            Appointment
          </a>
          <a href="/services" className="text-lg py-3 border-b border-gray-100">
            Services
          </a>
          <button className="mt-4 rounded-lg bg-secondary px-6 h-12 text-white w-full">
            Login
          </button>
        </div>
      )}
    </nav>
  )
}
