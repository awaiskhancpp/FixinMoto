import Image from 'next/image'
export default function BlogGridHeader() {
  return (
    <div className="relative flex min-h-[480px] w-full flex-col justify-center items-center">
      <Image
        src="/blogGridHeaderImg.jpg"
        alt="..."
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <div className="relative z-10 flex w-full flex-col justify-center items-center px-4 py-4 md:px-6 min-[1441px]:px-0 md:py-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <h1 className="mx-auto text-4xl font-semibold leading-[1.125] text-white md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
            Rev Up Your Ride with Expert Insights
          </h1>
        </div>
      </div>
    </div>
  )
}
