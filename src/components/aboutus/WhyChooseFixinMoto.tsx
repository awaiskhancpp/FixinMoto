'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
interface Card {
  serviceNumber: number
  serviceName: string
  serviceIcon: { url: string; alt: string } | null
  backgroundImage: { url: string; alt: string } | null
}
const CARDS = [
  {
    detail:
      'Our certified and experienced technicians are committed to delivering top-notch service with precision and care. Trust FixinMoto for expert repairs, maintenance, and advice every time.',
    logoImg: '/servicelogo1.png',
    title: 'Certified and experienced technicians.',
  },
  {
    detail:
      'At FixinMoto, we believe in honest, upfront pricing with no hidden fees. What you see is what you pay guaranteeing peace of mind with every service.',
    logoImg: '/oilandfilterchange.png',
    title: 'Transparent pricing with no hidden charges.',
  },
  {
    detail:
      'We use the latest tools and diagnostic equipment to ensure accurate assessments and efficient repairs, so your vehicle gets the best care possible.',
    logoImg: '/breakinspection.png',
    title: 'Advanced tools and diagnostic equipment.',
  },
  {
    detail:
      'Experience fast, reliable service at FixinMoto, where we get you back on the road quickly without compromising on quality or safety.',
    logoImg: '/tirerotation.png',
    title: 'Fast, reliable service you can trust.',
  },
]
const logos = [
  { src: '/logoCarousel/Logo1.png', alt: 'logo1' },
  { src: '/logoCarousel/Logo.png', alt: 'logo2' },
  { src: '/logoCarousel/Logo3.png', alt: 'logo3' },
]

export default function WhyChooseFixinMoto() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [logoIndex, setLogoIndex] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchStartScrollLeft = useRef<number>(0)
  let word = ['Comprehensive', 'Solutions']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActiveCard(index)
  }
  const onTouchStart = (e: React.TouchEvent) => {
    const el = scrollRef.current
    if (!el) return
    touchStartX.current = e.touches[0].clientX
    touchStartScrollLeft.current = el.scrollLeft
  }
  const onTouchMove = (e: React.TouchEvent) => {
    const el = scrollRef.current
    if (!el) return
    const deltaX = e.touches[0].clientX - touchStartX.current
    el.scrollLeft = touchStartScrollLeft.current - deltaX
  }
  const onTouchEnd = () => {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
    setActiveCard(index)
  }
  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
    setActiveCard(index)
  }
  return (
    <>
      <section className="bg-black md:px-20 md:py-10 px-4 py-4 ">
        <div className="mx-auto max-w-[1440px]">
          <div className=" ">
            <h2 className="text-white font-semibold text-3xl ">Why Choose Fixin Moto?</h2>
            <h5 className="text-[#DB323E]">Your Trusted Partner for Quality Automotive Care</h5>
          </div>
          <div className="pt-6">
            <div
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory md:px-4 md:pb-4 sm:hidden "
              ref={scrollRef}
              onScroll={handleScroll}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {CARDS.map((card, i) => (
                <a href="#" className="snap-center shrink-0 w-[85vw]">
                  <Card title={card.title} logoImg={card.logoImg} details={card.detail} />
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  aria-label={`Go to card ${i + 1}`}
                  className="w-2 h-2 rounded-full transition-colors duration-300 md:hidden"
                  style={{ background: i === activeCard ? '#ef4444' : '#6b7280' }}
                />
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-12 md:gap-x-3 md:gap-4 md:space-y-4 ">
              {CARDS.map((card, i) => (
                <a href="#" key={i} className="sm:col-span-6 lg:col-span-3 col-span-12">
                  <Card title={card.title} logoImg={card.logoImg} details={card.detail} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
interface CardProps {
  logoImg: string
  title: string
  details: string
}
function Card({ logoImg, title, details }: CardProps) {
  return (
    <>
      <div className="border bg-primary flex flex-col h-100 rounded-[15px] overflow-hidden">
        <div className="text-white px-4 pt-10 flex flex-col gap-3">
          <Image
            src={logoImg}
            alt="servicelogo1"
            width={64}
            height={64}
            className="object-contain bg-secondary rounded-sm"
          />
          <h3 className="text-lg">{title}</h3>
          <p className="text-white/50 ">{details}</p>
        </div>
      </div>
    </>
  )
}
