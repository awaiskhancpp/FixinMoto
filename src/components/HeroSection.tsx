import Image from 'next/image'
export default function HeroSection() {
  return (
    <div className="flex relative w-full h-screen  flex-col md:px-20 md:py-10 justify-center items-start">
      <Image src="/herobanner.webp" alt="heroimage" fill className="object-center object-cover" />
      <div className="absolute z-10 inset-0  bg-gradient-to-r from-black/80 to-transparent" />
      <div className="relative px-4 py-4 z-[10] max-w-[1440px]">
        <div className="text-4xl md:text-6xl lg:text-8xl md:w-300 text-white">
          <h1>
            Drive Confidently with <span className="text-secondary">FixinMoto</span>
          </h1>
        </div>
        <div className=" text-white pt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-secondary rounded-lg w-48 h-12 px-6 py-3 mr-4">
            Appointment Now
          </button>
          <button className="bg-transparent w-48 h-12 border border-white rounded-lg">
            Our Service
          </button>
        </div>
      </div>
      <div className="absolute z-10 bottom-3 left-4 text-white md:w-90 md:h-20 md:bottom-16 md:left-auto md:right-16 lg:bottom-20 lg:right-40">
        <p>
          Your car deserves the best care, and we deliver it with precision, speed, and reliability.
          Book your appointment today!
        </p>
      </div>
    </div>
  )
}
