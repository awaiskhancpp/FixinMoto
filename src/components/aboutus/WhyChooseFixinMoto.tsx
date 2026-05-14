'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'

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
  const [activeCard, setActiveCard] = useState(0)
  const [visibleCards, setVisibleCards] = useState(1)
  const swiperRef = useRef<any>(null)

  const scrollToCard = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }
  }
  let word = ['Comprehensive', 'Solutions']

  return (
    <>
      <section className="bg-black px-4 py-10 md:px-6 min-[1441px]:px-0 md:py-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="">
            <h2 className="text-white font-semibold text-3xl pb-1">Why Choose Fixin Moto?</h2>
            <h5 className="text-[#DB323E]">Your Trusted Partner for Quality Automotive Care</h5>
          </div>
          <div className="pt-6">
            <div className="xl:hidden">
              <Swiper
                spaceBetween={16}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Navigation]}
                navigation={true}
                autoplay={{ delay: 5000 }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                onSlideChange={(swiper) => {
                  setActiveCard(swiper.realIndex)
                  setVisibleCards(swiper.params.slidesPerView as number)
                }}
                className="w-full"
              >
                {CARDS.map((card, i) => (
                  <SwiperSlide key={i}>
                    <Card title={card.title} logoImg={card.logoImg} details={card.detail} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex justify-center gap-2 mt-4 xl:hidden">
              {Array.from({ length: Math.ceil(CARDS.length / visibleCards) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className="w-2 h-2 rounded-full transition-colors duration-300"
                  style={{ background: i === activeCard ? '#ef4444' : '#6b7280' }}
                />
              ))}
            </div>

            <div className="hidden xl:grid md:grid-cols-12 md:gap-4 md:space-y-4">
              {CARDS.map((card, i) => (
                <a href="#" key={i} className="md:col-span-6 lg:col-span-4 xl:col-span-3">
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
      <div className="border bg-primary flex flex-col h-100 xl:h-90 rounded-[15px] overflow-hidden">
        <div className="text-white px-4 md:px-6 min-[1441px]:px-0 pt-10 flex flex-col gap-3">
          <Image
            src={logoImg}
            alt="servicelogo1"
            width={64}
            height={64}
            className="object-contain bg-secondary rounded-sm"
          />
          <div className="mt-10 md:mt-7">
            <h3 className="text-lg">{title}</h3>
            <p className="text-white/50">{details}</p>
          </div>
        </div>
      </div>
    </>
  )
}
