import React from 'react'
import './styles.css'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import Navbar from '@/components/Navbar'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const metadata = {
  description: 'Fixing Moto. Fixing Cars Since 1900',
  title: 'Fixin Moto',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'settings' })
  const serviceTitles = await payload.find({
    collection: 'services',
  })
  const { children } = props

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar services={serviceTitles.docs} data={settings} />
        <main>
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
        <Footer data={settings} />
      </body>
    </html>
  )
}
