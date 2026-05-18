import CallToAction from '@/components/CallToAction'
import ServicePageCard from '@/components/ServicePageCard'
import Achievements from '@/components/shared/Achievements'
import PageHeader from '@/components/shared/PageHeader'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise })
  const service = await payload.find({
    collection: 'services',
  })
  const words = ['Expert', 'for', 'Every', 'Need']
  return (
    <>
      <PageHeader
        imageSrc="/serviceBannerImg.webp"
        title="Expert Automotive Care for Every Need"
        wordsToHighlight={words}
      />
      <Achievements />
      <div className="bg-[#222222] px-4 py-10 md:px-6 min-[1441px]:px-0 md:py-10 lg:py-20">
        <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-x-[18px] gap-y-[19px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {service.docs.map((s, i) => (
            <ServicePageCard
              key={i}
              title={s.serviceName}
              description={s.serviceDescription || ''}
              imageSrc={
                typeof s.serviceIcon === 'object' && s.serviceIcon !== null
                  ? s.serviceIcon.url || '/'
                  : '/'
              }
              slug={s.slug}
              services={service.docs.map((s, i) => {
                return s.serviceName
              })}
            />
          ))}
        </div>
      </div>
      <CallToAction />
    </>
  )
}
