import Image from 'next/image'
export default function Journey() {
  return (
    <>
      <section className="w-full overflow-x-hidden bg-primary px-4 py-10 md:px-6 min-[1441px]:px-0 lg:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:gap-8">
          <div className="flex min-w-0 w-full flex-col gap-4 lg:max-w-none lg:flex-1">
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium leading-normal text-secondary pb-2">
                The FixinMoto Journey
              </p>
              <h2 className="max-w-full text-3xl font-bold text-white md:text-5xl md:max-w-[28rem]">
                From{' '}
                <span className="bg-secondary inline-block skew-x-[-6deg] px-2 mb-1">Passion</span>{' '}
                to <span className="bg-secondary inline-block skew-x-[-6deg] px-2">Precision</span>
              </h2>
              <p className="w-full max-w-xl text-lg leading-[1.4] text-white/50 pt-2">
                At FixinMoto, our journey began with a shared passion for cars and a drive to make
                automotive care easier, more accessible, and more reliable. What started as a small
                group of enthusiasts who were tired of the typical repair shop experience has grown
                into a trusted brand committed to providing exceptional service and expert
                knowledge.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] w-full min-w-0 max-w-full sm:h-[520px] lg:h-[638px] lg:flex-1">
            <div className="absolute inset-0 overflow-hidden rounded-[15px] lg:rounded-l-[15px] lg:rounded-r-none">
              <Image
                src="/passionToPrecisionImg1.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-3 z-10 h-[200px] w-[200px] overflow-hidden rounded-[15px] sm:left-3 sm:h-[220px] sm:w-[220px] md:-bottom-4 md:-left-5 lg:h-[220px] lg:w-[220px]">
              <Image
                src="/passionToPrecisionImg2.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
