'use client'
import { Search } from 'lucide-react'
import { BlogCard } from './BlogCard'
import RecentPosts from './RecentPosts'
import { useState } from 'react'

const ButtonName = [
  { name: 'Automotive News', onclick: {} },
  { name: 'Electric Vehicles (EVs)', onclick: {} },
  { name: 'Motorsports', onclick: {} },
  { name: 'Car Technology', onclick: {} },
  { name: 'Car Culture', onclick: {} },
  { name: 'Buying Guides', onclick: {} },
  { name: 'Car Reviews', onclick: {} },
  { name: 'Tuning', onclick: {} },
]
export default function MainContent() {
  const [selectedButtons, setSelectedButtons] = useState<Set<number>>(new Set())
  const toggleButton = (i: number) => {
    setSelectedButtons((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(i)) {
        newSet.delete(i)
      } else {
        newSet.add(i)
      }
      return newSet
    })
  }
  return (
    <section className="px-4 py-4 md:px-6 order-2 md:order-1 min-[1441px]:px-0 md:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-8 order-2 md:order-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="col-span-12 md:col-span-4 order-1 md:order-2 flex flex-col">
            <div className="relative items-center">
              <Search className=" absolute top-1/2 -translate-y-1/2 left-3 text-white/70" />
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-white/50 rounded-lg px-10 py-2.5 bg-transparent text-white/50 placeholder:text-white/50"
              />
            </div>
            <div>
              <RecentPosts />
            </div>
            <div className="bg-primary mt-4 px-[15px] pb-6  rounded-lg">
              <h2 className="text-white font-semibold mt-3 pt-2">Tags</h2>
              <div className="pt-4 flex md:overflow-hidden overflow-x-scroll  lg:flex-wrap gap-3 text-white">
                {ButtonName.map((b, i) => (
                  <button
                    key={i}
                    onClick={() => toggleButton(i)}
                    className={` rounded-3xl px-3 py-2 transition-all whitespace-nowrap text-sm duration-200 ${
                      selectedButtons.has(i) ? 'bg-secondary' : 'border border-white'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
