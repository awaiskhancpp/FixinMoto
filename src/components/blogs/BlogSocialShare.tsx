'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import type { Blog } from '@/payload-types'

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
}: {
  entries: NonNullable<Blog['social']>
  canonicalUrl: string
}) {
  const [pageUrl, setPageUrl] = useState(canonicalUrl.trim())

  useEffect(() => {
    if (canonicalUrl.trim()) setPageUrl(canonicalUrl.trim())
    else if (typeof window !== 'undefined') setPageUrl(window.location.href)
  }, [canonicalUrl])

  if (!entries.length) return null

  return (
    <div className="flex flex-col gap-2 py-10">
      <h3 className="text-lg font-medium">Share</h3>
      <div className="flex flex-wrap gap-2">
        {entries.map((s: Row, i: number) => {
          if (!s.platform) return null
          const p = s.platform.toLowerCase()
          const src = icons[p] ?? '/social/linkdin.png'
          return (
            <button
              key={`${s.platform}-${i}`}
              type="button"
              className="flex cursor-pointer items-center justify-center rounded-md bg-secondary p-2 hover:opacity-90"
              onClick={async () => {
                const url = pageUrl || (typeof window !== 'undefined' ? window.location.href : '')
                try {
                  await navigator.clipboard.writeText(url)
                  toast.success('Copied to clipboard')
                } catch {
                  toast.error('Could not copy')
                }
              }}
              aria-label={`Copy article link (${s.platform})`}
            >
              <Image src={src} alt="" width={24} height={18} className="pointer-events-none select-none" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
