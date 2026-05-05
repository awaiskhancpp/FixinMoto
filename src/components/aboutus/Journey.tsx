import Image from 'next/image'
import { CircleCheck } from 'lucide-react'
const bullets = [
  'Certified and experienced technicians.',
  'Transparent pricing with no hidden charges.',
  'Advanced tools and diagnostic equipment.',
  'Fast, reliable service you can trust.',
]
export default function Journey() {
  return (
    <>
      <section className="w-full bg-primary py-28 px-4 md:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:gap-8">
          <div className="flex w-full flex-col gap-4 lg:max-w-none lg:flex-1">
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium leading-normal text-secondary">
                The FixinMoto Journey
              </p>
              <h2 className="text-5xl font-bold w-[22rem] leading-[56px] text-white">
                From{' '}
                <span className="bg-secondary inline-block skew-x-[6deg] italic px-2">Passion</span>{' '}
                to
                <span className="bg-secondary inline-block skew-x-[6deg] italic px-2">
                  Precision
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-[1.4] w-[85%] text-white/50">
                At FixinMoto, our journey began with a shared passion for cars and a drive to make
                automotive care easier, more accessible, and more reliable. What started as a small
                group of enthusiasts who were tired of the typical repair shop experience has grown
                into a trusted brand committed to providing exceptional service and expert
                knowledge.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] w-full sm:h-[520px] lg:h-[638px] lg:flex-1 lg:mr-[-5.2%]">
            <div className="absolute inset-y-0 left-0 right-[8%] overflow-hidden rounded-l-[15px] lg:right-0">
              <Image
                src="/heroimg.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-2 -left-4 z-10 h-[200px] w-[200px] overflow-hidden rounded-[15px] sm:h-[220px] sm:w-[220px] lg:-bottom-2 lg:left-[-4.7rem] lg:h-[244px] lg:w-[244px]">
              <Image src="/heroimg.png" alt="" fill className="object-cover" sizes="244px" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
