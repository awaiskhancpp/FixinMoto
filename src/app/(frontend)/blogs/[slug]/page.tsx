import BlogDetailed from '@/components/blogs/BlogDetailed'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)

  const h = await headers()
  const host = (h.get('x-forwarded-host') ?? h.get('host'))?.split(',')[0]?.trim()
  let canonicalUrl = ''
  if (host) {
    const proto = (h.get('x-forwarded-proto') ?? 'https').split(',')[0]?.trim() ?? 'https'
    canonicalUrl = `${proto}://${host}/blogs/${decodedSlug}`
  } else {
    let base = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '') || 'http://localhost:3000'
    if (!/^https?:\/\//i.test(base)) base = `https://${base}`
    canonicalUrl = `${base}/blogs/${decodedSlug}`
  }

  const payload = await getPayload({ config: configPromise })
  const blog = await payload.find({
    collection: 'blog',
    where: { slug: { equals: decodedSlug } },
    limit: 1,
    depth: 2,
  })
  const post = blog.docs[0]
  if (!post) notFound()

  const comments = await payload.find({
    collection: 'comments',
    where: {
      and: [
        { blog: { equals: post.id } },
        { approved: { equals: true } },
      ],
    },
  })

  return (
    <section className="bg-primary px-4 py-4 md:px-6 md:py-10 min-[1441px]:px-0">
      <div className="mx-auto mt-20 flex max-w-[1440px] flex-col gap-4 text-white">
        <BlogDetailed detail={post} comment={comments.docs} canonicalUrl={canonicalUrl} />
      </div>
    </section>
  )
}
