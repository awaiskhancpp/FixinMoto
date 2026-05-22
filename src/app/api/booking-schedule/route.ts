import { NextRequest, NextResponse } from 'next/server'

import configPromise from '@payload-config'
import { bookingDateBounds, computeScheduleForDay } from '@/lib/scheduling'
import { getPayload } from 'payload'

export async function GET(req: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const settings =
      ((await payload.findGlobal({
        slug: 'settings',
        depth: 0,
        overrideAccess: true,
      })) as {
        serviceHours?: { weekDays?: string | null; weekEnds?: string | null }
      }) ?? {}

    const { searchParams } = new URL(req.url)
    const date = searchParams.get('date')

    if (!date) {
      const bounds = bookingDateBounds()
      return NextResponse.json({
        bounds,
        serviceHours: {
          weekDays: settings.serviceHours?.weekDays ?? null,
          weekEnds: settings.serviceHours?.weekEnds ?? null,
        },
      })
    }

    const snapshot = await computeScheduleForDay(payload, settings, date)
    return NextResponse.json(snapshot)
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Failed to load schedule'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
