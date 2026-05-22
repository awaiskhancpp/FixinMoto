import { Clock, User } from 'lucide-react'
import type { Blog } from '@/payload-types'
import Link from 'next/link'

interface Recentsprops {
  card: Blog[]
}
export default function RecentPosts({ card }: Recentsprops) {
  return (
    <div className="text-white bg-primary rounded-lg p-5 mt-4">
      <h2 className="text-white font-semibold">Recent Post</h2>

      <div className="mt-3 w-full space-y-6 ">
        {card.slice(0, 4).map((p) => (
          <Post
            key={p.id}
            slug={p.slug}
            title={p.title || ''}
            author={typeof p.author === 'object' ? p.author?.email || '' : ''}
            date={p.createdAt}
          />
        ))}
      </div>
    </div>
  )
}
interface POST {
  slug?: string | null
  title: string
  date: string
  author: string
}
function Post({ slug, title, date, author }: POST) {
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
  const inner = (
    <>
      <h3 className="mt-3 text-lg font-medium leading-[1.444] hover:text-secondary lg:line-clamp-2 xl:line-clamp-3">
        {title}
      </h3>
      <div className="flex lg:flex-row md:flex-col flex-row gap-6 md:gap-2 opacity-50 mt-4">
        <div className="flex gap-2 lg:w-32">
          <Clock className="size-4 " />
          <time className="text-xs font-normal">{timeAgo}</time>
        </div>
        <div className="flex gap-2 w-32">
          <User className="size-4 " />
          <span className="text-xs font-normal ">{authorName}</span>
        </div>
      </div>
    </>
  )

  if (slug) {
    return (
      <Link
        href={`/blogs/${slug}`}
        className="block w-full border-b border-white/20 pb-2 last:border-none"
      >
        {inner}
      </Link>
    )
  }

  return <div className="w-full border-b border-white/20 last:border-none pb-2">{inner}</div>
}
