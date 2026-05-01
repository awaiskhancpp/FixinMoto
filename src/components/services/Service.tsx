'use client'
import Card from '../Card'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Card {
  serviceNumber: number
  serviceName: string
  serviceIcon: { url: string; alt: string } | null
  backgroundImage: { url: string; alt: string } | null
}

export default function Service() {
  const [currentIndex, setCurrentIndex] = useState(0)
  //   const service = await getServices()
  const logos = [
    { src: '/toyota.png', alt: 'toyota' },
    { src: '/opel.png', alt: 'opel' },
    { src: '/kia.png', alt: 'kia' },
    { src: '/honda-car.png', alt: 'honda-car' },
    { src: '/audi.png', alt: 'audi' },
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <section className="w-full bg-[#222222] text-white relative md:p-23 p-10">
        <div>
          <p className="text-sm text-slate-500">Our Services</p>
          <h1 className="md:text-7xl text-3xl">
            <span className="text-[#DB323E]">Comprehensive</span>
            <br /> Automotive <span className="text-[#DB323E]">Solutions</span>
          </h1>
          <p className="lg:absolute lg:top-30 lg:right-30 text-slate-500">
            From routine maintenance to advanced
            <br /> diagnostics, we’ve got all your automotive
            <br /> needs covered.
          </p>
        </div>
        <div className="pt-20">
          <div className="grid grid-cols-12 gap-x-3 justify-items-center space-y-4">
            <a href="#" className="sm:col-span-6 lg:col-span-3 col-span-12">
              <Card />
            </a>
            <a href="#" className="sm:col-span-6 lg:col-span-3 col-span-12">
              <Card />
            </a>
            <a href="#" className="sm:col-span-6 lg:col-span-3 col-span-12">
              <Card />
            </a>
            <a href="#" className="sm:col-span-6 lg:col-span-3 col-span-12">
              <Card />
            </a>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#222222] text-white pb-10">
        <div className="flex w-full pl-20">
          <div className="text-2xl w-[70%]">
            Quality Car Repair You Can <br />
            Count On !
          </div>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {logos.map((l) => (
                <div key={l.alt} className="flex-none justify-center">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={120}
                    height={60}
                    className="invert object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
