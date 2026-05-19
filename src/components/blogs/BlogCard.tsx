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
    <a href={`/blogs/${slug}`} className="bg-primary h-full text-white rounded-2xl">
      <div className="relative aspect-[4/3] bg-primary w-full">
        <Image src={imgSrc} alt="..." fill className="rounded-t-2xl" />
      </div>
      <div className="flex flex-col gap-2 px-[14px] pt-4 flex-1">
        <div className="flex flex-row items-center ">
          <span className="rounded-lg  py-1 px-2 text-[10px] uppercase tracking-wide  text-white bg-secondary ">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-medium leading-[1.444] line-clamp-2 ">{title}</h3>
      </div>
      <div className="flex items-center gap-3 px-[14px] mt-5 pb-2 opacity-50 text-xs">
        <div className="flex items-center gap-1">
          <Clock className="size-3 shrink-0" strokeWidth={1.5} />
          <time>{date}</time>
        </div>
        <div className="flex items-center gap-1">
          <User className="size-3 shrink-0" strokeWidth={1.5} />
          <span>{author}</span>
        </div>
      </div>
    </a>
  )
}
