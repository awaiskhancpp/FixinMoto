export async function getLonLat(city: String) {
  if (city) {
    await fetch(
      'https://api.geoapify.com/v1/geocode/search?text=${city}&apiKey=${process.env.GEOCODINGAPIKEY}',
    ).then((response) => {
      console.log(response)
      response.json()
    })
  }
  return 'please input city'
}
