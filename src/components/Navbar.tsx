'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, Menu, ChevronDown, ChevronUp } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isPageClicked, setIsPageClicked] = useState(false)
  const PAGE_LINKS = [
    { label: 'Dashboard', href: '#' },
    { label: 'Services', href: '/services' },
    { label: 'Our Team', href: '/ourteam' },
  ]
  const NAV_LINKS = [
    { label: 'AboutUs', href: '/aboutus' },
    { label: 'Appointment', href: '/appointment' },
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
  const logoSrc = scrolled || isOpen ? '/logoNavbarBlack.png' : '/logonavbar.png'

  return (
    <nav
      className={`fixed z-[900] w-full px-4 md:px-6 min-[1441px]:px-0 ${scrolled ? 'bg-white text-black' : isOpen ? 'bg-white text-black' : 'bg-transparent text-white'}`}
    >
      <div className="mx-auto w-full max-w-[1440px] grid md:grid-cols-3 grid-cols-2 items-center pt-6 pb-3">
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
            {NAV_LINKS.map((n, i) => (
              <a href={n.href} key={i} className="py-2 hover:text-secondary">
                {n.label}
              </a>
            ))}
            <div className="relative group hidden md:block">
              <button
                onClick={() => setIsPageClicked(!isPageClicked)}
                className="flex items-center gap-1 py-2 hover:text-secondary"
              >
                Pages
                {isPageClicked ? <ChevronUp /> : <ChevronDown />}
              </button>
              <div
                className={`absolute top-full left-0 bg-white text-black rounded-lg shadow-lg w-44 z-10 ${
                  isPageClicked ? 'block' : 'hidden group-hover:block'
                }`}
              >
                <ul className="p-2 text-sm font-medium">
                  {PAGE_LINKS.map((p, i) => (
                    <a
                      key={i}
                      href={p.href}
                      className="inline-flex w-full p-2 hover:bg-gray-100 rounded"
                    >
                      {p.label}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex lg:justify-center lg:items-center md:justify-end">
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

      <div
        className={`fixed inset-0 top-0 z-[-1] bg-white text-black flex flex-col gap-4 px-4 pt-24 md:hidden transition-transform duration-200 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((n, i) => (
          <a href={n.href} key={i} className="text-lg py-3 border-b border-gray-100">
            {n.label}
          </a>
        ))}

        <div>
          <button
            onClick={() => setIsPageClicked(!isPageClicked)}
            className="flex items-center justify-between w-full text-lg py-3 border-b border-gray-100"
          >
            Pages
            {isPageClicked ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isPageClicked && (
            <div className="flex flex-col">
              {PAGE_LINKS.map((p, i) => (
                <a href={p.href} key={i} className="text-lg py-3 border-b border-gray-100">
                  {p.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <button className="mt-4 rounded-lg bg-secondary px-6 h-12 text-white w-full">Login</button>
      </div>
    </nav>
  )
}
