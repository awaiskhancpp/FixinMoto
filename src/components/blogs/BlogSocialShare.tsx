'use client'

import Image from 'next/image'
import { toast } from 'react-toastify'
import type { Blog } from '@/payload-types'

function withHttps(link: string) {
  const s = link.trim()
  if (!s) return ''
  if (/^https?:\/\//i.test(s)) return s
  return `https://${s}`
}

function shareLink(platform: string, articleUrl: string, title: string) {
  const u = encodeURIComponent(articleUrl)
  const t = encodeURIComponent((title || '').slice(0, 260))
  if (platform === 'facebook') return `https://www.facebook.com/sharer/sharer.php?u=${u}`
  if (platform === 'twitter') return `https://twitter.com/intent/tweet?url=${u}&text=${t}`
  if (platform === 'linkedin') return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`
  return null
}

const icons: Record<string, string> = {
  facebook: '/social/facebook.png',
  instagram: '/social/insta.png',
  twitter: '/social/twitter.png',
  linkedin: '/social/linkdin.png',
}

type Row = NonNullable<Blog['social']>[number]

export default function BlogSocialShare({
  entries,
  canonicalUrl,
  title,
}: {
  entries: NonNullable<Blog['social']>
  canonicalUrl: string
  title: string
}) {
  if (!entries.length) return null

  const btn =
    'flex cursor-pointer items-center justify-center rounded-md bg-secondary p-2 hover:opacity-90'

  return (
    <div className="flex flex-col gap-2 py-10">
      <h3 className="text-lg font-medium">Share</h3>
      <div className="flex flex-wrap gap-2">
        {entries.map((s: Row, i: number) => {
          if (!s.platform) return null

          const p = s.platform.toLowerCase()
          const href = shareLink(p, canonicalUrl, title)
          const src = icons[p] ?? ''

          if (href) {
            return (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={btn}>
                <Image src={src} alt="" width={24} height={18} />
              </a>
            )
          }

          if (p === 'instagram') {
            return (
              <button
                key={i}
                type="button"
                className={btn}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(canonicalUrl)
                    toast.success('Link copied for Instagram.')
                  } catch {
                    toast.error('Copy failed — copy the URL from the address bar.')
                  }
                }}
              >
                <Image src={src} alt="" width={24} height={18} />
              </button>
            )
          }

          const fallback = withHttps(s.forwardTo)
          if (!fallback) return null
          return (
            <a key={i} href={fallback} target="_blank" rel="noopener noreferrer" className={btn}>
              <Image src={src} alt="" width={24} height={18} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
