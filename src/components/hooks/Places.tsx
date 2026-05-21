'use client'
import { useState, useCallback } from 'react'
export function useCitiesSearch(state: string) {
  const [cities, setCities] = useState<{ id: string; name: string }[]>([])

  const searchCities = useCallback(
    async (input: string) => {
      if (!input || !state) return
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}%20${state}&apiKey=${process.env.NEXT_PUBLIC_GEOCODINGAPIKEY}&type=city`,
      )
      const data = await response.json()
      const formattedCities = data.features.map((f: any) => ({
        id: f.properties.place_id,
        name: f.properties.city || f.properties.address_line1 || f.properties.formatted,
      }))
      setCities(formattedCities)
    },
    [state],
  )
  return { cities, searchCities }
}
