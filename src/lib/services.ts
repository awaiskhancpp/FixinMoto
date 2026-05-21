export async function getServices() {
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
  return data.docs
}
