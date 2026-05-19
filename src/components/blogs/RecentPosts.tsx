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
            author={p.author || ''}
            date={p.datePublished || ''}
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
  const inner = (
    <>
      <h3 className="mt-3 text-lg font-medium leading-[1.444] hover:text-secondary lg:line-clamp-2 xl:line-clamp-3">
        {title}
      </h3>
      <div className="flex lg:flex-row md:flex-col flex-row gap-6 md:gap-2 opacity-50 mt-4">
        <div className="flex gap-2 lg:w-32">
          <Clock className="size-4 " />
          <time className="text-xs font-normal">{date}</time>
        </div>
        <div className="flex gap-2 w-32">
          <User className="size-4 " />
          <span className="text-xs font-normal ">{author}</span>
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
