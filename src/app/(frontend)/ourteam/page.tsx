import PageHeader from '@/components/shared/PageHeader'
import OurTeam from '@/components/OurTeam'
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
    </>
  )
}
