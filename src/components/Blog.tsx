'use client'

import Image from 'next/image'
import { Calendar, User } from 'lucide-react'
import { useState, useRef } from 'react'
import { HeadingGrid } from './HeadingGrid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

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
  {
    title: 'Not Under the Hood: Exploring the Latest in Automotive ',
    date: 'December 8, 2024',
    author: 'Awais Johnson',
  },
]

interface BlogCard {
  title: string
  date: string
  author: string
}

function BlogCard({ title, date, author }: BlogCard) {
  return (
    <article className="flex flex-col rounded-[17px] bg-[#edf2fd] pb-[18px] h-full">
      <div className="relative aspect-[387/300] w-full overflow-hidden rounded-t-lg">
        <Image
          src="/heroimg.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 25vw"
        />
      </div>

      <div className="flex flex-col gap-4 px-[14px] pt-4 flex-1">
        <div className="flex flex-row flex-wrap items-center gap-4">
          <span className="rounded-lg bg-secondary px-2 py-1 text-xs font-medium leading-[1.3] text-white">
            Category
          </span>
          <span className="text-xs font-medium leading-[1.333] text-black/80">5 min read</span>
        </div>

        <h3 className="text-lg font-medium leading-[1.444] text-black flex-1">{title}</h3>
      </div>

      <div className="flex flex-row items-center px-[14px] text-black/50 opacity-50">
        <div className="flex flex-1 items-center justify-start gap-2">
          <Calendar className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
          <time className="text-xs font-normal leading-[1.333]" dateTime={date}>
            {date}
          </time>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
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
  const word = ['Automotive', 'Insights']

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

  return (
    <section className="w-full bg-[#222222] px-4 md:px-10 lg:px-15 xl:px-20 pb-6">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
        <HeadingGrid
          pageTitle="Rev Up Your Ride: The Latest in Automotive News and Insights"
          pageName="Blog"
          pageDescription="Stay ahead of the curve with expert analysis, in-depth reviews, and the latest trends in the automotive world."
          wordsToHighlight={word}
        />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-x-visible"
        >
          {POSTS.map((post, i) => (
            <BlogCard key={i} title={post.title} author={post.author} date={post.date} />
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
