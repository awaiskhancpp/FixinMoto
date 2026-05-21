'use client'
import { Search } from 'lucide-react'
import RecentPosts from './RecentPosts'
import { useState, useRef, useEffect } from 'react'
import type { Blog, Tag } from '@/payload-types'
import { blogAuthorLabel } from '@/lib/blogAuthor'
import { BlogCard } from './BlogCard'

interface blogProps {
  card: Blog[]
  tag: Tag[]
}
export default function MainContent({ card, tag }: blogProps) {
  const [selectedButtons, setSelectedButtons] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(search)
    }, 300)

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [search])

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
  const filteredCards =
    selectedButtons.size === 0 && !search
      ? card
      : card.filter((blog) => {
          return blog.tags?.some((blogTag) => {
            const blogSearch = blog.title?.toLowerCase().includes(debouncedQuery.toLowerCase())
            const matchesTags =
              selectedButtons.size === 0 ||
              blog.tags?.some((blogTag) => {
                const tagId = typeof blogTag === 'object' ? blogTag.id : blogTag
                return selectedButtons.has(tagId)
              })
            return blogSearch && matchesTags
          })
        })
  return (
    <section className="px-4 py-4 md:px-6 order-2 md:order-1 min-[1441px]:px-0 md:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-8 order-2 md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 min-h-[400px]">
              {filteredCards.map((c, i) => (
                <BlogCard
                  key={i}
                  title={c.title || ''}
                  author={blogAuthorLabel(c.author)}
                  date={c.createdAt}
                  imgSrc={typeof c?.cardImg === 'object' ? c?.cardImg?.url || '' : ''}
                  category={typeof c.Category === 'object' ? c.Category?.name || '' : ''}
                  slug={c.slug || ''}
                />
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 order-1 md:order-2 flex flex-col">
            <div className="relative items-center">
              <Search className=" absolute top-1/2 -translate-y-1/2 left-3 text-white/70" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="w-full border border-white/50 rounded-lg px-10 py-2.5 bg-transparent text-white/50 placeholder:text-white/50"
              />
            </div>
            <div>
              <RecentPosts card={card} />
            </div>
            <div className="bg-primary mt-4 px-[15px] pb-6 rounded-lg">
              <h2 className="text-white font-semibold mt-3 pt-2">Tags</h2>
              <div className="pt-4 flex md:overflow-hidden overflow-x-scroll  lg:flex-wrap gap-3 text-white">
                {tag.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => toggleButton(t.id)}
                    className={`rounded-3xl px-3 py-2 transition-all whitespace-nowrap text-sm duration-200 ${
                      selectedButtons.has(t.id)
                        ? 'bg-secondary border border-secondary'
                        : 'border border-white'
                    }`}
                  >
                    {t.name}
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
