import React from 'react'
import './styles.css'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import Navbar from '@/components/Navbar'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChatBot from '@/components/shared/ChatBot'
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
  const toastClass = (type: any) => {
    const base = '!rounded-xl !shadow-lg !p-4'
    const types: Record<string, string> = {
      success: `${base} !bg-green-500 !text-white`,
      error: `${base} !bg-red-500 !text-white`,
      warning: `${base} !bg-yellow-500 !text-white`,
      info: `${base} !bg-blue-500 !text-white`,
    }
    return types[type] || base
  }

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar services={serviceTitles.docs} data={settings} />
        <main className="relative">
          {children}
          <ChatBot />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName={(context) => toastClass(context?.type)}
            style={{ top: '110px' }}
          />
        </main>
        <Footer data={settings} />
      </body>
    </html>
  )
}
