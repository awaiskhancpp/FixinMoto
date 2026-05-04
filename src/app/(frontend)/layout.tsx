import React from 'react'
import './styles.css'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import Navbar from '@/components/Navbar'
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  )
}
