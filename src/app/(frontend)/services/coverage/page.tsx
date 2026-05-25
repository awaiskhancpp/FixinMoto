import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ServiceCoverageForm from '@/components/ServiceCoverageForm'

export default async function CoveragePage() {
  const payload = await getPayload({ config: configPromise })
  const [locationsRes] = await Promise.all([
    payload.find({
      collection: 'location',
      limit: 50,
    }),
  ])
  const mainService = await payload.find({
    collection: 'main-service',
  })
  return (
    <div>
      {/* Hero — Figma Service Coverage header */}
      <div className="relative flex min-h-[min(560px,70vh)] w-full flex-col justify-center">
        <Image
          src="/contact_us_main.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/[0.62]" aria-hidden />
        <div className="relative z-10 flex w-full flex-col justify-center px-4 pb-24 pt-[7.5rem] md:px-8 md:pb-28 md:pt-28 lg:px-16 xl:mx-auto xl:max-w-[1440px] xl:px-16 min-[1441px]:px-0">
          <h1 className="max-w-[1100px] text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.125]">
            Reliable Auto Repair and Assistance, Wherever You Need It
          </h1>
          <p className="mt-6 max-w-[720px] text-base leading-relaxed text-white/[0.7] md:text-lg">
            FixinMoto offers fast, reliable auto repair and roadside assistance, bringing expert
            service directly to you—whenever and wherever you need it. From quick fixes to major
            repairs, we&apos;ve got you covered.
          </p>
        </div>
      </div>

      <ServiceCoverageForm services={mainService.docs} locations={locationsRes.docs} />
    </div>
  )
}
