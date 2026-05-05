import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import CoverageArea from '@/components/CoverageArea'
import Service from '@/components/services/Service'
import WhyChooseUS from '@/components/WhyChooseUs'
import ServiceProcess from '@/components/ServiceProcess'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <div>
        <HeroSection />
        <Service />
        <WhyChooseUS />
        <ServiceProcess />
        <Testimonials />
        <Blog />
        <CoverageArea />
        <CallToAction />
      </div>
    </>
  )
}
