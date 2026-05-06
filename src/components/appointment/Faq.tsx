'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const FAQS = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide a wide range of services, including oil changes, brake repair, engine diagnostics, and more. Check our Services Needed section for details.',
    },
    {
      question: 'Do you use original parts for repairs?',
      answer:
        'We provide a wide range of services, including oil changes, brake repair, engine diagnostics, and more. Check our Services Needed section for details.',
    },
    {
      question: 'How long does a typical service take?',
      answer:
        'We provide a wide range of services, including oil changes, brake repair, engine diagnostics, and more. Check our Services Needed section for details.',
    },
    {
      question: 'Can I drop off my car and pick it up later?',
      answer:
        'We provide a wide range of services, including oil changes, brake repair, engine diagnostics, and more. Check our Services Needed section for details.',
    },
    {
      question: 'What forms of payment do you accept?',
      answer:
        'We provide a wide range of services, including oil changes, brake repair, engine diagnostics, and more. Check our Services Needed section for details.',
    },
  ]
  return (
    <section className="bg-black px-4 py-4 md:px-20 md:py-10 text-white">
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
          {FAQS.map((q, i) => (
            <div key={i} className="border-b border-white/20 py-7">
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
    </section>
  )
}
