export async function getLocationCoorDinates(location: string) {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=${process.env.GEOCODINGAPIKEY}`,
  )
  console.log(res)
  const data = await res.json()
  console.log(data)
  //   const { lat, lon } = data.features[0].properties
}
