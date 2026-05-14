import Image from 'next/image'
import ServiceCoverageForm from '@/components/ServiceCoverageForm'
export default function Coverage() {
  return (
    <div>
      <div className="relative flex min-h-[480px] w-full flex-col justify-center items-center">
        <Image
          src="/contact_us_main.jpg"
          alt="..."
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 flex w-full flex-col justify-center items-center px-4 py-4 md:px-6 min-[1441px]:px-0 md:py-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <h1 className="mx-auto text-4xl font-semibold leading-[1.125] text-white md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
              <span className="text-secondary">Reliable</span> Auto Repair and Assistance,{' '}
              <span className="text-secondary">Wherever You Need It</span>
            </h1>
            <p className="text-white/70 mt-3">
              FixinMoto offers fast, reliable auto repair and roadside assistance, bringing expert
              service directly to you—whenever and wherever you need it. From quick fixes to major
              repairs, we’ve got you covered.
            </p>
          </div>
        </div>
      </div>
      <ServiceCoverageForm />
    </div>
  )
}
