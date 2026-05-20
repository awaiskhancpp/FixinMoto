import ServicePackage from '@/components/serviceDetails/ServicePackages'
import ServiceOverview from '@/components/serviceDetails/ServiceOverview'
import PageHeader from '@/components/shared/PageHeader'
import ServiceFAQ from '@/components/serviceDetails/ServiceFAQ'
import ServiceCTA from '@/components/serviceDetails/ServiceCTA'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'

export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const payload = await getPayload({ config: configPromise })
  const service = await payload.find({
    collection: 'services',
    where: { slug: { equals: decodedSlug } },
    limit: 1,
  })
  const faq = await payload.find({
    collection: 'faq',
  })
  const servicePackage = await payload.find({
    collection: 'service-package',
    depth: 1,
  })
  const cta = await payload.find({
    collection: 'cta',
  })
  const currentService = service.docs[0]
  if (!currentService) {
    notFound()
  }
  return (
    <section className="bg-black">
      <PageHeader
        imageSrc={
          typeof currentService?.ImageNo1 === 'object' ? currentService.ImageNo1?.url || '' : ''
        }
        title={'Explore the Details of Our Expert Services'}
        wordsToHighlight={['Explore', 'Expert', 'Services']}
      />
      <ServiceOverview content={currentService} />
      <ServicePackage packages={servicePackage.docs} />
      <ServiceFAQ faqArray={faq.docs} />
      <ServiceCTA cta={cta.docs} />
    </section>
  )
}
