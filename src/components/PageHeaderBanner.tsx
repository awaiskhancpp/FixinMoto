import Image from 'next/image'

const achievements = [
  { head: '+15', label: 'Years Experience' },
  { head: '20+', label: 'Expert Technicians' },
  { head: '1,200+', label: 'Projects Completed' },
  { head: '100%', label: 'Satisfaction Rate' },
]

export default function PageHeaderBanner() {
  return (
    <>
      <section className="relative flex min-h-[480px] w-full flex-col justify-center md:min-h-[560px]">
        <Image
          src="/serviceBannerImg.webp"
          alt="..."
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-20 md:px-16 md:py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <h1 className="max-w-[732px] text-4xl font-semibold leading-[1.125] text-white md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
              Expert Automotive Care for Every Need
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-secondary text-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center px-6 py-10 md:px-16 md:py-10">
          <div className="flex w-full max-w-[1110px] flex-row flex-wrap justify-center gap-4 md:flex-nowrap md:gap-4">
            {achievements.map((item, i) => (
              <div
                key={item.label}
                className={`flex min-w-[140px] flex-1 flex-col items-center gap-4 py-2 text-center md:min-w-0 ${i > 0 ? 'md:border-l md:border-white md:pl-4' : ''}`}
              >
                <span className="text-4xl font-semibold leading-[1.125] md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
                  {item.head}
                </span>
                <span className="text-lg font-medium leading-[1.4444444] text-white/50">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
