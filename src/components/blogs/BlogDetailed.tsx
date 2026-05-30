import { Clock, User } from 'lucide-react'
import Image from 'next/image'
import type { Blog, Tag } from '@/payload-types'
import BlogSocialShare from './BlogSocialShare'
import ContentForm from './ContentForm'
import { Comment } from '@/payload-types'
import '@/app/(frontend)/styles.css'
import RichText from '../RichText/index'
import BlogTableOfContents from './BlogTableOfContents'
import { getHeadingsFromLexical } from '@/lib/lexicalHeadings'

function isPopulatedTag(entry: number | Tag): entry is Tag {
  return typeof entry === 'object' && entry !== null && 'name' in entry
}

interface BlogDetailedProps {
  detail: Blog
  comment: Comment[]
  canonicalUrl: string
}

export default function BlogDetailed({ detail, comment, canonicalUrl }: BlogDetailedProps) {
  const parsedDate = Date.parse(detail.createdAt)
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
  const authorEmail =
    typeof detail.author === 'object' && detail.author?.email ? detail.author.email : 'Unknown'
  const authorName = authorEmail.split('@')[0]
  const bannerSrc =
    typeof detail.cardImg === 'object' && detail.cardImg?.url ? detail.cardImg.url : '/'

  const resolvedTags = detail.tags?.filter(isPopulatedTag) ?? []
  const tocHeadings = getHeadingsFromLexical(detail.blogDetail)

  return (
    <>
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="relative h-[220px] w-full sm:h-[320px] md:h-[420px] lg:h-[523px]">
          <Image
            src={bannerSrc}
            fill
            alt={detail.title || '...'}
            className="rounded-[15px] object-cover"
            sizes="(max-width: 768px) 100vw, 1440px"
            priority
          />
        </div>
        <div className="mt-4 mb-4 flex flex-col gap-3 px-1 opacity-60 sm:flex-row sm:flex-wrap sm:gap-6 sm:px-[14px]">
          <div className="flex min-w-0 items-center gap-2">
            <Clock className="size-4 shrink-0" strokeWidth={1.5} />
            <time className="text-xs font-normal">{timeAgo}</time>
          </div>
          <div className="flex min-w-0 items-center gap-2">
            <User className="size-4 shrink-0" strokeWidth={1.5} />
            <span className="truncate text-xs font-normal">{authorName}</span>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col gap-6 sm:mt-8 sm:gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
          <article className="min-w-0 order-2 w-full flex-1 lg:order-1 lg:max-w-none">
            <RichText content={detail.blogDetail} />
          </article>
          {tocHeadings.length > 0 ? (
            <aside className="order-1 w-full shrink-0 lg:order-2 lg:sticky lg:top-24 lg:self-start lg:w-64 xl:w-72">
              <BlogTableOfContents headings={tocHeadings} />
            </aside>
          ) : null}
        </div>
        {detail.social && detail.social.length > 0 ? (
          <BlogSocialShare entries={detail.social} canonicalUrl={canonicalUrl} />
        ) : null}
        <div className="bg-primary mt-4  pb-6">
          <h2 className="text-white font-semibold mt-3 pt-2">Tags</h2>
          <div className="pt-4 flex flex-wrap gap-3 text-white">
            {resolvedTags?.map((b, i) => (
              <button
                key={i}
                className="rounded-3xl px-3 py-2 transition-all duration-200 
        border border-white"
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
        <ContentForm blogId={detail.id} />
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Comments</h2>
          {comment && comment.length > 0 ? (
            <div className="space-y-4">
              {comment.map((c, i) => (
                <div className="border-b border-white/30 last:border-none">
                  <h4 className="text-white/40">{c.firstName}</h4>
                  <p className="text-white/80">{c.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/80">Be the first to comment</p>
          )}
        </div>
      </div>
    </>
  )
}
