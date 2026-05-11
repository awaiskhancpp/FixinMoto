import Image from 'next/image'
export default function ServiceCTA() {
  return (
    <section className=" bg-black ">
      <div className="md:hidden flex flex-col gap-6 px-4 py-10">
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
          <Image src="/promocta.jpg" alt="promocta" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl text-white">
            Let's Get Your Vehicle in <span className="text-secondary">Top Shape!</span>
          </h2>
          <p className="text-white/70 text-sm">
            Ready to give your car the care it deserves? Contact FixinMoto for a free consultation
            or to book a service appointment today.
          </p>
        </div>
      </div>
      <div className="mx-auto hidden  max-w-[1440px] min-h-[300px] relative md:flex items-center bg-black overflow-hidden">
        <div className="bg-secondary absolute w-[30%] h-[8vh] bottom-0 left-0"></div>
        <div
          className="absolute left-[6%] top-1/2 -translate-y-1/2 z-20 
  w-[35%] h-[220px] lg:h-[260px]"
        >
          <Image src="/promocta.jpg" alt="promocta" fill className=" object-cover rounded-xl" />
        </div>
        <div className="ml-[45%] w-[35%] z-10 relative flex flex-col gap-3 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white">
            Let’s Get Your Vehicle in <span className="text-secondary">Top Shape!</span>
          </h2>
          <p className="text-white/70">
            Ready to give your car the care it deserves? Contact FixinMoto for a free consultation
            or to book a service appointment today
          </p>
        </div>
      </div>
    </section>
  )
}
