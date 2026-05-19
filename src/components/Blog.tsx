'use client'

import Image from 'next/image'
import { Calendar, User } from 'lucide-react'
import { useState, useRef } from 'react'
import { HeadingGrid } from './HeadingGrid'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Blog } from '@/payload-types'
import 'swiper/css'
import 'swiper/css/pagination'

interface BlogProps {
  blogCard: Blog[]
}
// const POSTS = [
//   {
//     title: 'Revving Up: The Future of Automotive Innovation',
//     date: 'December 9, 2024',
//     author: 'Alex Johnson',
//     imgSrc: '/blog-img-1.jpg',
//   },
//   {
//     title: 'Driving Change: Trends Shaping the Automotive Industry',
//     date: 'December 2, 2024',
//     author: 'Alex Johnson',
//     imgSrc: '/blog-img-2.jpg',
//   },
//   {
//     title: 'Under the Hood: Exploring the Latest in Automotive ',
//     date: 'December 7, 2024',
//     author: 'Alex Johnson',
//     imgSrc: '/blog-img-3.jpg',
//   },
//   {
//     title: 'Not Under the Hood: Exploring the Latest in Automotive ',
//     date: 'December 8, 2024',
//     author: 'Awais Johnson',
//     imgSrc: '/blog-img-4.jpg',
//   },
// ]

interface BlogCard {
  title: string
  date: string
  author: string
  imgSrc: string
  category: string
  slug: string
}

export function BlogCard({ title, date, author, imgSrc, category, slug }: BlogCard) {
  return (
    <a href={`/blogs/${slug}`} className="flex flex-col rounded-[17px] bg-[#edf2fd] pb-5">
      <div className="relative aspect-[387/300] w-full overflow-hidden rounded-t-lg">
        <Image src={imgSrc} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-4 px-[14px] pt-4 flex-1">
        <div className="flex flex-row flex-wrap items-center gap-4">
          <span className="rounded-lg bg-secondary px-2 py-1 text-xs font-medium leading-[1.3] text-white">
            {category}
          </span>
          <span className="text-xs font-medium leading-[1.333] text-black/80">5 min read</span>
        </div>

        <h3 className="text-lg font-medium leading-[1.444] text-black flex-1 line-clamp-2  pb-2">
          {title}
        </h3>
      </div>

      <div className="flex flex-row items-center px-[14px] text-black/50 opacity-50 space-x-4">
        <div className="flex flex-1 items-center justify-start gap-2">
          <Calendar className="size-4 shrink-0" strokeWidth={1.5} />
          <time className="text-xs font-normal " dateTime={date}>
            {date}
          </time>
        </div>
        <div className="flex flex-1 items-center justify-end pt-3 gap-2">
          <User className="size-4 shrink-0" strokeWidth={1.5} />
          <span className="text-xs font-normal ">{author}</span>
        </div>
      </div>
    </a>
  )
}

export default function Blog({ blogCard }: BlogProps) {
  const swiperRef = useRef<any>(null)
  const [activeCard, setActiveCard] = useState(0)
  const word = ['Automotive', 'Insights']

  return (
    <section className="w-full bg-[#222222] py-6 px-4 md:px-6 min-[1441px]:px-0 pb-6">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
        <HeadingGrid
          pageTitle="Rev Up Your Ride: The Latest in Automotive News and Insights"
          pageName="Blog"
          pageDescription="Stay ahead of the curve with expert analysis, in-depth reviews, and the latest trends in the automotive world."
          wordsToHighlight={word}
        />
        <div className="xl:hidden lg:h-[480px]">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
            }}
            className="w-full h-full"
            onSlideChange={(swiper) => setActiveCard(swiper.activeIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            {blogCard.slice(0, 4).map((post, i) => (
              <SwiperSlide key={i}>
                <BlogCard
                  title={post.title || ''}
                  author={post.author || ''}
                  date={post.datePublished || ''}
                  imgSrc={typeof post?.cardImg === 'object' ? post?.cardImg?.url || '' : ''}
                  category={typeof post.Category === 'object' ? post.Category?.name || '' : ''}
                  slug={post.slug || ''}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center gap-2 xl:hidden mt-4">
          {blogCard.slice(0, 4).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideTo(i)
                }
              }}
              className="size-2 rounded-full transition-colors"
              style={{ background: i === activeCard ? '#ffffff' : '#6b7280' }}
            />
          ))}
        </div>
        <div className="hidden xl:grid xl:grid-cols-4 gap-4 overflow-x-auto ">
          {blogCard.slice(0, 4).map((post, i) => (
            <BlogCard
              key={i}
              title={post.title || ''}
              author={post.author || ''}
              date={post.datePublished || ''}
              imgSrc={typeof post?.cardImg === 'object' ? post?.cardImg?.url || '' : ''}
              category={typeof post.Category === 'object' ? post.Category?.name || '' : ''}
              slug={post.slug || ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
