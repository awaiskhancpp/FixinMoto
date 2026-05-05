import Image from 'next/image'

export default function OurTeam() {
  const TESTIMONIALS = [
    {
      name: 'Albert Flores',
      profession: 'Lead Technician',
      image: '/person/person-1.webp',
      quote:
        'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
    },
    {
      name: 'Robert Fox',
      profession: 'Customer Service Manager',
      image: '/person/person-2.webp',
      quote:
        'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
    },
    {
      name: 'Emily Davis',
      profession: 'Quality Control Specialist',
      image: '/person/person-3.webp',
      quote:
        'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
    },
    {
      name: 'Emily Davis',
      profession: 'Quality Control Specialist',
      image: '/person/person-3.webp',
      quote:
        'David oversees the daily operations at FixinMoto, making sure everything runs smoothly from the front desk to the garage.',
    },
  ]

  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex-flex-col text-white md:py-10 md:px-20 px-4 py-4">
            <div className="space-y-3">
              <p className="text-secondary">Driven by Passion, United by Excellence</p>
              <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
                Meet Our Team: Experts Who Care
              </h2>
              <p className="text-white/50">
                At FixinMoto, our team is the backbone of everything we do. From certified
                technicians to customer service professionals, each member is passionate about
                delivering the best automotive care. With years of experience, a commitment to
                ongoing training, and a dedication to customer satisfaction, our experts work
                together to ensure your vehicle receives the highest quality service. Get to know
                the faces behind FixinMoto and see why we’re your trusted automotive partner.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto px-4 py-4 md:px-20 md:py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TESTIMONIALS.map((p, i) => (
              <div key={i}>
                <TeamMemberCard
                  name={p.name}
                  profession={p.profession}
                  image={p.image}
                  quote={p.quote}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
interface MemberCardProps {
  name: string
  profession: string
  image: string
  quote: string
}

const TeamMemberCard = ({ name, profession, image, quote }: MemberCardProps) => {
  const socials = [
    { src: '/social/twitter.png', alt: 'twitter' },
    { src: '/social/insta.png', alt: 'instagram' },
    { src: '/social/facebook.png', alt: 'facebook' },
    { src: '/social/linkdin.png', alt: 'linkedin' },
  ]
  return (
    <div className="flex flex-col w-[75vw] md:w-[276px]">
      <div className="relative">
        <Image src={image} alt="personImage" width={250} height={196} className="rounded-[15px]" />
        <div className="flex justify-center absolute -bottom-4 -left-6 right-0 gap-2">
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
        <p className="text-white/40 text-xs leading-relaxed pt-1">{quote}</p>
      </div>
    </div>
  )
}
