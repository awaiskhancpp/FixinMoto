import { getServices } from '@/lib/services'
import Card from './Card'
interface Card {
  serviceNumber: number
  serviceName: string
  serviceIcon: { url: string; alt: string } | null
  backgroundImage: { url: string; alt: string } | null
}
export const CardClient = async () => {
  const service = await getServices()
  return (
    <>
      {/* <div className="grid grid-cols-12 gap-x-3 justify-items-center space-y-4">
        {service.map((c: Card) => (
          <a href="#" className="sm:col-span-6 lg:col-span-3 col-span-12">
            <Card card={c} />
          </a>
        ))}
      </div> */}
    </>
  )
}
