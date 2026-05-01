'use client'
import dynamic from 'next/dynamic'
export default function MapClient() {
  const Map = dynamic(() => import('@/components/Map'), { ssr: false })
  return <Map />
}
