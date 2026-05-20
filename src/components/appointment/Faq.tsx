'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Faq } from '@/payload-types'
interface FaqProps {
  faqArray: Faq[]
}
export default function Faq({ faqArray }: FaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="bg-black px-4 py-10 md:px-6 min-[1441px]:px-0 md:py-10 text-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-2">
          <h2 className="lg:text-6xl font-medium md:text-4xl sm:text-2xl ">
            Frequently asked questions
          </h2>
          <p className="text-white/50">
            Frequently asked questions ordered by popularity. Remember that if the visitor has not
            committed to the call to action, they may still have questions (doubts) that can be
            answered.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-6">
          <div className="relative w-[95%] min-h-[300px] lg:min-h-[490px]">
            <Image
              src="/faq.png"
              alt="..."
              fill
              className="object-cover object-center  rounded-[15px]"
            />
          </div>
          <div className="flex flex-col">
            {faqArray.map((q, i) => (
              <div key={i} className="border-b border-white/20 py-7 last:border-none">
                <div onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
                  <button
                    // onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    className="flex w-full justify-between text-left"
                  >
                    <span className="font-medium">{q.question}</span>
                    {activeIndex === i ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {activeIndex === i && (
                  <p
                    onDoubleClick={() => setActiveIndex(null)}
                    className="pt-2 text-sm text-white/60"
                  >
                    {q.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
