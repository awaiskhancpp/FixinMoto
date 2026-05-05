import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[705px] w-full overflow-hidden md:h-[705px]">
      <Image
        src="/herobanner.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,1)_4%,rgba(0,0,0,0)_92%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col px-4 pb-16 pt-28 md:px-[120px] md:pb-12 md:pt-[112px]">
        <div className="flex max-w-[652px] flex-col gap-4">
          <h1
            className="font-semibold leading-[1.1] w-[900px] text-white justify-end"
            style={{
              fontSize: 'clamp(2.25rem, 6vw + 1rem, 6.0625rem)',
            }}
          >
            Drive Confidently with <span className="text-secondary">FixinMoto</span>
          </h1>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <button
              type="button"
              className="rounded-lg bg-secondary px-8 py-[15px] text-sm font-medium leading-[1.4] text-white"
            >
              Appointment Now
            </button>
            <button
              type="button"
              className="rounded-lg border border-white px-8 py-[15px] text-sm font-medium leading-[1.4] text-white"
            >
              Our Services
            </button>
          </div>
        </div>
        <p className="mt-auto max-w-[468px] pt-10 text-lg leading-[1.4] text-white/80 md:absolute md:bottom-12 md:right-16 md:mt-0 md:pt-0 lg:bottom-14 lg:right-20 xl:right-[82px]">
          Your car deserves the best care, and we deliver it with precision, speed, and reliability.
          Book your appointment today!
        </p>
      </div>
    </section>
  )
}
