import Journey from '@/components/aboutus/Journey'
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
    </>
  )
}
