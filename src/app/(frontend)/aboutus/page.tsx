import FixinMotoAction from '@/components/aboutus/FixinMotoAction'
import Journey from '@/components/aboutus/Journey'
import OurTeam from '@/components/aboutus/OurTeam'
import WhyChooseFixinMoto from '@/components/aboutus/WhyChooseFixinMoto'
import Achievements from '@/components/shared/Achievements'
import PageHeader from '@/components/shared/PageHeader'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
export default async function aboutUs() {
  let words = ['Passion', 'Expertise']
  const payload = await getPayload({ config: configPromise })
  const people = await payload.find({ collection: 'person' })
  return (
    <>
      <PageHeader
        imageSrc="/serviceBannerImg.webp"
        title="Driven by Passion, Powered by Expertise"
        wordsToHighlight={words}
      />
      <Journey />
      <WhyChooseFixinMoto />
      <Achievements />
      <OurTeam team={people.docs} />
      <FixinMotoAction />
    </>
  )
}
