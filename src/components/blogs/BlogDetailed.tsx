import { Clock, User } from 'lucide-react'
import Image from 'next/image'
import type { Blog, Tag } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Tags } from '@/components/Tags'

function isPopulatedTag(entry: number | Tag): entry is Tag {
  return typeof entry === 'object' && entry !== null && 'name' in entry
}

interface BlogDetailedProps {
  detail: Blog
}

export default function BlogDetailed({ detail }: BlogDetailedProps) {
  const bannerSrc =
    typeof detail.bannerImg === 'object' && detail.bannerImg?.url
      ? detail.bannerImg.url
      : '/heroimg.png'

  const resolvedTags = detail.tags?.filter(isPopulatedTag) ?? []

  return (
    <>
      <div className="relative h-[350px] w-full md:h-[523px]">
        <Image
          src={bannerSrc}
          fill
          alt={detail.title ? `${detail.title} banner` : 'Blog banner'}
          className="rounded-[15px] object-cover"
          sizes="(max-width: 768px) 100vw, 1440px"
          priority
        />
      </div>
      <div className="flex flex-row px-[14px] opacity-50">
        <div className="flex w-32 gap-2">
          <Clock className="size-4 shrink-0" strokeWidth={1.5} />
          <time className="text-xs font-normal">{detail.datePublished}</time>
        </div>
        <div className="flex w-32 gap-2">
          <User className="size-4 shrink-0" strokeWidth={1.5} />
          <span className="text-xs font-normal">{detail.author}</span>
        </div>
      </div>
      <div className="text-white">
        {detail.blogDetail ? <RichText data={detail.blogDetail} /> : null}
      </div>
      {detail.social && detail.social.length > 0 ? (
        <div className="flex flex-col gap-2 py-20">
          <h3 className="text-lg font-medium">Share</h3>
          <div className="flex gap-2">
            {detail.social.map((s, i) => (
              <a
                key={i}
                href={s.forwardTo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center rounded-md bg-secondary p-2"
              >
                <Image
                  src={typeof s.logo === 'object' ? s.logo?.url || '' : ''}
                  alt={typeof s.logo === 'object' ? s.logo?.alt || 'Share' : 'Share'}
                  width={18}
                  height={18}
                />
              </a>
            ))}
          </div>
        </div>
      ) : null}
      <Tags tag={resolvedTags} />
    </>
  )
}
