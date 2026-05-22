import { Clock, User } from 'lucide-react'
import Image from 'next/image'
import type { Blog, Tag } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Tags } from '@/components/Tags'
import ContentForm from './ContentForm'
import { Comment } from '@/payload-types'
import '@/app/(frontend)/styles.css'

function isPopulatedTag(entry: number | Tag): entry is Tag {
  return typeof entry === 'object' && entry !== null && 'name' in entry
}

interface BlogDetailedProps {
  detail: Blog
  comment: Comment[]
}
const socialIcons: Record<string, string> = {
  facebook: '/social/facebook.png',
  instagram: '/social/insta.png',
  twitter: '/social/twitter.png',
  linkedin: '/social/linkdin.png',
}
export default function BlogDetailed({ detail, comment }: BlogDetailedProps) {
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

  return (
    <>
      <div className="text-white max-w-[900px] mx-auto">
        <div className="relative h-[350px] w-full md:h-[523px]">
          <Image
            src={bannerSrc}
            fill
            alt={detail.title || '...'}
            className="rounded-[15px] object-cover"
            sizes="(max-width: 768px) 100vw, 1440px"
            priority
          />
        </div>
        <div className="flex flex-row px-[14px] opacity-50 mt-4 mb-4">
          <div className="flex w-32 gap-2">
            <Clock className="size-4 shrink-0" strokeWidth={1.5} />
            <time className="text-xs font-normal">{timeAgo}</time>
          </div>
          <div className="flex w-32 gap-2">
            <User className="size-4 shrink-0" strokeWidth={1.5} />
            <span className="text-xs font-normal">{authorName}</span>
          </div>
        </div>
        <div className="blog-detail-body">
          <RichText data={detail.blogDetail} />
        </div>
        {detail.social && detail.social.length > 0 ? (
          <div className="flex flex-col gap-2 py-10">
            <h3 className="text-lg font-medium">Share</h3>
            <div className="flex gap-2">
              {detail.social.map((s, i) => {
                if (!s.platform) return null
                return (
                  <a
                    key={s.platform}
                    href={s.forwardTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center justify-center rounded-md bg-secondary p-2"
                  >
                    <Image
                      src={socialIcons[s.platform] || ''}
                      alt={socialIcons[s.platform] || ''}
                      width={24}
                      height={18}
                    />
                  </a>
                )
              })}
            </div>
          </div>
        ) : null}
        <div className="bg-primary mt-4 px-[15px] pb-6 rounded-lg">
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
