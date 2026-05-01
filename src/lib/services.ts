export async function getServices() {
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
  console.log(data)
  return data.docs
}
