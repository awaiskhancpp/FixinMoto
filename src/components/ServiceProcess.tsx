'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HeadingGrid } from './HeadingGrid'

const STEPS = [
  {
    title: 'Book Your Appointment',
    titleWeight: 'semibold',
    description:
      'Easily book your car repair appointment online. Choose your preferred time and get your vehicle back in top shape—fast and hassle-free',
    image: '/serviceProcess/bookAppointment.png',
  },
  {
    title: 'Vehicle Check-In',
    titleWeight: 'semibold',
    description:
      "Quick and easy vehicle check-in. Drop off your car, and we'll take care of the rest—ensuring a smooth and efficient repair process.",
    image: '/serviceProcess/vehicleCheckIn.png',
  },
  {
    title: 'Approval & Repairs',
    titleWeight: 'medium',
    description:
      'Get fast approval for repairs. Once we assess your vehicle, we’ll confirm the work needed and get started right away to get you back on the road.',
    image: '/serviceProcess/approvalsAndRepairs.png',
  },
  {
    title: 'Drive Away Confidently',
    titleWeight: 'semibold',
    description:
      'Drive away with confidence. After our expert repairs, your vehicle is ready to hit the road safely and smoothly.',
    image: '/serviceProcess/driveAway.png',
  },
]
const INTERVAL_MS = 5000

export default function ServiceProcess() {
  const [active, setActive] = useState(0)
  const word = ['FixinMoto']
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % STEPS.length), INTERVAL_MS)

    return () => clearInterval(t)
  }, [])

  return (
    <>
      <section className="relative h-[380px] w-full text-white">
        <Image src="/heroimg.png" alt="" className="object-cover object-center" fill priority />
        <div className="absolute flex h-[380px] w-full flex-col items-center justify-center bg-black/50 text-center">
          <h3 className="pb-2 text-3xl font-semibold md:text-5xl">Special Offers for You</h3>
          <p className="max-w-xl text-base md:text-lg">
            Save big on premium services with our exclusive promotions and discounts.
          </p>
          <button
            type="button"
            className="mt-3 rounded-lg bg-secondary px-8 py-4 text-base font-medium text-white"
          >
            View all promotion
          </button>
        </div>
      </section>

      <section className="w-full bg-[#202020] py-6 px-4 md:px-6 min-[1441px]:px-0 lg:py-8 xl:py-10 pb-4 md:pb-10 ">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
          <HeadingGrid
            pageDescription="A smooth and transparent process for all your vehicle needs."
            pageTitle="What to Expect with FixinMoto"
            pageName="Service Process"
            wordsToHighlight={word}
          />

          <div className="flex flex-col-reverse items-stretch lg:flex-row lg:items-center">
            <div className="flex min-w-0 flex-1 flex-col gap-7">
              {STEPS.map((step, i) => {
                const isActive = i === active
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex py-3 flex-col gap-4 border-l-2 pl-8 text-left transition-colors ${
                      isActive ? 'border-secondary' : 'border-transparent'
                    }`}
                  >
                    <h3
                      className={`text-xl md:text-2xl lg:text-[32px] leading-tight text-white ${
                        step.titleWeight === 'medium' ? 'font-medium' : 'font-semibold'
                      } ${isActive ? 'text-secondary' : 'text-white'}`}
                    >
                      {step.title}
                    </h3>
                    <p className={`text-base font-medium leading-normal text-white/70 `}>
                      {step.description}
                    </p>
                  </button>
                )
              })}
            </div>

            <div className="relative h-[260px] sm:h-[360px] lg:h-[640px] w-full lg:flex-1 mb-6">
              <Image
                src={STEPS[active].image}
                alt=""
                className="rounded-[15px] object-cover object-center"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
