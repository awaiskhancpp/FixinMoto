import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (!/^[A-Z0-9]{2,8}$/.test(body.licencePlate.replace(/[\s\-]/g, ''))) {
      return NextResponse.json({ error: 'Invalid license plate' }, { status: 400 })
    }

    const appointment = await payload.create({
      collection: 'appointment',
      data: body,
      overrideAccess: true,
    })

    return NextResponse.json({ success: true, appointment })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
