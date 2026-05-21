import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

    const contact = await payload.create({
      collection: 'contact',
      data: body,
      overrideAccess: true,
    })

    return NextResponse.json({ success: true, contact })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
