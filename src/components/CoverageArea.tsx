'use client'

import dynamic from 'next/dynamic'
import { HeadingGrid } from './HeadingGrid'
import { LocationForm } from './LocationForm'

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <div className="h-full min-h-[400px] w-full bg-[#3a3a3a]" aria-hidden />,
})

export default function CoverageArea() {
  const word = ['Near', 'You']
  return (
    <section className="w-full bg-primary md:space-y-7 space-y-4">
      <div className="md:px-20 md:py-10 px-4 py-4">
        <div className="mx-auto max-w-[1440px] ">
          <HeadingGrid
            pageDescription="Whether you’re near or far, our expert services are just around the corner."
            pageTitle="FixinMoto Near You Quality, Convenience, and Expertise"
            pageName="CoverageArea"
            wordsToHighlight={word}
          />
        </div>
      </div>
      <div className="relative h-[400px] w-full  ">
        <Map />
        <div className="absolute inset-0 z-[500] flex items-center justify-center md:px-20 md:py-10 px-6 py-6">
          <div className="w-full md:mx-auto max-w-[1440px] ">
            <LocationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
