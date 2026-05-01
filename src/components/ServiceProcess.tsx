import Image from 'next/image'
export default function ServiceProcess() {
  return (
    <>
      <section className="w-full h-[380px] relative text-white ">
        <Image src="/heroimg.png" alt="calltoaction" className="object-cover object-center" fill />
        <div className="absolute bg-black/50 w-full h-[380px] flex flex-col justify-center items-center text-center">
          <h1 className="md:text-5xl text-3xl font-bold pb-2">Special Offers for You</h1>
          <p>Save big on premium services with our exclusive promotions and discounts.</p>
          <button className="py-4 bg-[#DB323E] rounded-lg px-8 mt-3">View all Promotions</button>
        </div>
      </section>
      <section className="w-full bg-black">
        <div className="grid grid-cols-12 text-white py-10 px-10">
          <div className="md:col-span-8 col-span-12">
            <p className="text-slate-400">Service Process</p>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
              What to Expect with <span className="text-red-500">FixinMoto </span>
            </h1>
          </div>
          <div className="md:col-span-4 col-span-12 flex justify-center items-center text-center ">
            <p className="text-slate-400">
              A smooth and transparent process
              <br /> for all your vehicle needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 px-10 py-20">
          <div className="lg:col-span-6 lg:w-[90%] col-span-12 text-white space-y-8">
            <div>
              <h1 className="text-red-500 text-2xl md:text-3xl lg:text-5xl  font-bold pb-3">
                Book Your Appointment
              </h1>
              <p className="text-base">
                Easily book your car repair appointment online. Choose your preferred time and get
                your vehicle back in top shape—fast and hassle-free
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-3">Vehicle Check-In</h1>
              <p className="text-base">
                Easily book your car repair appointment online. Choose your preferred time and get
                your vehicle back in top shape—fast and hassle-free
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-3">
                Approval & Repairs
              </h1>
              <p className="text-base">
                Easily book your car repair appointment online. Choose your preferred time and get
                your vehicle back in top shape—fast and hassle-free
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-3">
                Drive Away Confidently
              </h1>
              <p className="text-base pb-5">
                Easily book your car repair appointment online. Choose your preferred time and get
                your vehicle back in top shape—fast and hassle-free
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 relative h-[570px]">
            <Image
              src="/heroimg.png"
              alt="serviceprocess"
              className="rounded-lg object-cover object-center"
              fill
            />
          </div>
        </div>
      </section>
    </>
  )
}
