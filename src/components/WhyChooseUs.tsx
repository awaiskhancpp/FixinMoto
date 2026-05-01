import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
export default function WhyChooseUS() {
  return (
    <section className="w-full bg-[#292929]">
      <div className="py-30 px-20 md:flex">
        <div className="text-slate-500 mr-8 pb-2 w-full">
          <p>Why Choose Us</p>
          <h1 className="text-white ld:text-7xl md:text-4xl text-2xl">
            The FixinMoto <br /> <span className="text-red-500">Difference</span>
          </h1>
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
        <div className="md:relative lg:space-y-3 ">
          <Image
            src="/heroimg.png"
            alt="middleimg"
            width={619}
            height={638}
            className="overflow-visible rounded-lg pb-3"
          />
          <div className="md:absolute bg-[#DB323E] -top-6 w-full pb-3 -right-6 grid justify-center items-center rounded-lg md:w-40 md:h-20 ">
            <h1 className="text-3xl text-white font-bold pl-2">+15</h1>
            <p className="text-slate-400">Years of experience</p>
          </div>
          <Image
            src="/heroimg.png"
            alt="lowerimg"
            width={244}
            height={244}
            className="border rounded-lg md:absolute  bottom-8 -left-8 z-1"
          />
        </div>
      </div>
    </section>
  )
}
