'use client'

import Map from '@/components/MapClient'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { isValidFormEmail } from '@/lib/validateEmail'
import type { Location, MainService } from '@/payload-types'

interface ServiceCoverageFormProps {
  services: MainService[]
  locations: Location[]
}

function serviceChangedIconUrl(s: MainService): string {
  return typeof s.changedIcon === 'object' && s.changedIcon?.url ? s.changedIcon.url : ''
}
function serviceIconUrl(s: MainService): string {
  return typeof s.mainIcon === 'object' && s.mainIcon?.url ? s.mainIcon.url : ''
}

function serviceSubtitle(s: MainService): string {
  const raw = (s.description || '').trim().replace(/\s+/g, ' ')
  if (!raw) return 'Expert care for your vehicle.'
  return raw.length > 110 ? `${raw.slice(0, 107)}…` : raw
}

const MAP_SECTION_MIN_H =
  'min-h-[clamp(560px,calc(100svh-8rem),900px)] sm:min-h-[min(760px,calc(100svh-6rem))] lg:min-h-[800px]'

export default function ServiceCoverageForm({ services, locations }: ServiceCoverageFormProps) {
  const displayServices = services.slice(0, 3)
  const [activeCard, setActiveCard] = useState<number | null>(displayServices.length > 0 ? 0 : null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [coverageEmail, setCoverageEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [addressLine, setAddressLine] = useState('')
  const [selectedAreaId, setSelectedAreaId] = useState<string>('')

  const validateAndProceed = () => {
    if (!coverageEmail.trim()) {
      toast.error('Please enter your email')
      return false
    }
    if (!isValidFormEmail(coverageEmail)) {
      toast.error('Enter a valid email address')
      return false
    }
    return true
  }

  return (
    <section
      className={`relative isolate mb-10 w-full overflow-x-hidden sm:mb-14 ${MAP_SECTION_MIN_H}`}
    >
      <div className={`absolute inset-0 z-0 bg-neutral-800 ${MAP_SECTION_MIN_H}`}>
        <div
          className={`absolute inset-0 ${MAP_SECTION_MIN_H} [&_.leaflet-container]:!h-full [&_.leaflet-container]:!w-full [&_.leaflet-container]:rounded-none`}
        >
          <Map />
        </div>
      </div>

      <div className="pointer-events-none absolute left-[8%] top-[38%] z-[15] hidden h-24 w-0 border-l-2 border-dashed border-secondary md:left-[12%] md:top-[40%] lg:block" />

      <div
        className={`relative z-20 flex ${MAP_SECTION_MIN_H} flex-col px-4 pb-8 pt-[11rem] sm:px-5 sm:pb-10 sm:pt-[12rem] md:px-8 md:pt-[13rem] lg:px-10 lg:pb-12 min-[1441px]:mx-auto min-[1441px]:max-w-[1440px]`}
      >
        <div className="mt-auto grid w-full max-w-none grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="flex flex-col lg:col-span-6 xl:col-span-5 min-[1340px]:col-span-5">
            <div className="h-full rounded-[15px] bg-primary px-5 py-7 shadow-[0px_28px_64px_rgba(0,0,0,0.35)] sm:px-7 sm:py-8 md:px-8 md:py-9">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  We&apos;ve Got You Covered
                </h2>
                <p className="text-sm leading-relaxed text-white/50 md:text-base">
                  Fast, Reliable Auto Repair and Roadside Assistance, Delivered Right to Your
                  Location Anytime, Anywhere.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="min-h-[48px] w-full rounded-lg border border-neutral-400/40 bg-white px-3 py-3 text-sm text-neutral-900 placeholder:text-neutral-500/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="min-h-[48px] w-full rounded-lg border border-neutral-400/40 bg-white px-3 py-3 text-sm text-neutral-900 placeholder:text-neutral-500/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-neutral-400"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={coverageEmail}
                    onChange={(e) => setCoverageEmail(e.target.value)}
                    className="min-h-[48px] w-full rounded-lg border border-neutral-400/40 bg-white py-3 pl-10 pr-3 text-sm text-neutral-900 placeholder:text-neutral-500/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div className="relative">
                  <Phone
                    className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-neutral-400"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="min-h-[48px] w-full rounded-lg border border-neutral-400/40 bg-white py-3 pl-10 pr-3 text-sm text-neutral-900 placeholder:text-neutral-500/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div className="relative">
                  <MapPin
                    className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-neutral-400"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Location"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    className="min-h-[48px] w-full rounded-lg border border-neutral-400/40 bg-white py-3 pl-10 pr-3 text-sm text-neutral-900 placeholder:text-neutral-500/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div className="relative">
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-neutral-500"
                    aria-hidden
                  />
                  <select
                    value={selectedAreaId}
                    onChange={(e) => setSelectedAreaId(e.target.value)}
                    className="min-h-[48px] w-full appearance-none rounded-lg border border-neutral-400/40 bg-white py-3 pl-3 pr-10 text-sm text-neutral-900 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    aria-label="Select your area"
                  >
                    <option value="">Select Your Area</option>
                    {locations.map((loc) => (
                      <option key={loc.id} value={String(loc.id)}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-white md:text-xl">Services</h3>
                  <ul className="mt-3 flex flex-col gap-3" role="list">
                    {displayServices.map((svc, i) => {
                      const clicked = activeCard === i
                      const iconSrc = clicked ? serviceChangedIconUrl(svc) : serviceIconUrl(svc)
                      return (
                        <li key={svc.id}>
                          <button
                            type="button"
                            onClick={() => setActiveCard(i)}
                            className={`flex w-full min-h-[5.75rem] items-center gap-3 rounded-[15px] border px-3 py-3 text-left shadow-sm transition-colors sm:gap-4 sm:px-4 ${
                              clicked
                                ? 'border-secondary bg-secondary text-white shadow-md'
                                : 'border-secondary/90 bg-primary/95 text-white ring-1 ring-white/10 hover:bg-white/[0.08]'
                            }`}
                          >
                            <span className="relative flex size-[3.75rem] shrink-0 items-center justify-center rounded-lg bg-black/25 sm:size-14">
                              {iconSrc ? (
                                <Image
                                  src={iconSrc}
                                  alt=""
                                  width={52}
                                  height={52}
                                  className="h-[52px] w-[52px] object-contain p-1"
                                />
                              ) : (
                                <span className="text-xs font-semibold">
                                  {svc.title?.slice(0, 2) ?? '?'}
                                </span>
                              )}
                            </span>
                            <span className="min-w-0 flex-1 self-center py-1">
                              <span className="block font-semibold leading-snug">{svc.title}</span>
                              <span
                                className={`mt-1 block text-sm leading-relaxed ${
                                  clicked ? 'text-white/80' : 'text-white/65'
                                }`}
                              >
                                {serviceSubtitle(svc)}
                              </span>
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                  {displayServices.length === 0 ? (
                    <p className="mt-2 text-sm text-white/50">
                      Services will appear here from the CMS.
                    </p>
                  ) : null}
                </div>

                <Link
                  href="/appointment"
                  onClick={(e) => {
                    if (!validateAndProceed()) e.preventDefault()
                  }}
                  className="mt-2 flex min-h-[48px] w-full items-center justify-center rounded-lg bg-secondary px-8 text-sm font-medium text-white transition-opacity hover:opacity-95 sm:mt-4 sm:w-auto sm:self-start sm:min-w-[11rem]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
