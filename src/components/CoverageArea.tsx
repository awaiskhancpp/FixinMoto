'use client'

import Map from './MapClient'
import { HeadingGrid } from './HeadingGrid'
import { LocationForm } from './LocationForm'
import { useState, useRef } from 'react'

export default function CoverageArea() {
  const word = ['Near', 'You']
  const [center, setCenter] = useState({ lat: 40.73061, lon: -73.935242 })
  const mapRef = useRef<HTMLDivElement>(null)

  const handleLocationChange = (coords: { lat: number; lon: number }) => {
    setCenter(coords)
    mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="w-full bg-primary md:space-y-7 space-y-4">
      <div className="px-4 md:px-6 min-[1441px]:px-0 lg:py-10 py-4">
        <div className="mx-auto max-w-[1440px]">
          <HeadingGrid
            pageDescription="Whether you're near or far, our expert services are just around the corner."
            pageTitle="FixinMoto Near You Quality, Convenience, and Expertise"
            pageName="CoverageArea"
            wordsToHighlight={word}
          />
        </div>
      </div>

      <div className="flex flex-col md:block">
        <div ref={mapRef} className="h-[300px] md:h-[400px] w-full md:relative">
          <Map center={center} />

          <div className="hidden md:flex absolute inset-0 items-center justify-center px-4 z-[400]">
            <div className="w-full max-w-[1440px]">
              <LocationForm onLocationChange={handleLocationChange} />
            </div>
          </div>
        </div>

        <div className="flex md:hidden justify-center px-4 py-6 bg-primary">
          <LocationForm onLocationChange={handleLocationChange} />
        </div>
      </div>
    </section>
  )
}
