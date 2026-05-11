'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const logos = [
  { src: '/logoCarousel/Logo1.png', alt: 'logo1' },
  { src: '/logoCarousel/Logo.png', alt: 'logo2' },
  { src: '/logoCarousel/Logo3.png', alt: 'logo3' },
  { src: '/logoCarousel/Logo4.png', alt: 'logo4' },
  { src: '/logoCarousel/Logo5.png', alt: 'logo5' },
]

export default function TrustedPartners() {
  const loopLogos = [...logos, ...logos, ...logos]

  return (
    <section className="w-full bg-black text-white px-4 py-6 md:px-20 md:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid w-full grid-cols-12 items-center">
          <p className="col-span-12 mb-2 text-secondary">Trusted by Drivers Everywhere</p>
          <div className="col-span-12 mb-2 text-2xl md:text-3xl font-bold">
            Quality Car Repair You Can Count On
          </div>
          <div className="col-span-12 mt-4 w-full overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={50}
              loop
              speed={6000}
              wrapperClass="trusted-partners-wrapper"
              className="trusted-partners-swiper"
            >
              {loopLogos.map((l, i) => (
                <SwiperSlide key={`${l.src}-${i}`} className="!flex !h-auto !w-auto items-center">
                  <div className="flex h-[56px] w-[140px] shrink-0 items-center justify-center px-6">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      width={110}
                      height={50}
                      className="max-h-[50px] max-w-[110px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
