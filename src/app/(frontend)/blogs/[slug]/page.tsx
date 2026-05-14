import BlogDetails from '@/components/blogs/BlogDetails'
import { Tags } from '@/components/Tags'
import { Clock, User } from 'lucide-react'
import Image from 'next/image'
const DETAILS = [
  {
    no: 1,
    title: 'Environmental Impact',
    desc: 'One of the primary reasons EVs are gaining traction is their positive environmental impact. Traditional vehicles emit carbon dioxide (CO2) and other greenhouse gases, contributing to air pollution and climate change. EVs, on the other hand, produce zero tailpipe emissions, significantly reducing their carbon footprint. With more cities and governments pushing for cleaner air and reduced emissions, the demand for EVs is expected to rise dramatically.',
  },
  {
    no: 2,
    title: 'Cost Savings on Fuel and Maintenance',
    desc: 'While the initial price of an EV can be higher than that of a traditional car, the long-term savings are significant. Charging an EV is often much cheaper than fueling a gasoline-powered vehicle, and many EV owners find that they save money on fuel costs. Additionally, EVs have fewer moving parts than traditional vehicles, which means lower maintenance costs over time. There are no oil changes, no exhaust systems to worry about, and fewer parts that are prone to wear and tear',
  },
  {
    no: 3,
    title: 'Government Incentives and Regulations',
    desc: 'Many governments are encouraging the adoption of electric vehicles through tax incentives, rebates, and subsidies. Additionally, there are stricter emissions regulations in place, pushing automakers to produce cleaner, more sustainable vehicles. In some regions, governments are also implementing measures like low-emission zones, which favor EVs and make it more difficult for traditional gasoline cars to enter certain areas',
  },
  {
    no: 4,
    title: 'Technological Advancements',
    desc: 'Technological innovation has played a key role in the rise of electric vehicles. The development of more efficient batteries, faster charging infrastructure, and improved driving range have made EVs more appealing to a wider audience. Today’s EVs can offer ranges comparable to those of traditional cars, with some models exceeding 300 miles on a single charge',
  },
  {
    no: 5,
    title: 'Consumer Awareness and Demand',
    desc: 'As awareness of climate change and environmental issues grows, consumers are becoming more conscious of their carbon footprint. Many car buyers are choosing electric vehicles because they align with their values of sustainability and environmental responsibility. Car manufacturers are responding to this demand, expanding their EV offerings and making them more accessible to the average consumer.',
  },
]
const EV = [
  {
    no: 1,
    title: 'Expanding Charging Infrastructure',
    desc: 'One of the main hurdles to widespread EV adoption has been the lack of charging stations. However, governments and private companies are investing heavily in expanding charging networks, making it easier for drivers to charge their vehicles at home, work, or on the go. With the development of ultra-fast charging stations, charging times are expected to decrease, making long road trips in an EV more feasible',
  },
  {
    no: 2,
    title: 'Improved Battery Technology',
    desc: 'Battery technology is expected to improve significantly over the next decade, leading to even longer driving ranges, faster charging times, and lower battery costs. Solid-state batteries, which promise to offer higher energy density and greater safety, are one of the most anticipated developments in EV technology',
  },
  {
    no: 3,
    title: 'Autonomous Electric Vehicles',
    desc: 'The development of autonomous driving technology is closely tied to the future of EVs. Many major automakers, including Tesla and Waymo, are already working on self-driving electric vehicles. These cars will be able to navigate roads with minimal human intervention, offering a new level of convenience and safety.',
  },
  {
    no: 4,
    title: 'More Affordable EVs',
    desc: 'As technology improves and production scales up, the cost of EVs is expected to decrease. Many automakers are already producing affordable electric models, and this trend is likely to continue. This will make EVs accessible to a broader range of consumers, accelerating their adoption',
  },
  {
    no: 5,
    title: 'Sustainability Beyond the Car',
    desc: 'The shift to electric vehicles is part of a broader trend toward sustainability in the automotive industry. From the use of recycled materials in car manufacturing to eco-friendly manufacturing processes, automakers are increasingly focused on reducing the environmental impact of their vehicles from start to finish.',
  },
]
const socials = [
  { src: '/social/twitter.png', alt: 'twitter' },
  { src: '/social/insta.png', alt: 'instagram' },
  { src: '/social/facebook.png', alt: 'facebook' },
  { src: '/social/linkdin.png', alt: 'linkedin' },
]
export default function BlogDetail() {
  return (
    <section className="px-4 py-4 md:px-6 bg-primary min-[1441px]:px-0  md:py-10 ">
      <div className="text-white max-w-[1440px] bg-primary mx-auto flex flex-col mt-20 gap-4">
        <div className="relative w-full md:h-[523px] h-[350px]">
          <Image src="/oil_and_fluid.jpg" fill alt="..." className="object-cover rounded-[15px]" />
        </div>
        <div className="flex flex-row px-[14px] opacity-50 ">
          <div className="flex gap-2 w-32">
            <Clock className="size-4 shrink-0" strokeWidth={1.5} />
            <time className="text-xs font-normal ">Dec 9, 2026</time>
          </div>
          <div className="flex gap-2 w-32">
            <User className="size-4 shrink-0" strokeWidth={1.5} />
            <span className="text-xs font-normal ">Alex Johnson</span>
          </div>
        </div>
        <h2 className="mt-2 lg:text-5xl text-4xl font-bold">
          The Rise of Electric Vehicles (EVs) and What It Means for the Future of Driving
        </h2>
        <p className="text-white/49">
          The automotive world is undergoing a revolutionary transformation, and at the center of it
          all is the rise of Electric Vehicles (EVs). With growing environmental concerns,
          technological advancements, and shifting consumer preferences, electric cars are fast
          becoming a mainstream option. But what does this shift mean for the future of driving, and
          how will it change the way we think about cars?
        </p>
        <h3 className="text-2xl ">Why Are EVs Gaining Popularity?</h3>
        <div className="space-y-6">
          {DETAILS.map((d, i) => (
            <div key={i} className="text-white/50 gap-2">
              <h4 className="">
                {d.no}. {d.title}
              </h4>
              <p className="">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5 py-4">
          <div className="relative h-[367px]">
            <Image src="/oil_and_fluid1.jpg" fill alt="..." className="rounded-[15px]" />
          </div>

          <div className="relative h-[367px]">
            <Image src="/oil_and_fluid2.jpg" fill alt="..." className="rounded-[15px]" />
          </div>
        </div>
        <h3 className="text-2xl ">The Future of Electric Vehicles</h3>
        <p className="text-white/50 text-lg">
          As electric vehicle adoption continues to grow, it’s clear that the future of driving will
          look very different. Here are some key trends to watch:
        </p>
        <div>
          <div className="space-y-6">
            {EV.map((d, i) => (
              <div key={i} className="text-white/50 gap-2">
                <h4 className="">
                  {d.no}. {d.title}
                </h4>
                <p className="">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-2xl ">Conclusion</h3>
        <p className="text-white/50">
          The rise of electric vehicles represents more than just a trend – it’s a fundamental shift
          in how we think about driving and our impact on the planet. As technology advances and
          consumer demand grows, the future of electric vehicles looks brighter than ever. EVs are
          no longer a niche market for eco-conscious buyers – they’re becoming the mainstream choice
          for those looking to save money, reduce their environmental footprint, and embrace a new
          era of driving.
        </p>
        <p className="text-white/50 mt-4">
          The road ahead is electric, and it’s an exciting journey for drivers, manufacturers, and
          the planet alike.
        </p>
        <div className="flex flex-col gap-2 py-20">
          <h3 className="text-lg font-medium">Share</h3>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.alt}
                className="bg-secondary rounded-md p-2 flex items-center justify-center cursor-pointer"
              >
                <Image src={s.src} alt={s.alt} width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
        <Tags />
      </div>
    </section>
  )
}
