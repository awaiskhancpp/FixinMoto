'use client'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { useState } from 'react'

const TESTIMONIALS = [
  {
    name: 'Albert Flores',
    image: '/person/person-1.webp',
    quote:
      "For years, I've trusted my car to FixinMoto, and they've never let me down. The staff is not only friendly but also incredibly knowledgeable, taking the time to walk me through every repair. I wholeheartedly recommend them to anyone in need of dependable auto repair services.",
  },
  {
    name: 'Robert Fox',
    image: '/person/person-2.webp',
    quote:
      'When I faced a sudden issue with my vehicle, FixinMoto managed to fit me in for an appointment on the same day. Their team quickly diagnosed the problem and had my car back on the road in no time. I truly appreciated their prompt and effective service.',
  },
  {
    name: 'Eleanor Pena',
    image: '/person/person-3.webp',
    quote:
      'I encountered an urgent problem with my vehicle and was fortunate to secure a same-day appointment at FixinMotopair. The staff swiftly identified the issue and got my car running again in no time. Their quick and efficient service was greatly appreciated.',
  },
]
export default function Testimonials() {
  const [activeCard, setActiveCard] = useState<Number | null>(null)
  return (
    <>
      <section className="bg-primary  md:py-10 md:px-20 px-4 py-4">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-center items-center text-white">
            <div className="">
              <p className="text-slate-400 md:flex md:justify-center md:items-center">
                Testimonials
              </p>
              <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
                <span className="text-secondary">Real</span> Reviews from Fixinmoto{' '}
                <span className="text-secondary">Customers</span>
              </h2>
            </div>
            <div className="">
              <p className="text-slate-400">
                Find out why Fixinmoto is the go-to choice for car repairs and service!
              </p>
            </div>
          </div>
          <div className="flex  overflow-x-auto snap-x snap-mandatory pt-5 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="w-[85vw] shrink-0 snap-center"
                onClick={() => setActiveCard(i)}
              >
                <TestimonialCard
                  name={t.name}
                  image={t.image}
                  quote={t.quote}
                  clicked={activeCard === i}
                />
              </div>
            ))}
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 pt-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} onClick={() => setActiveCard(i)}>
                <TestimonialCard
                  name={t.name}
                  image={t.image}
                  quote={t.quote}
                  clicked={activeCard === i}
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
  clicked: boolean
}
const TestimonialCard = ({ name, image, quote, clicked }: TestimonialCardProps) => {
  return (
    <div
      className={`flex  snap-center overflow-x-hidden flex-col gap-2.5 rounded-[15px] ${clicked ? 'bg-secondary' : 'bg-[#F8F8F6]'}  px-6 py-12 sm:px-[5px] sm:py-[40px]`}
      style={{ minHeight: 528 }}
    >
      <div className="flex ">
        {Array.from({ length: 5 }).map((s, i) => (
          <Star
            key={i}
            className={`size-5 ${clicked ? ' fill-white' : 'fill-secondary text-secondary'} `}
            strokeWidth={0}
          />
        ))}
      </div>
      <p className="text-base font-medium leading-normal text-black/50 flex-1">{quote}</p>
      <h3 className="text-2xl font-medium leading-[1.333] text-primary">{name}</h3>

      <div className="relative size-[116px] overflow-hidden rounded-md">
        <Image src={image} alt="" fill className="object-cover" sizes="116px" />
      </div>
    </div>
  )
}
