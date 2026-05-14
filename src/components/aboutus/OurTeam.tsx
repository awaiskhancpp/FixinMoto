'use client'
import { OurTeamCard } from '../OurTeamCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function OurTeam() {
  const [activeCard, setActiveCard] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(1)
  const swiperRef = useRef<any>(null)

  const TESTIMONIALS = [
    {
      name: 'Albert Flores',
      profession: 'Lead Technician',
      image: '/person/person-1.webp',
      facebook: '#',
      twitter: '#',
      linkdin: '#',
      instagram: '#',
      quote:
        'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
    },
    {
      name: 'Robert Fox',
      profession: 'Customer Service Manager',
      image: '/person/person-2.jpg',
      facebook: '#',
      twitter: '#',
      linkdin: '#',
      instagram: '#',
      quote:
        'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
    },
    {
      name: 'Emily Davis',
      profession: 'Quality Control Specialist',
      image: '/person/person-3.jpg',
      facebook: '#',
      twitter: '#',
      linkdin: '#',
      instagram: '#',
      quote:
        'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
    },
    {
      name: 'Emily Davis',
      profession: 'Quality Control Specialist',
      image: '/person/person-4.jpg',
      facebook: '#',
      twitter: '#',
      linkdin: '#',
      instagram: '#',
      quote:
        'David oversees the daily operations at FixinMoto, making sure everything runs smoothly from the front desk to the garage.',
    },
  ]

  const scrollToCard = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }
  }

  return (
    <>
      <section className="bg-primary px-4 py-10 md:px-6 min-[1441px]:px-0 md:py-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex-flex-col text-white mb-10">
            <div className="space-y-3">
              <p className="text-secondary">Driven by Passion, United by Excellensce</p>
              <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
                Meet Our Team: Experts Who Care
              </h2>
              <p className="text-white/50">
                At FixinMoto, our team is the backbone of everything we do. From certified
                technicians to customer service professionals, each member is passionate about
                delivering the best automotive care. With years of experience, a commitment to
                ongoing training, and a dedication to customer satisfaction, our experts work
                together to ensure your vehicle receives the highest quality service. Get to know
                the faces behind FixinMoto and see why we're your trusted automotive partner.
              </p>
            </div>
          </div>

          <div className="xl:hidden mt-10">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              modules={[Autoplay]}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => {
                setActiveCard(swiper.realIndex)
                setVisibleSlides(swiper.params.slidesPerView as number)
              }}
              className="w-full"
            >
              {TESTIMONIALS.map((p, i) => (
                <SwiperSlide key={i}>
                  <OurTeamCard
                    name={p.name}
                    instagram={p.instagram}
                    facebook={p.facebook}
                    twitter={p.twitter}
                    linkdin={p.linkdin}
                    profession={p.profession}
                    image={p.image}
                    quote={p.quote}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center gap-2 mt-4 xl:hidden">
            {Array.from({
              length: Math.ceil(TESTIMONIALS.length / visibleSlides),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className="w-2 h-2 rounded-full transition-colors duration-300"
                style={{ background: i === activeCard ? '#ef4444' : '#6b7280' }}
              />
            ))}
          </div>

          <div className="hidden xl:grid grid-cols-4 gap-3 mt-10">
            {TESTIMONIALS.map((p, i) => (
              <div key={i} className="w-full h-full">
                <OurTeamCard
                  name={p.name}
                  instagram={p.instagram}
                  facebook={p.facebook}
                  twitter={p.twitter}
                  linkdin={p.linkdin}
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
