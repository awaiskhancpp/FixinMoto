import Image from 'next/image'

interface ServicePageCard {
  title: string
  description: string
  imageSrc: string
}

export default function ServicePageCard({ title, description, imageSrc }: ServicePageCard) {
  return (
    <article className="flex h-full flex-col items-center rounded-[15px] bg-primary px-6 py-16 text-center text-white">
      <div className="flex h-[118px] w-[118px] shrink-0 items-center justify-center">
        <Image src={imageSrc} alt="" width={118} height={118} className="object-contain" />
      </div>
      <h3 className="text-2xl font-medium leading-[1.3333333]">{title}</h3>
      <p className="flex flex-1 flex-col justify-center text-base leading-[1.625] text-white/50">
        {description}
      </p>
      <div className="mt-auto flex w-full flex-col items-center justify-end gap-2.5 pt-2">
        <button
          type="button"
          className="rounded-lg bg-secondary px-8 py-[15px] text-sm font-medium leading-[1.42857] text-white"
        >
          Book Now
        </button>
      </div>
    </article>
  )
}
