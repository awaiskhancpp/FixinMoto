import Image from 'next/image'

export default function CallToAction() {
  return (
    <>
      <section className="w-full relative bg-gradient-to-b from-gray-600 pt-20 to-[#292929]">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative z-10 flex flex-col items-center justify-center sm:py-20 py-10 sm:pl-30 text-white">
            <h2 className="lg:text-7xl text-4xl">
              Let’s Get Your Vehicle in <span className="text-secondary">Top Shape!</span>
            </h2>
            <p className="text-gray-300 pt-4">
              Ready to give your car the care it deserves? Contact FixinMoto for a free consultation
              or to book a service appointment today
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
        </div>
      </section>
    </>
  )
}
