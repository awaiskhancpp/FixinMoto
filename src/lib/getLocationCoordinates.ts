export async function getLocationCoorDinates(location: string) {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=${process.env.NEXT_PUBLIC_GEOCODINGAPIKEY}`,
  )
  const data = await res.json()
  if (data.features && data.features.length > 0) {
    const { lat, lon } = data.features[0].properties
    return { lat, lon }
  }
  return null
}
