'use client'
import { HeadingGrid } from './HeadingGrid'
import { LocationForm } from './LocationForm'
import Map from './Map'

export default function CoverageArea() {
  const word = ['Near', 'You']
  return (
    <section className="w-full bg-primary pb-10 md:space-y-7 space-y-4">
      <HeadingGrid
        pageDescription="Whether you’re near or far, our expert services are just around the corner."
        pageTitle="FixinMoto Near You Quality, Convenience, and Expertise"
        pageName="CoverageArea"
        wordsToHighlight={word}
      />
      <div className="relative h-[300px] flex md:items-center ">
        <Map />
        <div className="absolute inset-0 z-[500] pl-5 pt-10 md:pl-20">
          <LocationForm />
        </div>
      </div>
    </section>
  )
}
