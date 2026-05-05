'use client'

import Image from 'next/image'
import { Calendar, User } from 'lucide-react'
import { useRef, useState } from 'react'
import { HeadingGrid } from './HeadingGrid'

const POSTS = [
  {
    title: 'Revving Up: The Future of Automotive Innovation',
    date: 'December 29, 2024',
    author: 'Alex Johnson',
  },
  {
    title: 'Driving Change: Trends Shaping the Automotive Industry',
    date: 'December 12, 2024',
    author: 'Alex Johnson',
  },
  {
    title: 'Under the Hood: Exploring the Latest in Automotive ',
    date: 'December 7, 2024',
    author: 'Alex Johnson',
  },
]
interface BlogCard {
  title: string
  date: string
  author: string
}

function BlogCard({ title, date, author }: BlogCard) {
  return (
    <article className="flex min-w-[min(100vw-2rem,calc((100%-64px)/3))] shrink-0 snap-center flex-col gap-6 rounded-[17px] bg-[#edf2fd] pb-[18px] md:min-w-0 md:flex-1">
      <div className="relative aspect-[387/300] w-full overflow-hidden rounded-t-lg md:h-[300px] md:aspect-auto">
        <Image
          src="/heroimg.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-4 px-[14px]">
        <div className="flex flex-row flex-wrap items-center gap-4">
          <span className="rounded-lg bg-secondary px-2 py-1 text-xs font-medium leading-[1.3] text-white">
            Category
          </span>
          <span className="text-xs font-medium leading-[1.333] text-black/80">5 min read</span>
        </div>

        <h3 className="text-lg font-medium leading-[1.444] text-black">{title}</h3>
      </div>

      <div className="flex flex-row items-center justify-center gap-12 px-[14px] text-black/50 opacity-50">
        <div className="flex flex-1 items-center justify-center gap-2 pl-[14px]">
          <Calendar className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
          <time className="text-xs font-normal leading-[1.333]" dateTime={date}>
            {date}
          </time>
        </div>
        <div className="flex flex-1 items-center justify-center gap-2 pr-[14px]">
          <User className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
          <span className="text-xs font-normal leading-[1.333]">{author}</span>
        </div>
      </div>
    </article>
  )
}

export default function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const w = el.children[0]?.getBoundingClientRect().width ?? el.clientWidth
    const gap = 16
    setActiveCard(Math.round(el.scrollLeft / (w + gap)))
  }

  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement
    const left = card.offsetLeft
    el.scrollTo({ left, behavior: 'smooth' })
    setActiveCard(index)
  }
  const word = ['Automotive', 'Insights']

  return (
    <section className="w-full bg-[#222222]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-20">
        <HeadingGrid
          pageTitle="Rev Up Your Ride: The Latest in Automotive News and Insights"
          pageName="Blog"
          pageDescription="Stay ahead of the curve with expert analysis, in-depth reviews, and the latest trends in the automotive world."
          wordsToHighlight={word}
        />
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="-mx-4 flex gap-8 md:px-16 px-4 pb-2 [scrollbar-width:none] md:mx-0 md:overflow-visible [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <div className="flex justify-center gap-2 md:hidden">
          {POSTS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Go to article ${i + 1}`}
              className="size-2 rounded-full transition-colors"
              style={{ background: i === activeCard ? '#ffffff' : '#6b7280' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
