import Image from 'next/image'
import { CircleCheck } from 'lucide-react'
const bullets = [
  'Certified and experienced technicians.',
  'Transparent pricing with no hidden charges.',
  'Advanced tools and diagnostic equipment.',
  'Fast, reliable service you can trust.',
]
export default function WhyChooseUs() {
  return (
    <section className="w-full bg-primary py-28 px-4 md:px-16">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-4 lg:max-w-none lg:flex-1">
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium leading-normal text-white/50">Why Choose Us</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.125] text-white">
              The FixinMoto <span className="text-secondary">Difference</span>
            </h2>
            <p className="max-w-xl text-sm leading-[1.4286] text-white/50">
              Discover why FixinMoto is the trusted choice for hundreds of car owners.
            </p>
          </div>
          <ul className="flex flex-col gap-2 pt-[2px] lg:pt-0">
            {bullets.map((line) => (
              <li key={line} className="flex gap-6">
                <CircleCheck
                  className="size-6 shrink-0 text-secondary"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-sm leading-[1.4286] text-white/50">{line}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-6 pt-4">
            <button
              type="button"
              className="rounded-lg bg-secondary px-8 py-[15px] text-sm font-medium leading-[1.4286] text-white"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="relative h-[400px] w-full shrink-0 sm:h-[520px] lg:h-[638px] lg:max-w-[50%] lg:flex-1">
          <div className="absolute inset-y-0 left-0 right-[8%] overflow-hidden rounded-[15px] lg:right-0">
            <Image
              src="/heroimg.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute right-[5%] top-0 z-10 flex -translate-y-6 flex-col gap-2 rounded-[15px] bg-secondary px-6 py-[18px] sm:right-[8%] lg:-right-[3%]">
            <span className="text-center text-4xl font-bold leading-[1.125] text-white sm:text-5xl lg:text-[64px]">
              +15
            </span>
            <span className="text-center text-lg leading-[1.444] text-white/50">
              Years of Experience
            </span>
          </div>
          <div className="absolute -bottom-2 -left-4 z-10 h-[200px] w-[200px] overflow-hidden rounded-[15px] border border-white sm:h-[220px] sm:w-[220px] lg:-bottom-2 lg:left-[-4.7rem] lg:h-[244px] lg:w-[244px]">
            <Image src="/heroimg.png" alt="" fill className="object-cover" sizes="244px" />
          </div>
        </div>
      </div>
    </section>
  )
}
