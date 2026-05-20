import BlogGridHeader from '@/components/blogs/BlogGridHeader'
import MainContent from '@/components/blogs/MainContent'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function BlogGrid() {
  const payload = await getPayload({ config: configPromise })
  const card = await payload.find({
    collection: 'blog',
  })
  const tag = await payload.find({
    collection: 'tags',
  })
  return (
    <div className="bg-[#202020]">
      <BlogGridHeader />
      <MainContent card={card.docs} tag={tag.docs} />
    </div>
  )
}
