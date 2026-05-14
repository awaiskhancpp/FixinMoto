'use client'
import Image from 'next/image'
import { useState } from 'react'
interface ServiceCardProps {
  price: number
  name: string
  desc: string
  pros: string[]
  featured?: boolean
}
export default function ServiceCard({ price, name, desc, pros, featured }: ServiceCardProps) {
  const [onHover, setOnHover] = useState(false)
  return (
    <div
      className={`w-full h-full rounded-[15px] transition-colors py-4 px-2 duration-300 border border-secondary overflow-hidden text-white
        ${featured ? 'bg-secondary md:bg-transparent' : ''}
        hover:bg-secondary`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="px-6 py-2">
        <h2
          className={`font-bold text-3xl text-secondary ${featured ? 'text-white' : 'text-secondary'}`}
        >
          ${price}
        </h2>
        <h3 className="font-bold text-2xl pt-2">{name}</h3>
        <h5 className="text-white/70 pb-1 pt-2">{desc}</h5>
        <div className="mt-2 flex flex-col gap-2 ">
          {pros.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <Image
                src={`${onHover || featured ? '/check_white.png' : '/check_circle.png'}`}
                alt="..."
                width={18}
                height={18}
                className="shrink-0"
              />
              <p key={i} className="leading-tight text-sm text-white/50">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
