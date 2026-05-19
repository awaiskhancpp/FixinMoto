import PageHeader from '@/components/shared/PageHeader'
import OurTeam from '@/components/ourTeam/OurTeam'
import TrustedPartners from '@/components/ourTeam/TrustedPartners'
import PromoCTA from '@/components/ourTeam/PromoCTA'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export default async function () {
  const words = ['Passionate', 'Service']
  const payload = await getPayload({ config: configPromise })
  const trustedBy = await payload.find({
    collection: 'trustedBy',
  })
  const person = await payload.find({ collection: 'person' })
  return (
    <>
      <PageHeader
        title="Passionate Experts at Your Service"
        wordsToHighlight={words}
        imageSrc="/ourTeamTitleImg.png"
      />
      <OurTeam team={person.docs} />
      <TrustedPartners trustedBy={trustedBy.docs} />
      <PromoCTA />
    </>
  )
}
