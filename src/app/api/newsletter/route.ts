import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'
import 'dotenv/config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const payload = await getPayload({
      config,
    })

    const existingEmail = await payload.find({
      collection: 'newsletter-subscribers',
      where: { email: { equals: body.email } },
      overrideAccess: true,
    })

    if (existingEmail.docs.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 409 },
      )
    }

    const subscriber = await payload.create({
      collection: 'newsletter-subscribers',
      data: {
        email: body.email,
      },
      overrideAccess: true,
    })

    await payload.sendEmail({
      to: body.email,
      subject: 'Welcome to FixinMoto Newsletter',
      html: `
        <h1>Welcome to FixinMoto</h1>
        <p>Thank you for subscribing to our newsletter.</p>
      `,
    })

    return NextResponse.json({
      success: true,
      subscriber,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 },
    )
  }
}
