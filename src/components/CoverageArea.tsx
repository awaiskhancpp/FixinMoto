'use client'

import Map from './MapClient'
import { HeadingGrid } from './HeadingGrid'
import { LocationForm } from './LocationForm'
import { useState } from 'react'

export default function CoverageArea() {
  const word = ['Near', 'You']
  const [center, setCenter] = useState({ lat: 51.5074, lon: -0.1278 })
  return (
    <section className="w-full bg-primary md:space-y-7 space-y-4">
      <div className="px-4 md:px-6 min-[1441px]:px-0 lg:py-10  py-4">
        <div className="mx-auto max-w-[1440px] ">
          <HeadingGrid
            pageDescription="Whether you’re near or far, our expert services are just around the corner."
            pageTitle="FixinMoto Near You Quality, Convenience, and Expertise"
            pageName="CoverageArea"
            wordsToHighlight={word}
          />
        </div>
      </div>
      <div className="relative h-[400px] w-full ">
        <Map center={center} />
        <div className="absolute inset-0 z-[500] flex items-center justify-center px-4 md:px-6 min-[1441px]:px-0 md:py-10 py-6">
          <div className="w-full md:mx-auto max-w-[1440px] ">
            <LocationForm onLocationChange={setCenter} />
          </div>
        </div>
      </div>
    </section>
  )
}
