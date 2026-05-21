'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, Menu, ChevronDown, ChevronUp } from 'lucide-react'
import type { Service } from '@/payload-types'
import type { Setting } from '@/payload-types'

interface NavbarProps {
  services: Service[]
  data: Setting
}

export default function Navbar({ services, data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isPageClicked, setIsPageClicked] = useState(false)

  const NAV_LINKS = [
    { label: 'About Us', href: '/aboutus' },
    { label: 'Appointment', href: '/appointment' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Our Team', href: '/ourteam' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => setIsPageClicked(false)
    if (isPageClicked) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isPageClicked])

  const logoSrc =
    scrolled || isOpen
      ? '/logoNavbarBlack.png'
      : typeof data.logo === 'object'
        ? data.logo?.url || ''
        : ''

  const shouldBeWhite = scrolled || isOpen

  return (
    <nav
      className={`fixed z-[900] w-full px-4 md:px-6 min-[1441px]:px-0 transition-all duration-300 ${
        shouldBeWhite ? 'bg-white text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className="hidden lg:flex justify-between items-center pt-6 pb-3 mx-auto w-full max-w-[1440px]">
        <a href="/">
          <Image
            src={logoSrc}
            alt="logo"
            width={140}
            height={42}
            className="object-cover transition-all duration-300"
          />
        </a>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((n, i) => (
            <a href={n.href} key={i} className="py-2 hover:text-secondary">
              {n.label}
            </a>
          ))}

          <div className="relative group">
            <button
              className="flex items-center gap-1 py-2 hover:text-secondary"
              onClick={() => setIsPageClicked(!isPageClicked)}
            >
              Services
              {isPageClicked ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div
              className={`absolute top-full left-0 bg-white text-black rounded-lg shadow-lg w-60 z-10 ${
                isPageClicked ? 'block' : 'hidden group-hover:block'
              }`}
            >
              <ul className="p-2 text-sm font-medium">
                {services.slice(0, 5).map((p, i) => (
                  <a
                    key={i}
                    href={`/services/${p.slug}`}
                    className="inline-flex w-full p-2 hover:text-secondary rounded"
                  >
                    {p.serviceName}
                  </a>
                ))}
                <a href="/services" className="inline-flex w-full p-2 hover:text-secondary rounded">
                  View all Services
                </a>
              </ul>
            </div>
          </div>

          <a href="/contact">
            <button className="rounded-lg bg-secondary px-6 h-12 text-white">Contact Us</button>
          </a>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-6 pb-3 mx-auto w-full max-w-[1440px]">
        <a href="/">
          <Image src={logoSrc} alt="logo" width={120} height={36} className="object-cover" />
        </a>

        <button className="p-2 w-10 h-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-0 z-[-1] bg-white text-black flex flex-col gap-4 px-4 pt-24 lg:hidden transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((n, i) => (
          <a href={n.href} key={i} className="text-lg py-3 border-b border-gray-100">
            {n.label}
          </a>
        ))}

        <a href="/services">
          <button
            onClick={() => setIsPageClicked(!isPageClicked)}
            className="flex items-center justify-between w-full text-lg py-3 border-b border-gray-100"
          >
            Services
            {/* {isPageClicked ? <ChevronUp /> : <ChevronDown />} */}
          </button>
        </a>

        {/* {isPageClicked && (
          <div className="flex flex-col">
            {services.slice(0, 5).map((p, i) => (
              <a
                href={`/services/${p.slug}`}
                key={i}
                className="text-lg py-3 border-b border-gray-100 hover:text-secondary"
              >
                {p.serviceName}
              </a>
            ))}
          </div>
        )} */}

        <a href="/contact">
          <button className="mt-4 rounded-lg bg-secondary px-6 h-12 text-white w-full">
            Contact Us
          </button>
        </a>
      </div>
    </nav>
  )
}
