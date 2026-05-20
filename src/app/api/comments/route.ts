import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { firstName, email, content, blogId } = await req.json()

    if (!firstName || !email || !content || !blogId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    const comment = await payload.create({
      collection: 'comments',
      data: {
        firstName,
        email,
        content,
        blog: blogId,
        createdAt: new Date().toISOString(),
      },
      overrideAccess: true,
    })

    return NextResponse.json({ success: true, comment })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to post comment' }, { status: 500 })
  }
}
