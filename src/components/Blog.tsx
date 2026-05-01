import { HeadingGrid } from './HeadingGrid'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'

export default function Blog() {
  const highlightedWords = ['Automotive', 'Insights']
  return (
    <section className="bg-black w-full">
      <HeadingGrid
        pageName="Blog"
        pageDescription="Stay ahead of the curve with expert analysis, in-depth reviews, and the latest trends in the automotive world."
        pageTitle="Rev Up Your Ride: The Latest in Automotive News and Insights"
        wordsToHighlight={highlightedWords}
      />
      <div className="flex flex-col md:flex-row px-4 pb-10 justify-center space-x-5 space-y-4">
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
      <div className="w-full lg:h-[340px]  h-[290px] ">
        <Image src="/heroimg.png" alt=".." fill className="object-fit object-center" />
      </div>
      <div className="px-3 pb-3">
        <div className="flex items-center space-x-2 ">
          <button className="bg-[#DB323E] text-white rounded-md px-3 py-1">Category</button>
          <p className="text-gray-400">5 mint read</p>
        </div>
        <h1 className="text-xl pb-1">Revving Up: The Future of Automotive Innovation</h1>
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
