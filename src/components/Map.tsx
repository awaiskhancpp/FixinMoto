'use client'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

interface MapProps {
  center?: { lat: number; lon: number }
}

function MapUpdater({ center }: MapProps) {
  const map = useMap()

  useEffect(() => {
    if (center) {
      map.setView([center.lat, center.lon], 13)
    }
  }, [center, map])

  return null
}

export default function Map({ center = { lat: 51.505, lon: -0.09 } }: MapProps) {
  return (
    <MapContainer
      center={[center.lat, center.lon]}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url={`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFYKEY}`}
      />
      <Marker position={[center.lat, center.lon]} />
      <MapUpdater center={center} />
    </MapContainer>
  )
}
