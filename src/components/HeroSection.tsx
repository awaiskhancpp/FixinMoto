import Image from 'next/image'
import type { Homepage as HeroType } from '@/payload-types'
interface HeroProps {
  data: HeroType
}
export default function HeroSection({ data }: HeroProps) {
  const titleArray = data.heroTitle?.split(' ')
  return (
    <div className="relative flex min-h-screen w-full flex-col md:justify-center justify-end py-4 px-4 md:px-6 min-[1441px]:px-0 md:py-10">
      <Image
        src={typeof data.heroImage === 'object' && data.heroImage?.url ? data.heroImage.url : ''}
        alt="heroimage"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent" />

      <div className="relative z-[20] mx-auto w-full max-w-[1440px] ">
        <div className="text-4xl text-white md:text-6xl lg:text-7xl 2xl:text-8xl">
          <h1 className={`max-w-[1100px]`}>
            {titleArray?.map((t, i) =>
              data.highlightedWords?.some((w) => w.word === t) ? (
                <span key={i} className="text-secondary">{`${t} `}</span>
              ) : (
                <span key={i}>{`${t} `}</span>
              ),
            )}
          </h1>
        </div>
        <p className="md:hidden mt-10 max-w-xl text-white">{data.heroTagline}</p>
        <div className="flex gap-4 pt-10  text-white">
          <button className="h-12 w-48 rounded-lg bg-secondary md:px-6 py-3">
            <a href="/appointment">Appointment Now</a>
          </button>
          <button className="h-12 w-48 rounded-lg border border-white bg-transparent">
            <a href="/services">Our Service</a>
          </button>
        </div>

        <p className="hidden md:block md:absolute md:right-0 mt-10 max-w-xl text-white md:mt-14">
          {data.heroTagline}
        </p>
      </div>
    </div>
  )
}
