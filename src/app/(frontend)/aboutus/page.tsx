import FixinMotoAction from '@/components/aboutus/FixinMotoAction'
import Journey from '@/components/aboutus/Journey'
import OurTeam from '@/components/aboutus/OurTeam'
import WhyChooseFixinMoto from '@/components/aboutus/WhyChooseFixinMoto'
import Achievements from '@/components/shared/Achievements'
import PageHeader from '@/components/shared/PageHeader'

export default function aboutUs() {
  let words = ['Passion', 'Expertise']
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
      <OurTeam />
      <FixinMotoAction />
    </>
  )
}
