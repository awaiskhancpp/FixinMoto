'use client'
import Card from '../Card'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { HeadingGrid } from '../HeadingGrid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import marqueeStyle from './ServiceLogo.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import type { Service } from '@/payload-types'
import type { TrustedBy } from '@/payload-types'
import { getMediaUrl } from '@/lib/getMediaURL'

interface CardProps {
  card: Service[]
  trustedBy: TrustedBy[]
}
interface Card {
  serviceNumber: number
  serviceName: string
  serviceIcon: { url: string; alt: string } | null
  backgroundImage: { url: string; alt: string } | null
}
// const CARDS = [
//   {
//     cardNo: 1,
//     mainImg: '/engineRepairMain.png',
//     logoImg: '/servicelogo1.png',
//     title: 'Engine Repair & Maintenance',
//   },
//   {
//     cardNo: 2,
//     mainImg: '/oil&filterChange.webp',
//     logoImg: '/oilandfilterchange.png',
//     title: 'Oil & Filter Changes',
//   },
//   {
//     cardNo: 3,
//     mainImg: '/break&services.webp',
//     logoImg: '/breakinspection.png',
//     title: 'Brake Services',
//   },
//   { cardNo: 4, mainImg: '/tireCareMain.webp', logoImg: '/tirerotation.png', title: 'Tire Care' },
// ]
// const logos = [
//   { src: '/logoCarousel/Logo1.png', alt: 'logo1' },
//   { src: '/logoCarousel/Logo.png', alt: 'logo2' },
//   { src: '/logoCarousel/Logo3.png', alt: 'logo3' },
// ]
export default function Service({ card, trustedBy }: CardProps) {
  const [activeCard, setActiveCard] = useState(0)
  const loopedLogo = [...trustedBy, ...trustedBy, ...trustedBy]
  const swiperRef = useRef<any>(null)
  let word = ['Comprehensive', 'Solutions']

  return (
    <>
      <section className="w-full bg-black text-white relative px-4 md:px-6 min-[1441px]:px-0 py-6">
        <div className="mx-auto max-w-[1440px]">
          <HeadingGrid
            pageDescription="From routine maintenance to advanced diagnostics, we’ve got all your automotive needs
              covered."
            pageTitle="Comprehensive Automotive Solutions"
            pageName="Our Services"
            wordsToHighlight={word}
          />
          <div className="">
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
                className="w-full"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                onSlideChange={(swiper) => setActiveCard(swiper.activeIndex)}
              >
                {card.map((c) => (
                  <SwiperSlide key={c.id}>
                    <a href="/services" className="">
                      <Card
                        title={c.serviceName}
                        mainImg={
                          typeof c.backgroundImage === 'object' && c.backgroundImage !== null
                            ? c.backgroundImage.url || '/'
                            : '/'
                        }
                        logoImg={
                          typeof c.serviceIcon === 'object' && c.serviceIcon !== null
                            ? c.serviceIcon.url || '/'
                            : '/'
                        }
                        cardNo={c.serviceNumber}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex justify-center gap-2 mt-3 xl:hidden">
              {card.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(i)
                    }
                  }}
                  className="w-2 h-2 rounded-full transition-colors duration-300"
                  style={{ background: i === activeCard ? '#ef4444' : '#6b7280' }}
                />
              ))}
            </div>
            <div className="hidden xl:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {card.map((c, i) => (
                <a href="/services" key={i} className="">
                  <Card
                    title={c.serviceName}
                    mainImg={
                      typeof c.backgroundImage === 'object' && c.backgroundImage !== null
                        ? c.backgroundImage.url || '/'
                        : '/'
                    }
                    logoImg={
                      typeof c.serviceIcon === 'object' && c.serviceIcon !== null
                        ? c.serviceIcon.url || '/'
                        : '/'
                    }
                    cardNo={c.serviceNumber}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black text-white px-4 md:px-6 min-[1441px]:px-0 py-6 md:py-15">
        <div className="mx-auto max-w-[1440px]">
          <div className="w-full grid grid-cols-12 items-center">
            <div className="md:col-span-4 px-4 md:px-0 col-span-12 text-lg font-semibold ">
              Quality Car Repair You Can Count On!
            </div>
            <div className="overflow-hidden md:col-span-8 mt-3 col-span-12 w-full">
              <div className={`${marqueeStyle.track} gap-[50px]`}>
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView="auto"
                  spaceBetween={50}
                  loop
                  speed={6000}
                  wrapperClass="trusted-partners-wrapper"
                  className="trusted-partners-swiper"
                >
                  {loopedLogo.map((l, i) => (
                    <SwiperSlide key={i} className="!flex !h-auto !w-auto items-center">
                      <div className="flex h-[56px] w-[140px] shrink-0 items-center justify-center px-6">
                        <Image
                          src={typeof l?.Logo === 'object' ? l.Logo?.url || '' : ''}
                          alt="..."
                          width={110}
                          height={50}
                          className="max-h-[50px] max-w-[110px] object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* {trustedBy.map((l, i) => (
                  <div key={i} className="flex shrink-0 justify-center">
                    <Image
                      src={typeof l?.Logo === 'object' ? l.Logo?.url || '' : ''}
                      alt="..."
                      width={110}
                      height={50}
                      className="object-contain px-6"
                    />
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
