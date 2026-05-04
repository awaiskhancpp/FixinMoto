import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
export default function WhyChooseUS() {
  return (
    <section className="w-full bg-primary">
      <div className="py-4 px-4 md:py-15 md:px-20 md:flex">
        <div className="text-slate-500 mr-8 pb-2 w-full">
          <p>Why Choose Us</p>
          <h2 className="text-white ld:text-7xl md:text-4xl text-2xl">
            The FixinMoto <br /> <span className="text-secondary">Difference</span>
          </h2>
          <p>Discover why FixinMoto is the trusted choice for hundreds of car owners.</p>
          <div className="space-y-2 pt-3">
            <div className="flex text-base">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Certified and experienced technicians.</p>
            </div>
            <div className="flex">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Certified and experienced technicians.</p>
            </div>
            <div className="flex">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Certified and experienced technicians.</p>
            </div>
            <div className="flex">
              <CircleCheck className="text-red-500 mr-3" />
              <p>Certified and experienced technicians.</p>
            </div>
          </div>
          <button className="text-white bg-red-500 px-7 py-4 rounded-lg mt-3">Learn More</button>
        </div>
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[580px] rounded-xl ">
          <Image src="/heroimg.png" alt="middleimg" fill className="object-cover rounded-xl" />
          <div className="absolute -top-5 left-20 bg-secondary w-38 h-20 flex flex-col items-center justify-center rounded-lg z-10">
            <h3 className="text-2xl text-white font-bold">+15</h3>
            <p className="text-red-200 text-xs">Years of experience</p>
          </div>
          <Image
            src="/heroimg.png"
            alt="lowerimg"
            width={244}
            height={244}
            className="border rounded-lg absolute h-25 w-50 -bottom-10 -left-5 md:h-40 md:w-60  md:-bottom-4 md:-left-15 md:z-1"
          />
        </div>
      </div>
    </section>
  )
}
