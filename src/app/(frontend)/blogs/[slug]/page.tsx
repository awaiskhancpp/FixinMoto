import ContentForm from '@/components/blogs/ContentForm'
import BlogDetailed from '@/components/blogs/BlogDetailed'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)

  const payload = await getPayload({ config: configPromise })
  const blog = await payload.find({
    collection: 'blog',
    where: {
      slug: {
        equals: decodedSlug,
      },
    },
    limit: 1,
    depth: 2,
  })

  const post = blog.docs[0]
  if (!post) {
    notFound()
  }

  return (
    <section className="bg-primary px-4 py-4 md:px-6 md:py-10 min-[1441px]:px-0">
      <div className="mx-auto mt-20 flex max-w-[1440px] flex-col gap-4 text-white">
        <BlogDetailed detail={post} />
        <ContentForm />
      </div>
    </section>
  )
}
