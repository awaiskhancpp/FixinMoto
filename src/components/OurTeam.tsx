'use client'
import { useState } from 'react'
import { OurTeamCard } from './OurTeamCard'
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
    profession: 'Lead Technician',
    image: '/person/person-1.webp',
    quote:
      'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
  },
  {
    name: 'Robert Fox',
    profession: 'Customer Service Manager',
    image: '/person/person-2.webp',
    quote:
      'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
  },
  {
    name: 'Emily Davis',
    profession: 'Quality Control Specialist',
    image: '/person/person-3.webp',
    quote:
      'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
  },
  {
    name: 'Albert Flores',
    profession: 'Lead Technician',
    image: '/person/person-1.webp',
    quote:
      'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
  },
  {
    name: 'Robert Fox',
    profession: 'Customer Service Manager',
    image: '/person/person-2.webp',
    quote:
      'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
  },
  {
    name: 'Emily Davis',
    profession: 'Quality Control Specialist',
    image: '/person/person-3.webp',
    quote:
      'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
  },
  {
    name: 'Albert Flores',
    profession: 'Lead Technician',
    image: '/person/person-1.webp',
    quote:
      'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
  },
  {
    name: 'Robert Fox',
    profession: 'Customer Service Manager',
    image: '/person/person-2.webp',
    quote:
      'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
  },
  {
    name: 'Emily Davis',
    profession: 'Quality Control Specialist',
    image: '/person/person-3.webp',
    quote:
      'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
  },
]
export default function OurTeam() {
  const [selected, setSelected] = useState<number | null>(null)

  const toggleButton = (i: number) => {
    setSelected((prev) => (prev === i ? null : i))
  }
  return (
    <section className="bg-primary px-6 py-5 md:px-20 md:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="space-y-3">
          <h2 className=" text-4xl md:text-5xl text-white">Meet Our Team</h2>
          <p className="text-white/50">
            Get to know the skilled individuals behind FixinMoto who combine expertise, passion, and
            a commitment to quality service for every customer.
          </p>
        </div>
        <div className="mt-15 space-x-2 lg:space-x-10">
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
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {MEMBERS.map((m, i) => (
            <OurTeamCard
              key={i}
              name={m.name}
              profession={m.profession}
              image={m.image}
              quote={m.quote}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
