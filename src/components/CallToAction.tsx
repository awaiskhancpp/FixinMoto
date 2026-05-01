import Image from 'next/image'

export default function CallToAction() {
  return (
    <>
      <section className="w-full relative flex flex-col h-100 bg-gradient-to-b from-gray-600 to-[#292929]">
        <div className="relative z-10 flex flex-col sm:py-20 py-10 pl-2 sm:pl-30 justify-center text-white">
          <h1 className="lg:text-7xl text-4xl">
            Let’s Get Your Vehicle
            <br />
            in <span className="text-[#DB323E]">Top Shape!</span>
          </h1>
          <p className="text-gray-300 pt-4">
            Ready to give your car the care it deserves?
            <br /> Contact FixinMoto for a free consultation or to book a service appointment today
          </p>
        </div>
        <div>
          <Image
            src="/heroimg.png"
            alt="calltoactionimg"
            className="object-center object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-600/70 to-[#292929]" />
        </div>
      </section>
    </>
  )
}
