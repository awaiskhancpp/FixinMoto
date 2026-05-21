import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.create({
      collection: 'newsletter-subscribers',
      data: { email },
    })

    return Response.json({ success: true, id: result.id }, { status: 201 })
  } catch (error: any) {
    if (error?.message?.includes('unique')) {
      return Response.json({ success: false, message: 'EMAIL_ALREADY_EXISTS' }, { status: 409 })
    }

    return Response.json(
      { success: false, error: error?.message || 'Failed to subscribe' },
      { status: 400 },
    )
  }
}
