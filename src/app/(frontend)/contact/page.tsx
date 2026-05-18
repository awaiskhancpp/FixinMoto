import ContactUs from '@/components/ContactUs'
import Map from '@/components/MapClient'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
export default async function Contact() {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'settings' })
  return (
    <section>
      <ContactUs data={settings} />
      <Map />
    </section>
  )
}
