import ServicePackage from '@/components/serviceDetails/ServicePackages'
import ServiceOverview from '@/components/serviceDetails/ServiceOverview'
import PageHeader from '@/components/shared/PageHeader'
import ServiceFAQ from '@/components/serviceDetails/ServiceFAQ'
import ServiceCTA from '@/components/serviceDetails/ServiceCTA'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const service = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
  })
  const servicePackage = await payload.find({
    collection: 'service-package',
    depth: 1,
  })
  const currentService = service.docs[0]
  if (!currentService) {
    notFound()
  }
  return (
    <section className="bg-black">
      <PageHeader
        imageSrc={
          typeof currentService?.backgroundImage === 'object'
            ? currentService.backgroundImage?.url || ''
            : ''
        }
        title={currentService.serviceName}
        wordsToHighlight={(currentService.highlightedWords ?? [])
          .map((item) => item.word)
          .filter((word): word is string => typeof word === 'string')}
      />
      <ServiceOverview content={currentService.serviceDetail} />
      <ServicePackage packages={servicePackage.docs} />
      <ServiceFAQ />
      <ServiceCTA />
    </section>
  )
}
