'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export default function Testimonials() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return (
    <section className="bg-[#292929] w-full">
      <div className="grid grid-cols-12 text-white md:py-10 md:px-20 px-4 py-4">
        <div className="lg:col-span-8 md:col-span-6 col-span-12">
          <p className="text-slate-400">Testimonials</p>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
            What Drivers are Saying About <span className="text-secondary">FixinMoto </span>
          </h1>
        </div>
        <div className="md:col-span-4 col-span-12 flex justify-center items-center text-center ">
          <p className="text-slate-400">
            Read what our satisfied customers have to say about our products and services
          </p>
        </div>
      </div>
      <div className="pt-10 md:w-[80%] ml-auto md:rounded-tl-[24px] bg-[#DB323E] h-[600px] flex flex-col">
        <div
          id="default-carousel"
          className="relative overflow-hidden space-x-2 w-full"
          data-carousel="slide"
        >
          <div
            className="flex justify-center gap-3 md:gap-6 transition-transform duration-500 md:-ml-[210px]"
            style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 40)}%)` }}
          >
            {[...nums, ...nums].map((t, i) => (
              <div key={i} className="duration-700 ease-in-out " data-carousel-item>
                <TestimonialCard />
              </div>
            ))}
          </div>
        </div>
        <div className="flex pt-4 justify-end">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <Image src="/VectorLeft.png" alt="prev-button" width={36} height={26} />
          </button>
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => Math.min(nums.length - 2, prev + 1))}
            className="flex items-center justify-center h-full px-4 cursor-pointer"
          >
            <Image src="/VectorRight.png" alt="next-button" width={36} height={26} />
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard() {
  return (
    <div className="rounded-lg bg-white w-[85vw] h-auto md:w-[400px] md:h-[460px] px-6 pt-20 pb-20 ">
      <div>
        <Image
          src="/heroimg.png"
          alt="testimonialimg"
          width={120}
          height={120}
          className="object-center object-cover pb-3"
        />
      </div>
      <p className="pb-5">
        For years, I've trusted my car to FixinMoto, and they've never let me down. The staff is not
        only friendly but also incredibly knowledgeable, taking the time to walk me through every
        repair. I wholeheartedly recommend them to anyone in need of dependable auto repair
        services.
      </p>
      <p>⭐⭐⭐⭐⭐</p>
    </div>
  )
}
