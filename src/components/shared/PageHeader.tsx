import Image from 'next/image'

interface HeaderProps {
  imageSrc: string
  title: string
  wordsToHighlight: string[]
}
export default function PageHeader({ imageSrc, title, wordsToHighlight }: HeaderProps) {
  let titleString = title.split(' ')

  return (
    <>
      <section className="relative flex min-h-[480px] w-full flex-col justify-center items-center ">
        <Image src={imageSrc} alt="..." fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 flex w-full flex-col justify-center items-center px-4 py-4 md:px-10 lg:px-15 xl:px-20 md:py-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <h1 className="mx-auto  text-4xl font-semibold leading-[1.125] text-white md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
              {titleString.map((m, i) =>
                wordsToHighlight.includes(m) ? (
                  <span key={i} className="text-secondary">
                    {m}{' '}
                  </span>
                ) : (
                  <span key={i} className="text-white">
                    {m}{' '}
                  </span>
                ),
              )}
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}
