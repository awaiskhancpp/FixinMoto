'use client'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Testimonial } from '@/payload-types'
import 'swiper/css'
interface TestimonialProps {
  card: Testimonial[]
}

const TESTIMONIALS = ''
export default function Testimonials({ card }: TestimonialProps) {
  const [activeCard, setActiveCard] = useState<Number | null>(null)
  const swiperRef = useRef<any | null>(null)
  const scrollToCard = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }
  }
  return (
    <>
      <section className="bg-primary px-4 py-10  md:px-6 min-[1441px]:px-0 md:py-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-center items-center text-white">
            <div className="">
              <p className="text-slate-400 md:flex md:justify-center md:items-center">
                Testimonials
              </p>
              <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl mt-2">
                <span className="text-secondary">Real</span> Reviews from Fixinmoto{' '}
                <span className="text-secondary">Customers</span>
              </h2>
            </div>
            <div className="mt-2 pb-2">
              <p className="text-slate-400">
                Find out why Fixinmoto is the go-to choice for car repairs and service!
              </p>
            </div>
          </div>
          <div className="lg:hidden pt-5">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              onSlideChange={(swiper) => setActiveCard(swiper.activeIndex)}
              className="w-full"
            >
              {card.map((t, i) => {
                const imageUrl =
                  typeof t.clientImage === 'object' && t.clientImage !== null
                    ? t.clientImage.url || '/'
                    : '/'

                return (
                  <SwiperSlide key={i}>
                    <TestimonialCard
                      name={t.name}
                      image={imageUrl}
                      quote={t.testimonial}
                      rating={t.rating}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {card.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className="w-2 h-2 rounded-full transition-colors"
                style={{ background: i === activeCard ? '#ef4444' : '#6b7280' }}
              />
            ))}
          </div>
          <div className="hidden lg:grid  lg:grid-cols-3 justify-center items-center gap-4 pt-5">
            {card.map((t, i) => (
              <div key={i} onClick={() => setActiveCard(i)}>
                <TestimonialCard
                  name={t.name}
                  image={
                    typeof t.clientImage === 'object' && t.clientImage !== null
                      ? t.clientImage.url || '/'
                      : '/'
                  }
                  quote={t.testimonial}
                  rating={t.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
interface TestimonialCardProps {
  name: string
  image: string
  quote: string
  rating: number
}
const TestimonialCard = ({ name, image, quote, rating }: TestimonialCardProps) => {
  return (
    <div
      className={`flex group snap-center h-[460] overflow-x-hidden flex-col gap-2.5 rounded-[15px] transition-colors duration-300 hover:bg-secondary bg-[#F8F8F6] px-6 hover:text-white  py-[40px]`}
    >
      <div className="flex ">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className={`size-5  group-hover:fill-white group-hover:text-white fill-secondary text-secondary`}
            strokeWidth={0}
          />
        ))}
      </div>
      <p className="text-base font-medium leading-normal text-black/50 flex-1 group-hover:text-white">
        {quote}
      </p>
      <h3 className="text-2xl font-medium leading-[1.333] text-primary group-hover:text-white">
        {name}
      </h3>

      <div className="relative  overflow-hidden rounded-md">
        <Image
          src={image}
          alt=""
          width={64}
          height={64}
          className="object-cover aspect-[1/1] object-top"
          sizes="116px"
        />
      </div>
    </div>
  )
}
