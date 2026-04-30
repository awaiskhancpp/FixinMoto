import Image from 'next/image'
export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <Image src="/heroimg.png" alt="heroimage" fill className="w-full h-screen object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(269.96deg,_rgba(0,0,0,0.79)_4.05%,_rgba(0,0,0,0)_92.43%)]" />
      <div className="absolute pt-24 md:pt-40">
        <div className="pl-6 md:pl-20">
          <div className="text-4xl md:text-6xl lg:text-8xl text-white">
            Drive Confidently with <span className="text-red-600">FixinMoto</span>
          </div>
          <div className=" text-white pt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#DB323E] rounded-lg w-48 h-12 px-6 py-3 mr-4">
              Appointment Now
            </button>
            <button className="bg-transparent w-48 h-12 border border-white rounded-lg">
              Our Service
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-4 md:bottom-16 md:right-16 lg:bottom-20 lg:right-40">
        <p>
          Your car deserves the best care, and we deliver it with
          <br /> precision, speed, and reliability. Book your
          <br /> appointment today!
        </p>
      </div>
    </div>
  )
}
