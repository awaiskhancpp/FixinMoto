import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Image from 'next/image'
interface BLOG {}

export function BlogCard() {
  return (
    <div className="bg-[#222222] text-white rounded-2xl pb-4">
      <div className="relative aspect-[4/3]   w-full h-[386px]">
        <Image src="/blogImg1.jpg" alt="..." fill className="rounded-t-2xl" />
      </div>
      <div className="flex flex-col gap-2 px-[14px] pt-4 flex-1">
        <div className="flex flex-row flex-wrap items-center ">
          <span className="rounded-lg  py-1 text-xs font-medium ">Category</span>
        </div>

        <h3 className="text-lg font-medium leading-[1.444] line-clamp-2  pb-2">
          5 Common Car Problems and How To Fix Tem
        </h3>
      </div>

      <div className="flex flex-row  px-[14px] opacity-50 ">
        <div className="flex gap-2 w-32">
          <Clock className="size-4 shrink-0" strokeWidth={1.5} />
          <time className="text-xs font-normal ">Dec 9, 2026</time>
        </div>
        <div className="flex gap-2 w-32">
          <User className="size-4 shrink-0" strokeWidth={1.5} />
          <span className="text-xs font-normal ">Alex Johnson</span>
        </div>
      </div>
      <p className="text-white px-[14px] mt-1">
        Learn how to diagnose and solve five of the most common car issues, from engine trouble to
        brake problems.
      </p>
      <div className="bg-secondary  mt-4 mx-[14px]  flex items-center py-3 w-[160px] rounded-md justify-center ">
        <a href={`/blogs/5 Common Car Problems and How To Fix Tem`}>Read More</a>
        <ArrowRight />
      </div>
    </div>
  )
}
