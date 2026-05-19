'use client'
import { useState } from 'react'
import { OurTeamCard } from '../OurTeamCard'
import type { Person } from '@/payload-types'
const ButtonLabels = [
  'All',
  'Brake Repair',
  'Transmission Repair',
  'Suspension Repair',
  'Oil Change',
  'Tune-Ups',
]
const MEMBERS = [
  {
    name: 'Albert Flores',
    profession: 'Brake Repair',
    image: '/person/person-1.webp',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
  },
  {
    name: 'Robert Fox',
    profession: 'Transmission Repair',
    image: '/person/person-2.jpg',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
  },
  {
    name: 'Emily Davis',
    profession: 'Quality Control Specialist',
    image: '/person/person-3.jpg',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
  },
  {
    name: 'Albert Flores',
    profession: 'Suspension Repair',
    image: '/person/person-1.webp',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
  },
  {
    name: 'Robert Fox',
    profession: 'Brake Repair',
    image: '/person/person-2.jpg',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
  },
  {
    name: 'Emily Davis',
    profession: 'Transmission Repair',
    image: '/person/person-4.jpg',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
  },
  {
    name: 'Albert Flores',
    profession: 'Suspension Repair',
    image: '/person/person-1.webp',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
  },
  {
    name: 'Robert Fox',
    profession: 'Oil Change',
    image: '/person/person-2.jpg',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
  },
  {
    name: 'Emily Davis',
    profession: 'Tune-Ups',
    image: '/person/person-3.jpg',
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkdin: '#',
    quote:
      'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
  },
]
interface ourTeamProps {
  team: Person[]
}

export default function OurTeam({ team }: ourTeamProps) {
  const [selected, setSelected] = useState<number | null>(null)
  console.log(team)
  const toggleButton = (i: number) => {
    setSelected((prev) => (prev === i ? null : i))
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
          {ButtonLabels.map((b, i) => (
            <button
              key={i}
              onClick={() => toggleButton(i)}
              className={`text-white px-6 py-3  rounded-[15px] ${selected === i ? 'bg-secondary' : 'border border-white'}`}
            >
              {b}
            </button>
          ))}
        </div>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {(selected === null || selected === 0
            ? team
            : team.filter((m) => m.profession === ButtonLabels[selected])
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
