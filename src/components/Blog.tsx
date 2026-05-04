'use client'
import { HeadingGrid } from './HeadingGrid'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Blog() {
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchStartScrollLeft = useRef<number>(0)
  const highlightedWords = ['Automotive', 'Insights']

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setActiveCard(Math.round(el.scrollLeft / el.clientWidth))
  }
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartScrollLeft.current = scrollRef.current?.scrollLeft ?? 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollLeft = touchStartScrollLeft.current - (e.touches[0].clientX - touchStartX.current)
  }
  const onTouchEnd = () => {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
    setActiveCard(index)
  }
  const scrollToCard = (index: number) => {
    scrollRef.current?.scrollTo({ left: index * scrollRef.current.clientWidth, behavior: 'smooth' })
    setActiveCard(index)
  }
  return (
    <section className="bg-black w-full ">
      <HeadingGrid
        pageName="Blog"
        pageDescription="Stay ahead of the curve with expert analysis, in-depth reviews, and the latest trends in the automotive world."
        pageTitle="Rev Up Your Ride: The Latest in Automotive News and Insights"
        wordsToHighlight={highlightedWords}
      />
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory  py-4 md:py-10 md:px-20 px-4 "
        style={{ scrollbarWidth: 'none' }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-[90vw]">
            <BlogCard />
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center gap-2 mt-3 pb-4 ">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className="w-2 h-2 rounded-full transition-colors duration-300"
            style={{ background: i === activeCard ? '#ffffff' : '#6b7280' }}
          />
        ))}
      </div>
      <div className="hidden md:flex md:flex-row pt-5 md:justify-center md:space-x-5 md:space-y-4 md:py-10 md:px-20 px-4 py-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  )
}

const BlogCard = () => {
  return (
    <div className="bg-white text-black w-[90vw] h-[470px] rounded-lg">
      <div className="relative w-full lg:h-[340px]  h-[290px] ">
        <Image src="/heroimg.png" alt=".." fill className="object-fit object-center" />
      </div>
      <div className="px-3 pb-3 ">
        <div className="flex items-center space-x-2 pt-3">
          <button className="bg-[#DB323E] text-white rounded-md px-3 py-1">Category</button>
          <p className="text-gray-400">5 mint read</p>
        </div>
        <h3 className="text-xl pb-1">Revving Up: The Future of Automotive Innovation</h3>
        <div className="flex justify-between items-center text-slate-400">
          <div className="flex items-center">
            <Clock className="size-4" />
            <p>December 29, 2024</p>
          </div>
          <div className="flex items-center">
            <CircleUserRound className="size-4" />
            <p>Alex Johnson</p>
          </div>
        </div>
      </div>
    </div>
  )
}
