import { Clock, User } from 'lucide-react'
import Image from 'next/image'
interface BlogCardProps {
  title: string
  date: string
  author: string
  imgSrc: string
  category: string
  slug: string
}

export function BlogCard({ title, date, author, imgSrc, category, slug }: BlogCardProps) {
  const authorName = author.split('@')[0]
  const parsedDate = Date.parse(date)
  const milliSecondsAgo = Date.now() - parsedDate
  const seconds = Math.floor(milliSecondsAgo / 1000)
  const minutes = Math.floor(seconds / 60)
  const hrs = Math.floor(minutes / 60)
  const days = Math.floor(hrs / 24)
  let timeAgo = 'updated now'
  if (days > 0) {
    timeAgo = `${days} day${days > 1 ? 's' : ''} ago`
  } else if (hrs > 0) {
    timeAgo = `${hrs} hr${hrs > 1 ? 's' : ''} ago`
  } else if (minutes > 0) {
    timeAgo = `${minutes} min${minutes > 1 ? 's' : ''} ago`
  }
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
          <time>{timeAgo}</time>
        </div>
        <div className="flex items-center gap-1">
          <User className="size-3 shrink-0" strokeWidth={1.5} />
          <span>{authorName}</span>
        </div>
      </div>
    </a>
  )
}
