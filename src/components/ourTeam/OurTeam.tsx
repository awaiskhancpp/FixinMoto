'use client'
import { useState } from 'react'
import { OurTeamCard } from '../OurTeamCard'
import type { Person } from '@/payload-types'

interface ourTeamProps {
  team: Person[]
}

export default function OurTeam({ team }: ourTeamProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const profession = ['All', ...new Set(team.map((t) => t.profession))]
  const toggleButton = (profession: string) => {
    setSelected((prev) => (prev === profession ? null : profession))
  }
  return (
    <section className="bg-primary px-4 py-4 md:px-6 min-[1441px]:px-0 md:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="space-y-3">
          <h2 className=" text-4xl md:text-5xl text-white">Meet Our Team</h2>
          <p className="text-white/50">
            Get to know the skilled individuals behind FixinMoto who combine expertise, passion, and
            a commitment to quality service for every customer.
          </p>
        </div>
        <div className="mt-15 mb-2 space-x-2 lg:space-x-6">
          {profession.map((b, i) => (
            <button
              key={i}
              onClick={() => toggleButton(b || '')}
              className={`text-white px-6 py-3  rounded-[15px] ${selected === b ? 'bg-secondary' : 'border border-white'}`}
            >
              {b}
            </button>
          ))}
        </div>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[600px] gap-5">
          {(selected === null || selected === 'All'
            ? team
            : team.filter((m) => m.profession === selected)
          ).map((m, i) => (
            <OurTeamCard
              key={i}
              name={m.name || ''}
              profession={m.profession || ''}
              instagram={m.instagram || ''}
              facebook={m.facebook || ''}
              linkdin={m.linkdin || ''}
              twitter={m.twitter || ''}
              image={typeof m.image === 'object' ? m.image?.url || '' : ''}
              quote={m.quote || ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
