import ContentForm from '@/components/blogs/ContentForm'
import { Tags } from '@/components/Tags'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import BlogDetailed from '@/components/blogs/BlogDetailed'

const socials = [
  { src: '/social/twitter.png', alt: 'twitter' },
  { src: '/social/insta.png', alt: 'instagram' },
  { src: '/social/facebook.png', alt: 'facebook' },
  { src: '/social/linkdin.png', alt: 'linkedin' },
]

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config: configPromise })
  const blog = await payload.find({
    collection: 'blog',
  })
  return (
    <section className="px-4 py-4 md:px-6 bg-primary min-[1441px]:px-0  md:py-10 ">
      <div className="text-white max-w-[1440px] bg-primary mx-auto flex flex-col mt-20 gap-4">
        <BlogDetailed detail={blog.docs[0]} />
        <ContentForm />
      </div>
    </section>
  )
}
{
  /* <h2 className="mt-2 lg:text-5xl text-4xl font-bold">
          The Rise of Electric Vehicles (EVs) and What It Means for the Future of Driving
        </h2>
        <p className="text-white/49">
          The automotive world is undergoing a revolutionary transformation, and at the center of it
          all is the rise of Electric Vehicles (EVs). With growing environmental concerns,
          technological advancements, and shifting consumer preferences, electric cars are fast
          becoming a mainstream option. But what does this shift mean for the future of driving, and
          how will it change the way we think about cars?
        </p>
        <h3 className="text-2xl ">Why Are EVs Gaining Popularity?</h3>
        <div className="space-y-6">
          {DETAILS.map((d, i) => (
            <div key={i} className="text-white/50 gap-2">
              <h4 className="">
                {d.no}. {d.title}
              </h4>
              <p className="">{d.desc}</p>
            </div>
          ))}
        </div> */
}
