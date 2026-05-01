import Image from 'next/image'
export default function Testimonials() {
  return (
    <section className="bg-[#292929] w-full">
      <div className="grid grid-cols-12 text-white py-10 px-10">
        <div className="col-span-8">
          <p className="text-slate-400">Testimonials</p>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
            What Drivers are Saying About <span className="text-red-500">FixinMoto </span>
          </h1>
        </div>
        <div className="col-span-4 flex justify-center items-center text-center ">
          <p className="text-slate-400">
            Read what our satisfied customers have to say about our products and services
          </p>
        </div>
      </div>
      {/*                           pushes far right */}
      <div className="pt-10 w-[80%] ml-auto right rounded-tl-[24px] bg-[#DB323E] h-[600px]">
        <div
          id="default-carousel"
          className="relative px-20 space-x-2 w-full"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-base md:h-96">
            <div className="duration-700 ease-in-out" data-carousel-item>
              <TestimonialCard />
            </div>
            <div className="duration-700 ease-in-out" data-carousel-item>
              <TestimonialCard />
            </div>
            <div className="duration-700 ease-in-out" data-carousel-item>
              <TestimonialCard />
            </div>
            <div className="duration-700 ease-in-out" data-carousel-item>
              <TestimonialCard />
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard() {
  return (
    <div className="rounded-lg bg-white w-[400px] h-[460px] px-10 pt-20 ">
      <div>
        <Image
          src="/heroimg.png"
          alt="testimonialimg"
          width={120}
          height={120}
          className="object-center object-cover pb-3"
        />
      </div>
      <p className="pb-5">
        For years, I've trusted my car to FixinMoto, and they've never let me down. The staff is not
        only friendly but also incredibly knowledgeable, taking the time to walk me through every
        repair. I wholeheartedly recommend them to anyone in need of dependable auto repair
        services.
      </p>
      <p>⭐⭐⭐⭐⭐</p>
    </div>
  )
}
