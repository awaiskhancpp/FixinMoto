'use client'
import dynamic from 'next/dynamic'
interface MapClientProps {
  center?: { lat: number; lon: number }
}
export default function MapClient({ center }: MapClientProps) {
  const Map = dynamic(() => import('@/components/Map'), { ssr: false })
  return <Map center={center} />
}
