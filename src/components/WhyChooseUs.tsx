import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
export default function WhyChooseUS() {
  return (
    <section className="w-full overflow-x-hidden bg-primary px-4 py-12 md:px-6 min-[1441px]:px-0 md:py-10 lg:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-center md:gap-10">
        <div className="flex min-w-0 w-full flex-col justify-center pb-2 text-white/50 md:mr-0 md:max-w-[46%]">
          <p className="pb-2">Why Choose Us</p>
          <h2 className="text-white lg:text-6xl md:text-4xl text-3xl pb-2">
            The FixinMoto <span className="text-secondary">Difference</span>
          </h2>
          <p>Discover why FixinMoto is the trusted choice for hundreds of car owners.</p>
          <div className="space-y-3 pt-3">
            <div className="flex text-base gap-2">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Certified and experienced technicians.</p>
            </div>
            <div className="flex text-base gap-2">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Transparent pricing with no hidden charges.</p>
            </div>
            <div className="flex text-base gap-2">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Advanced tools and diagnostic equipment.</p>
            </div>
            <div className="flex text-base gap-2">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Fast, reliable service you can trust.</p>
            </div>
          </div>

          <button className="text-white bg-red-500 hover:border hover:border-white hover:bg-transparent hover:text-secondary w-40 h-14 px-7 py-4 rounded-lg mt-4 mb-4">
            <a href="/aboutus">Learn More</a>
          </button>
        </div>
        <div className="relative h-[400px] w-full min-w-0 max-w-full rounded-xl md:h-[500px] md:flex-1 lg:h-[580px]">
          <Image
            src="/passionToPrecisionimg1.jpg"
            alt="middleimg"
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute -top-4 -right-1 z-10 flex w-36 flex-col items-center justify-center rounded-lg bg-secondary px-3 py-3 shadow-lg md:-top-6 md:-right-2 md:w-40 md:py-4">
            <h3 className="text-3xl font-bold text-white md:text-4xl">+15</h3>
            <p className="text-center text-xs text-red-200">Years of experience</p>
          </div>
          <Image
            src="/passionToPrecisionImg2.jpg"
            alt="lowerimg"
            width={244}
            height={244}
            className="absolute -bottom-3 -left-3 z-10 h-28 w-36 max-w-[calc(100%-1.5rem)] rounded-lg border object-cover sm:h-36 sm:w-44 md:-bottom-6 md:-left-8 md:h-40 md:w-60"
          />
        </div>
      </div>
    </section>
  )
}
