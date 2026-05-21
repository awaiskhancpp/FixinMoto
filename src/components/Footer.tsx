'use client'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react'
import type { Setting as FooterType } from '@/payload-types'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface FooterProps {
  data: FooterType
}

export default function Footer({ data }: FooterProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    try {
      setIsSubmitting(true)
      const response = await fetch('/api/newsletter-subscribers', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      if (response.status === 409) {
        toast.info('This email is already subscribed')
        setEmail('')
        return
      }
      if (response.ok) {
        setEmail('')
        toast.success('Thank You for Subscribing!')
        return
      }

      const errorMsg = data?.errors?.[0]?.message || data?.message || 'Subscription failed'
      toast.error(errorMsg)
    } catch (e) {
      console.error('Error:', e)
      toast.error('Something went wrong! Please try again')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <footer className="w-full bg-primary py-4 px-4 md:px-6 min-[1441px]:px-0 gap-y-0">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-14 text-white">
        <div className="lg:col-span-3 pt-4 order-2 lg:order-1">
          <Image
            src={
              typeof data.logo === 'object'
                ? data.logo?.url || '/logonavbar.png'
                : '/logonavbar.png'
            }
            width={140}
            height={42}
            alt="footerlogo"
          />
          <div className="lg:py-4 space-y-2 mt-3">
            <a
              href={`https://maps.google.com/?q=${data.address || ''}`}
              target="_blank"
              className="flex"
            >
              <MapPin className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">{data.address}</p>
            </a>
            <a href={`tel:${data.phone}`} className="flex">
              <Phone className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">{data.phone}</p>
            </a>
            {data?.contactEmail && (
              <a
                href={`mailto:${data.contactEmail}`}
                target="_top"
                className="flex transition-colors cursor-pointer"
              >
                <Mail className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
                <p className="text-white/50">{data.contactEmail}</p>
              </a>
            )}
            <a
              href={`${data.website?.startsWith('http') ? data.website : `https://${data.website}`}`}
              className="flex"
            >
              <Globe className="text-red-500 shrink-0 w-4 h-4 mt-0.5 mr-1" />
              <p className="text-white/50">{data.website}</p>
            </a>
          </div>
        </div>
        <div className="lg:col-span-3 lg:py-5 order-3 lg:order-2">
          <h3 className="text-2xl font-medium">Opening Hours</h3>
          <div className="space-y-2 mt-7">
            <p className="text-white/50">Mon-Fri : {data.serviceHours?.weekDays}</p>
            <p className="text-white/50">Sat-Sun: {data.serviceHours?.weekEnds}</p>
          </div>
        </div>
        <div className="lg:col-span-3  order-4 lg:order-3">
          <div className="grid">
            <h3 className="text-2xl font-medium lg:mt-5 pb-2">Quick Links</h3>
            <div className="space-y-2 mt-4 grid">
              <a href="aboutus" className="text-white/50 hover:text-white">
                About us
              </a>
              <a href="/services" className="text-white/50 hover:text-white">
                Out Services
              </a>
              <a href="/appointment" className="text-white/50 hover:text-white">
                Appointment
              </a>
              <a href="/blogs" className="text-white/50 hover:text-white">
                Blogs
              </a>
              <a href="/contact" className="text-white/50 hover:text-white">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 order-1 lg:order-4">
          <div className="grid-cols-1">
            <h3 className="font-medium pt-6">Subscribe to Our Newsletter</h3>
            <div className="space-y-5 mt-3">
              <p className="text-white/50">
                Sign up for our newsletter to receive exclusive promotions, news, and tips straight
                to your inbox.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Email Address"
                className="w-full border border-white/50 rounded-lg px-3 py-2.5 bg-transparent text-white/50 placeholder:text-white/50"
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="
                bg-secondary
                rounded-lg
                px-8
                py-[15px]
                text-white
                text-sm
                font-medium
                shadow-[0px_4px_12px_rgba(34,34,34,0.1)]
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0px_8px_24px_rgba(34,34,34,0.2)]
                active:scale-[0.97]
                disabled:cursor-not-allowed
                disabled:opacity-70
                disabled:hover:scale-100
                min-w-[140px]
              "
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/50 mt-10" />
      <div className="text-center text-white/50 text-sm py-8">
        Copyright © {new Date().getFullYear()} FixinMoto. All rights reserved.
      </div>
    </footer>
  )
}
