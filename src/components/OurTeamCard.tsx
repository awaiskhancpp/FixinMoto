import Image from 'next/image'
interface MemberCardProps {
  name: string
  profession: string
  image: string
  quote: string
}

export const OurTeamCard = ({ name, profession, image, quote }: MemberCardProps) => {
  const socials = [
    { src: '/social/twitter.png', alt: 'twitter' },
    { src: '/social/insta.png', alt: 'instagram' },
    { src: '/social/facebook.png', alt: 'facebook' },
    { src: '/social/linkdin.png', alt: 'linkedin' },
  ]
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[396px]">
        <Image src={image} alt="personImage" fill className="rounded-[15px] S" />
        <div className="flex justify-center absolute -bottom-4 left-0 right-0 gap-2">
          {socials.map((s) => (
            <button
              key={s.alt}
              className="bg-secondary rounded-md p-2 flex items-center justify-center"
            >
              <Image src={s.src} alt={s.alt} width={18} height={18} />
            </button>
          ))}
        </div>
      </div>
      <div className="pt-6 flex flex-col gap-1 w-full">
        <h3 className="text-white text-lg font-bold">{name}</h3>
        <p className="text-white/60 text-sm">{profession}</p>
        <p className="text-white/40 text-xs leading-relaxed pt-1 line-clamp-3">{quote}</p>
      </div>
    </div>
  )
}
