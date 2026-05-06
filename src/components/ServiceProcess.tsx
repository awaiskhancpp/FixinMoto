import Image from 'next/image'
import { HeadingGrid } from './HeadingGrid'
export default function ServiceProcess() {
  let word = ['FixinMoto']
  return (
    <>
      <section className="w-full h-[380px] relative text-white ">
        <Image src="/heroimg.png" alt="calltoaction" className="object-cover object-center" fill />
        <div className="absolute bg-black/50 w-full h-[380px] flex flex-col justify-center items-center text-center">
          <h3 className="md:text-5xl text-3xl font-bold pb-2">Special Offers for You</h3>
          <p>Save big on premium services with our exclusive promotions and discounts.</p>
          <button className="py-4 bg-secondary rounded-lg px-8 mt-3">View all Promotions</button>
        </div>
      </section>
      <section className="w-full bg-black md:px-20 md:py-10 px-4 py-4">
        <div className="mx-auto max-w-[1440px]">
          <HeadingGrid
            pageDescription=" A smooth and transparent process for all your vehicle needs."
            pageTitle="What to Expect with FixinMoto"
            pageName="Service Process"
            wordsToHighlight={word}
          />
          <div className="grid grid-cols-12">
            <div className="lg:col-span-6 col-span-12 text-white space-y-8">
              <div>
                <h3 className="text-red-500 text-2xl md:text-3xl  font-bold pb-3">
                  Book Your Appointment
                </h3>
                <p className="text-base w-[80%]">
                  Easily book your car repair appointment online. Choose your preferred time and get
                  your vehicle back in top shape—fast and hassle-free
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold pb-3">Vehicle Check-In</h3>
                <p className="text-base w-[80%]">
                  Easily book your car repair appointment online. Choose your preferred time and get
                  your vehicle back in top shape—fast and hassle-free
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold pb-3">Approval & Repairs</h3>
                <p className="text-base w-[80%]">
                  Easily book your car repair appointment online. Choose your preferred time and get
                  your vehicle back in top shape—fast and hassle-free
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold pb-3">Drive Away Confidently</h3>
                <p className="text-base pb-5 w-[80%]">
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
        </div>
      </section>
    </>
  )
}
