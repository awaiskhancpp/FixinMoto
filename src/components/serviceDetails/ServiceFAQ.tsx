'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Faq } from '@/payload-types'
interface serviceFaqProps {
  faqArray: Faq[]
}
export default function ServiceFAQ({ faqArray }: serviceFaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="bg-black px-4 py-4 md:px-6 min-[1441px]:px-0 md:py-10 text-white">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-2 items-center md:justify-center">
          <h2 className="lg:text-6xl font-medium text-4xl ">
            <span className="text-secondary">Frequently</span> asked{' '}
            <span className="text-secondary">questions</span>
          </h2>
          <p className="text-white/50">
            Frequently asked questions ordered by popularity. Remember that if the visitor has not
            committed to the call to action, they may still have questions (doubts) that can be
            answered.
          </p>
        </div>
        <div className=" pt-6">
          <div className="flex flex-col">
            {faqArray.map((q, i) => (
              <div key={q.id} className="border-b border-white/20 py-7">
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="flex w-full justify-between text-left"
                >
                  <span className="font-medium">{q.question}</span>
                  {activeIndex === i ? <ChevronUp /> : <ChevronDown />}
                </button>
                {activeIndex === i && <p className="pt-2 text-sm text-white/60">{q.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
