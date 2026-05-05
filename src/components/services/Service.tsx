'use client'
import Card from '../Card'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HeadingGrid } from '../HeadingGrid'

interface Card {
  serviceNumber: number
  serviceName: string
  serviceIcon: { url: string; alt: string } | null
  backgroundImage: { url: string; alt: string } | null
}
const CARDS = [
  {
    cardNo: 1,
    mainImg: '/engineRepairMain.png',
    logoImg: '/servicelogo1.png',
    title: 'Engine Repair & Maintenance',
  },
  {
    cardNo: 2,
    mainImg: '/oil&filterChange.webp',
    logoImg: '/oilandfilterchange.png',
    title: 'Oil & Filter Changes',
  },
  {
    cardNo: 3,
    mainImg: '/break&services.webp',
    logoImg: '/breakinspection.png',
    title: 'Brake Services',
  },
  { cardNo: 4, mainImg: '/tireCareMain.webp', logoImg: '/tirerotation.png', title: 'Tire Care' },
]
const logos = [
  { src: '/logoCarousel/Logo1.png', alt: 'logo1' },
  { src: '/logoCarousel/Logo.png', alt: 'logo2' },
  { src: '/logoCarousel/Logo3.png', alt: 'logo3' },
]
export default function Service() {
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
      <section className="w-full bg-[#222222] text-white relative">
        <div className="mx-auto max-w-[1440px]">
          <HeadingGrid
            pageDescription="From routine maintenance to advanced diagnostics, we’ve got all your automotive needs
              covered."
            pageTitle="Comprehensive Automotive Solutions"
            pageName="Our Services"
            wordsToHighlight={word}
          />
          <div className="pt-10 md:px-20 md:py-10 px-4 py-4">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:px-4 md:pb-4 sm:hidden"
              ref={scrollRef}
              onScroll={handleScroll}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {CARDS.map((card, i) => (
                <a href="/services" key={i}>
                  <Card
                    title={card.title}
                    mainImg={card.mainImg}
                    logoImg={card.logoImg}
                    cardNo={card.cardNo}
                  />
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
            <div className="hidden md:grid md:grid-cols-12 md:gap-x-3 md:gap-4 md:space-y-4">
              {CARDS.map((card, i) => (
                <a href="/services" key={i} className="sm:col-span-6 lg:col-span-3 col-span-12">
                  <Card
                    title={card.title}
                    mainImg={card.mainImg}
                    logoImg={card.logoImg}
                    cardNo={card.cardNo}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#222222]  text-white pb-2">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex w-full pl-4 md:pl-20 justify-center items-center">
            <div className="text-2xl w-[70%] ">
              Quality Car Repair You Can <br />
              Count On !
            </div>
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 10}%)` }}
              >
                {[...logos, ...logos].map((l, i) => (
                  <div key={i} className="flex justify-center ">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      width={110}
                      height={50}
                      className="object-contain object-fit px-6 "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
