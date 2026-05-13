'use client'
import Card from '../Card'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { HeadingGrid } from '../HeadingGrid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import marqueeStyle from './ServiceLogo.module.css'
import { SwiperRef } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

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
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const swiperRef = useRef<SwiperRef>(null)
  let word = ['Comprehensive', 'Solutions']

  return (
    <>
      <section className="w-full bg-black text-white relative px-4 md:px-10 lg:px-15 xl:px-20 py-4">
        <div className="mx-auto max-w-[1440px]">
          <HeadingGrid
            pageDescription="From routine maintenance to advanced diagnostics, we’ve got all your automotive needs
              covered."
            pageTitle="Comprehensive Automotive Solutions"
            pageName="Our Services"
            wordsToHighlight={word}
          />
          <div className="">
            <div className="md:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                className="w-full"
                onSlideChange={(swiper) => setActiveCard(swiper.activeIndex)}
                ref={swiperRef}
              >
                {CARDS.map((card, i) => (
                  <SwiperSlide key={i}>
                    <a href="/services" className="w-[90vw] shrink-0">
                      <Card
                        title={card.title}
                        mainImg={card.mainImg}
                        logoImg={card.logoImg}
                        cardNo={card.cardNo}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex justify-center gap-2 mt-3 md:hidden">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.swiper.slideTo(i)
                    }
                  }}
                  aria-label={`Go to card ${i + 1}`}
                  className="w-2 h-2 rounded-full transition-colors duration-300"
                  style={{ background: i === activeCard ? '#ef4444' : '#6b7280' }}
                />
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4">
              {CARDS.map((card, i) => (
                <a href="/services" key={i} className="">
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
      <section className="w-full bg-black text-white md:px-10 lg:px-20 md:py-10  py-6">
        <div className="mx-auto max-w-[1440px]">
          <div className="w-full grid grid-cols-12 items-center">
            <div className="md:col-span-4 px-4 md:px-0 col-span-12 text-2xl ">
              Quality Car Repair You Can Count On!
            </div>
            <div className="overflow-hidden md:col-span-8 mt-2 col-span-12 w-full">
              <div className={`${marqueeStyle.track} gap-[50px]`}>
                {[...logos, ...logos, ...logos].map((l, i) => (
                  <div key={i} className="flex shrink-0 justify-center">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      width={110}
                      height={50}
                      className="object-contain px-6"
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
