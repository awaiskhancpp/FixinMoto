import { Clock, User } from 'lucide-react'
import Image from 'next/image'
import type { Blog } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Tags } from '../Tags'
interface blogProps {
  detail: Blog
}
export default function BlogDetailed({ detail }: blogProps) {
  console.log(detail?.social)
  return (
    <>
      <div className="relative w-full md:h-[523px] h-[350px]">
        <Image
          src={
            typeof detail?.bannerImg === 'object' && detail.bannerImg?.url
              ? detail.bannerImg.url
              : ''
          }
          fill
          alt="..."
          className="object-cover rounded-[15px]"
        />
      </div>
      <div className="flex flex-row px-[14px] opacity-50 ">
        <div className="flex gap-2 w-32">
          <Clock className="size-4 shrink-0" strokeWidth={1.5} />
          <time className="text-xs font-normal ">{detail?.datePublished}</time>
        </div>
        <div className="flex gap-2 w-32">
          <User className="size-4 shrink-0" strokeWidth={1.5} />
          <span className="text-xs font-normal ">{detail?.author}</span>
        </div>
      </div>
      <div>
        <RichText data={detail?.blogDetail} />
      </div>
      <div className="flex flex-col gap-2 py-20">
        <h3 className="text-lg font-medium">Share</h3>
        <div className="flex gap-2">
          {detail.social?.map((s, i) => (
            <a
              key={i}
              href={`/${s.forwardTo}`}
              className="bg-secondary rounded-md p-2 flex items-center justify-center cursor-pointer"
            >
              <Image
                src={typeof s.logo === 'object' ? s.logo?.url || '' : ''}
                alt={typeof s.logo === 'object' ? s.logo?.alt : ''}
                width={18}
                height={18}
              />
            </a>
          ))}
        </div>
      </div>
      <Tags tag={detail.tags} />

      {/* <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5 py-4">
        <div className="relative h-[367px]">
          <Image src="/oil_and_fluid1.jpg" fill alt="..." className="rounded-[15px]" />
        </div>

        <div className="relative h-[367px]">
          <Image src="/oil_and_fluid2.jpg" fill alt="..." className="rounded-[15px]" />
        </div>
      </div>
      <h3 className="text-2xl ">The Future of Electric Vehicles</h3>
      <p className="text-white/50 text-lg">
        As electric vehicle adoption continues to grow, it’s clear that the future of driving will
        look very different. Here are some key trends to watch:
      </p>

      <h3 className="text-2xl ">Conclusion</h3>
      <p className="text-white/50">
        The rise of electric vehicles represents more than just a trend – it’s a fundamental shift
        in how we think about driving and our impact on the planet. As technology advances and
        consumer demand grows, the future of electric vehicles looks brighter than ever. EVs are no
        longer a niche market for eco-conscious buyers – they’re becoming the mainstream choice for
        those looking to save money, reduce their environmental footprint, and embrace a new era of
        driving.
      </p>
      <p className="text-white/50 mt-4">
        The road ahead is electric, and it’s an exciting journey for drivers, manufacturers, and the
        planet alike.
      </p> */}
    </>
  )
}
{
  /* <div>
        <div className="space-y-6">
          {EV.map((d, i) => (
            <div key={i} className="text-white/50 gap-2">
              <h4 className="">
                {d.no}. {d.title}
              </h4>
              <p className="">{d.desc}</p>
            </div>
          ))}
        </div>
      </div> */
}
