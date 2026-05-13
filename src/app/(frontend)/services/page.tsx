import CallToAction from '@/components/CallToAction'
import ServicePageCard from '@/components/ServicePageCard'
import Achievements from '@/components/shared/Achievements'
import PageHeader from '@/components/shared/PageHeader'
import { SERVICES_PAGE_ITEMS } from '@/data/servicesPage'

export default function ServicesPage() {
  const words = ['Expert', 'for', 'Every', 'Need']
  return (
    <>
      <PageHeader
        imageSrc="/serviceBannerImg.webp"
        title="Expert Automotive Care for Every Need"
        wordsToHighlight={words}
      />
      <Achievements />
      <div className="bg-[#222222] px-4 py-10 md:px-10 lg:px-15 xl:px-20 md:py-10 lg:py-20">
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-x-[18px] gap-y-[19px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES_PAGE_ITEMS.map((service, i) => (
            <ServicePageCard
              key={i}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
      <CallToAction />
    </>
  )
}
