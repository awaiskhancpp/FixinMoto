'use client'
import Image from 'next/image'
import { useState } from 'react'
interface ServiceCardProps {
  price: number
  name: string
  desc: string
  pros: string[]
}
export default function ServiceCard({ price, name, desc, pros }: ServiceCardProps) {
  const [onHover, setOnHover] = useState(false)
  return (
    <div
      className="w-full h-full rounded-[15px] transition-colors duration-300 hover:bg-secondary border border-secondary overflow-hidden text-white"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="px-6 py-2">
        <h2 className="font-bold text-3xl">${price}</h2>
        <h3 className="font-bold text-2xl">{name}</h3>
        <h5 className="text-white/70">{desc}</h5>
        <div className="mt-2 grid grid-cols-2 gap-1">
          {pros.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <Image
                src={`${onHover ? '/check_white.png' : '/check_circle.png'}`}
                alt="..."
                width={18}
                height={18}
                className="shrink-0"
              />
              <p key={i} className="leading-tight text-xs text-white/50">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
