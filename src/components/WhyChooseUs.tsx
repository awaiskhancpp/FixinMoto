import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
export default function WhyChooseUS() {
  return (
    <section className="w-full bg-primary px-4 py-6 md:px-10 lg:px-15 xl:px-20 md:py-10 lg:py-20">
      <div className="mx-auto max-w-[1440px] md:flex">
        <div className="text-white/50 mr-8 pb-2 w-full flex flex-col justify-center">
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
          <button className="text-white bg-red-500 w-40 h-14 px-7 py-4 rounded-lg mt-4 mb-4">
            Learn More
          </button>
        </div>
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[580px] rounded-xl ">
          <Image
            src="/passionToPrecisionimg1.jpg"
            alt="middleimg"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute -top-3 -right-3 md:-top-5 md:-right-10 bg-secondary w-38 h-20 flex flex-col items-center justify-center rounded-lg z-10">
            <h3 className="text-4xl text-white font-bold">+15</h3>
            <p className="text-red-200 text-xs">Years of experience</p>
          </div>
          <Image
            src="/passionToPrecisionImg2.jpg"
            alt="lowerimg"
            width={244}
            height={244}
            className="border object-cover rounded-lg absolute h-25 w-50 -bottom-2 -left-3 md:h-40 md:w-60  md:-bottom-4 md:-left-10 md:z-1"
          />
        </div>
      </div>
    </section>
  )
}
