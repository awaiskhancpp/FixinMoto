import type { Service } from '@/payload-types'
import Image from 'next/image'
interface ServiceOverviewProps {
  content: Service
}

export default function ServiceOverview({ content }: ServiceOverviewProps) {
  return (
    <section className="px-4 py-4 md:px-6 min-[1441px]:px-0 md:py-10 ">
      <div className="text-white max-w-[1440px] mx-auto gap-4">
        <p className="text-white/70 text-md pb-2">Service Overview</p>
        <h2 className="lg:text-6xl text-4xl font-bold pb-6">{content.serviceName}</h2>
        <div className="relative w-full md:h-[523px] h-[350px]">
          <Image
            src={
              typeof content?.backgroundImage === 'object'
                ? content?.backgroundImage?.url || ''
                : ''
            }
            fill
            alt="..."
            className="object-cover rounded-[15px]"
          />
        </div>
        <div className="max-w-[1300px] mx-auto pt-6">
          <p className="text-white/49 pb-4">{content.description}</p>
          <h3 className="text-2xl pb-3">What's Included</h3>
          <div className="grid md:grid-cols-2  grid-cols-1 gap-2 text-white/50">
            {content?.included.map((m, i) => (
              <div className="flex gap-3" key={i}>
                <Image src="/check_circle.png" alt="..." width={28} height={28} />
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 mt-4 pb-4">{content.detail || ''}</p>
          <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5 py-4">
            <div className="relative h-[367px]">
              <Image
                src="/oil_and_fluid1.jpg"
                fill
                alt="..."
                className="object-cover rounded-[15px]"
              />
            </div>

            <div className="relative h-[367px]">
              <Image
                src="/oil_and_fluid2.jpg"
                fill
                alt="..."
                className="object-cover rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
