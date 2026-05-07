'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { HeadingGrid } from './HeadingGrid'

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

const CARD_WIDTH = 493
const GAP = 20

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-secondary text-secondary" strokeWidth={0} />
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  image: string
  quote: string
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, image, quote } = props
  return (
    <div className="flex w-[493px] shrink-0 snap-center md:py-10 py-6 px-5 flex-col gap-2 rounded-[15px] bg-[#F8F8F6] md:px-8 ">
      <div className="w-full shrink-0 overflow-hidden rounded-md pb-1">
        <Image
          src={image}
          alt=""
          className="object-cover rounded-md aspect-1/1 object-top "
          width={64}
          height={64}
        />
      </div>
      <p className="text-base font-medium leading-normal text-black/50">{quote}</p>
      <h3 className="text-2xl font-medium leading-[1.333] text-primary">{name}</h3>
      <StarRating />
    </div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const word = ['Fixinmoto']

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total)
  const goNext = () => setIndex((prev) => (prev + 1) % total)

  const offset = index * (CARD_WIDTH + GAP)

  return (
    <section className="w-full overflow-x-hidden bg-primary ">
      <div className="mx-auto max-w-[1440px] px-4 py-4 md:px-20 py-10">
        <HeadingGrid
          pageTitle="What Drivers Are Saying About Fixinmoto"
          pageName="Testimonials"
          pageDescription="Read what our satisfied customers have to say about our products and services"
          wordsToHighlight={word}
        />
      </div>

      <div className="mt-10 ml-30  md:pl-10">
        <div className="ml-auto max-w-[1440px] pb-6 pt-10 md:pb-10 md:pt-10 bg-secondary md:rounded-tl-[24px] overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out pl-5"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={i} name={t.name} image={t.image} quote={t.quote} />
            ))}
          </div>
          <div className="flex justify-end gap-[19px] pt-6 mr-4 md:pt-8">
            <button
              type="button"
              onClick={goPrev}
              className="disabled:pointer-events-none disabled:opacity-40"
            >
              <Image src="/VectorLeft.png" alt="" width={26} height={16} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="disabled:pointer-events-none disabled:opacity-40"
            >
              <Image src="/VectorRight.png" alt="" width={26} height={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
