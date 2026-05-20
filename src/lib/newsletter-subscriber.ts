import { getPayload } from 'payload'
import type { ValidationError } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'
import 'dotenv/config'

function normalizeNewsletterEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const normalized = raw.trim().toLowerCase()
  if (!normalized) return null
  return normalized
}

function isDuplicateEmailError(error: unknown): boolean {
  if (error && typeof error === 'object') {
    const err = error as ValidationError
    if (Array.isArray(err.errors) && err.errors.length > 0) {
      return err.errors.some((e) => {
        const msg = typeof e.message === 'string' ? e.message : ''
        return (
          /unique|duplicate/i.test(msg) ||
          (typeof e.path === 'string' && e.path === 'email') ||
          (Array.isArray(e.path) && e.path.includes('email'))
        )
      })
    }
  }
  const message = error instanceof Error ? error.message : String(error)
  return /unique|duplicate|23505/i.test(message) || message.toLowerCase().includes('already exists')
}

export async function newsletterSubscribePOST(req: Request) {
  try {
    const body = await req.json()
    const email = normalizeNewsletterEmail(body?.email)
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 },
      )
    }

    const payload = await getPayload({
      config,
    })

    const existingEmail = await payload.find({
      collection: 'newsletter-subscribers',
      where: { email: { equals: email } },
      limit: 1,
      overrideAccess: true,
    })

    if (existingEmail.docs.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed', message: 'EMAIL_ALREADY_EXISTS' },
        { status: 409 },
      )
    }

    let subscriber
    try {
      subscriber = await payload.create({
        collection: 'newsletter-subscribers',
        data: {
          email,
        },
        overrideAccess: true,
      })
    } catch (createError) {
      if (isDuplicateEmailError(createError)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Email already subscribed',
            message: 'EMAIL_ALREADY_EXISTS',
          },
          { status: 409 },
        )
      }
      throw createError
    }

    await payload.sendEmail({
      to: email,
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
    const message = error instanceof Error ? error.message : 'Something went wrong'
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 },
    )
  }
}
