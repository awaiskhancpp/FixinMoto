import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
interface ServiceOverviewProps {
  content: any
}
const INCLUDED = [
  'Engine Oil Change',
  'Replace Oil Filter',
  'Checking Fluid Levels',
  'Air Filter Inspection',
  'Oil Filter Replacement',
  'Battery Check',
  'Inspection of Engine and Components',
  'Resetting Oil Change Light',
  'Tire Check',
  'Top-up of Other Fluids',
]
export default function ServiceOverview({ content }: ServiceOverviewProps) {
  return (
    <section className="px-4 py-4 md:px-6 min-[1441px]:px-0 md:py-10 ">
      <div className="text-white max-w-[1440px] mx-auto flex flex-col gap-4">
        <RichText data={content} />
      </div>
    </section>
  )
}
{
  /* <p className="text-white/70 text-md">Service Overview</p>
        <h2 className="lg:text-6xl text-4xl font-bold">Oil Change & Fluid Services</h2>
        <div className="relative w-full md:h-[523px] h-[350px]">
          <Image src="/oil_and_fluid.jpg" fill alt="..." className="object-cover rounded-[15px]" />
        </div>
        <p className="text-white/49">
          An oil change is one of the most important services to keep your vehicle running smoothly
          and efficiently. At Fixinmoto, we specialize in providing quick, reliable oil change
          services using high-quality oils and filters. Our certified technicians ensure your engine
          stays protected, helping to extend its life, improve fuel efficiency, and prevent costly
          repairs. Whether you prefer conventional or synthetic oil, we’ll tailor the service to
          meet your car’s specific needs.
        </p>
        <h3 className="text-2xl ">What's Included</h3>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-2 text-white/50">
          {INCLUDED.map((m, i) => (
            <div className="flex gap-3">
              <Image src="/check_circle.png" alt="..." width={28} height={28} />
              <p>{m}</p>
            </div>
          ))}
        </div>
        <p className="text-white/50 mt-2">
          Regular oil changes are essential for keeping your engine protected and performing at its
          best. Fresh oil reduces friction, ensuring smoother operation and preventing wear and tear
          on crucial engine components. It also improves fuel efficiency by allowing your engine to
          work more efficiently, helping you save money at the pump. Routine oil changes remove
          harmful sludge and contaminants, extending the lifespan of your engine and reducing the
          risk of costly repairs. With Fixinmoto’s expert technicians, you can enjoy peace of mind
          knowing your vehicle is maintained to the highest standard, keeping you safely on the
          road.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5 py-4">
          <div className="relative  h-[367px]">
            <Image src="/oil_and_fluid1.jpg" fill alt="..." className="rounded-[15px]" />
          </div>

          <div className="relative  h-[367px]">
            <Image src="/oil_and_fluid2.jpg" fill alt="..." className="rounded-[15px]" />
          </div>
           </div> */
}
