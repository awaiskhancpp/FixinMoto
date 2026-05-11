import PageHeader from '@/components/shared/PageHeader'
import OurTeam from '@/components/OurTeam'
import TrustedPartners from '@/components/ourTeam/TrustedPartners'
import PromoCTA from '@/components/ourTeam/PromoCTA'
export default function () {
  const words = ['Passionate', 'Service']
  return (
    <>
      <PageHeader
        title="Passionate Experts at Your Service"
        wordsToHighlight={words}
        imageSrc="/ourTeamTitleImg.png"
      />
      <OurTeam />
      <TrustedPartners />
      <PromoCTA />
    </>
  )
}
