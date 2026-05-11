import ServicePackage from '@/components/serviceDetails/ServicePackages'
import ServiceOverview from '@/components/serviceDetails/ServiceOverview'
import PageHeader from '@/components/shared/PageHeader'
import ServiceFAQ from '@/components/serviceDetails/ServiceFAQ'
import ServiceCTA from '@/components/serviceDetails/ServiceCTA'
export default function ServiceDetails() {
  const words = ['Explore', 'Expert', 'Services']
  return (
    <section className="bg-black">
      <PageHeader
        imageSrc="/oil_and_fluid_main.jpg"
        title="Explore the Details of Our Expert Services"
        wordsToHighlight={words}
      />
      <ServiceOverview />
      <ServicePackage />
      <ServiceFAQ />
      <ServiceCTA />
    </section>
  )
}
