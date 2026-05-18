import { Clock, User } from 'lucide-react'
import Image from 'next/image'
interface BlogCard {
  title: string
  date: string
  author: string
  imgSrc: string
  category: string
  slug: string
}

export function BlogCard({ title, date, author, imgSrc, category, slug }: BlogCard) {
  return (
    <a href={`/blogs/${slug}`} className="bg-primary text-white max-h-[474px]  rounded-2xl pb-4">
      <div className="relative aspect-[4/3] bg-primary  w-full">
        <Image src={imgSrc} alt="..." fill className="rounded-t-2xl" />
      </div>
      <div className="flex flex-col gap-2 px-[14px] pt-4 flex-1">
        <div className="flex flex-row flex-wrap items-center ">
          <span className="rounded-lg  py-1 text-[10px] uppercase tracking-wide  text-secondary ">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-medium leading-[1.444] line-clamp-2 pb-2">{title}</h3>
      </div>
      <div className="flex flex-row px-[14px] opacity-50 mt-6 justify-between ">
        <div className="flex gap-2 w-32">
          <Clock className="size-4 shrink-0" strokeWidth={1.5} />
          <time className="text-xs font-normal ">{date}</time>
        </div>
        <div className="flex gap-2 w-32 ">
          <User className="size-4 shrink-0" strokeWidth={1.5} />
          <span className="text-xs font-normal ">{author}</span>
        </div>
      </div>
    </a>
  )
}
