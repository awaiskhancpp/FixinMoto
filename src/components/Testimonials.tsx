'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
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
    <article
      className="flex w-[85%] max-w-[493px] shrink-0 snap-center flex-col gap-2.5 rounded-[15px] bg-[#F8F8F6] px-6 py-12 sm:px-[46px] sm:py-[67px] md:w-[493px] md:max-w-[493px]"
      style={{ minHeight: 528 }}
    >
      <div className="relative size-[116px] shrink-0 overflow-hidden rounded-md">
        <Image src={image} alt="" fill className="object-cover" sizes="116px" />
      </div>
      <p className="text-base font-medium leading-normal text-black/50">{quote}</p>
      <h3 className="text-2xl font-medium leading-[1.333] text-primary">{name}</h3>
      <StarRating />
    </article>
  )
}

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const start = () => setDesktop(media.matches)
    start()
    media.addEventListener('change', start)
    return () => media.removeEventListener('change', start)
  }, [])

  const last = TESTIMONIALS.length - 1
  const offset = index * (CARD_WIDTH + GAP)

  const scrollMobileTo = (i: number) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.children[i] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    setIndex(i)
  }

  const goPrev = () => {
    const next = Math.max(0, index - 1)
    if (desktop) setIndex(next)
    else scrollMobileTo(next)
  }

  const goNext = () => {
    const next = Math.min(last, index + 1)
    if (desktop) setIndex(next)
    else scrollMobileTo(next)
  }

  const cards = TESTIMONIALS.map((t) => (
    <TestimonialCard key={t.name} name={t.name} image={t.image} quote={t.quote} />
  ))

  const word = ['Fixinmoto']

  return (
    <section className="w-full overflow-x-hidden bg-primary md:px-20 md:py-10 px-4 py-4">
      <div className="mx-auto max-w-[1440px] ">
        <HeadingGrid
          pageTitle="What Drivers Are Saying About Fixinmoto"
          pageName="Testimonials"
          pageDescription="Read what our satisfied customers have to say about our products and services"
          wordsToHighlight={word}
        />
      </div>

      <div className="relative mt-10 min-h-[560px] ml-auto w-[92%] rounded-tl-[24px] bg-secondary lg:min-h-[783px] px-4 md:px-16">
        <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-10 md:px-12 md:pb-12 md:pt-14 lg:px-2 lg:pt-16">
          {desktop ? (
            <div className="max-w-full overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${offset}px)` }}
              >
                {cards}
              </div>
            </div>
          ) : (
            <div
              ref={railRef}
              onScroll={() => {
                const rail = railRef.current
                if (!rail) return
                const card = rail.children[0] as HTMLElement | undefined
                const step = (card?.offsetWidth ?? CARD_WIDTH) + GAP
                const i = Math.round(rail.scrollLeft / step)
                setIndex(Math.min(last, Math.max(0, i)))
              }}
              className="flex max-w-full gap-5 overflow-x-auto pb-2"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {cards}
            </div>
          )}

          <div className="flex justify-end gap-[19px] pt-6 md:pt-8">
            <button
              type="button"
              onClick={goPrev}
              disabled={index === 0}
              className="disabled:pointer-events-none disabled:opacity-40"
              aria-label="Previous testimonial"
            >
              <Image src="/VectorLeft.png" alt="" width={36} height={26} />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={index >= last}
              className="disabled:pointer-events-none disabled:opacity-40"
              aria-label="Next testimonial"
            >
              <Image src="/VectorRight.png" alt="" width={36} height={26} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
