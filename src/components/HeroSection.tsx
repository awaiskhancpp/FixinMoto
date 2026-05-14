import Image from 'next/image'
export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col md:justify-center justify-end py-4 px-4 md:px-6 min-[1441px]:px-0 md:py-10">
      <Image src="/herobanner.webp" alt="heroimage" fill className="object-cover object-center" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent" />

      <div className="relative z-[20] mx-auto w-full max-w-[1440px] ">
        <div className="text-4xl text-white md:text-6xl lg:text-7xl 2xl:text-8xl">
          <h1>
            Drive Confidently with <span className="text-secondary">FixinMoto</span>
          </h1>
        </div>
        <p className="md:hidden mt-10 max-w-xl text-white">
          Your car deserves the best care, and we deliver it with precision, speed, and reliability.
          Book your appointment today!
        </p>
        <div className="flex gap-4 pt-10  text-white">
          <button className="h-12 w-48 rounded-lg bg-secondary px-6 py-3">Appointment Now</button>
          <button className="h-12 w-48 rounded-lg border border-white bg-transparent">
            <a href="/services">Our Service</a>
          </button>
        </div>

        <p className="hidden md:block md:absolute md:right-0 mt-10 max-w-xl text-white md:mt-14">
          Your car deserves the best care, and we deliver it with precision, speed, and reliability.
          Book your appointment today!
        </p>
      </div>
    </div>
  )
}
