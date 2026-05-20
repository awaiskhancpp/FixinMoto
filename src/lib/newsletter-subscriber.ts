import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'
import 'dotenv/config'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 },
      )
    }

    const normalizedEmail = email.trim().toLowerCase()
    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'newsletter-subscribers',
      where: { email: { equals: normalizedEmail } },
      overrideAccess: true,
    })

    if (existing.docs.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 409 },
      )
    }

    const subscriber = await payload.create({
      collection: 'newsletter-subscribers',
      data: { email: normalizedEmail },
      overrideAccess: true,
    })

    await payload.sendEmail({
      to: normalizedEmail,
      subject: 'Welcome to FixinMoto Newsletter',
      html: '<h1>Welcome to FixinMoto</h1><p>Thank you for subscribing!</p>',
    })

    return NextResponse.json({ success: true, subscriber })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
