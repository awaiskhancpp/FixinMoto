import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import HeroSection from '@/components/HeroSection'
import CallToAction from '@/components/CallToAction'
import CoverageArea from '@/components/CoverageArea'
import Service from '@/components/services/Service'
import WhyChooseUS from '@/components/WhyChooseUs'
import ServiceProcess from '@/components/ServiceProcess'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import configPromise from '@payload-config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const hero = await payload.findGlobal({ slug: 'homepage' })
  const testimonials = await payload.find({
    collection: 'testimonial',
  })
  const serviceCard = await payload.find({
    collection: 'services',
    limit: 4,
  })
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <div>
        <HeroSection data={hero} />
        <Service card={serviceCard.docs} />
        <WhyChooseUS />
        <ServiceProcess />
        <Testimonials data={testimonials.docs} />
        <Blog />
        <CoverageArea />
        <CallToAction />
      </div>
    </>
  )
}
