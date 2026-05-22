import type { CollectionConfig } from 'payload'

import { assertBookingSlotAllowed } from '@/lib/scheduling'

export const ServiceBooking: CollectionConfig = {
  slug: 'service-booking',
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'contact',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'time',
      type: 'text',
      required: true,
    },
    {
      name: 'service',
      type: 'text',
      required: true,
    },
    {
      name: 'cardTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'cardDescription',
      type: 'textarea',
    },
    {
      name: 'bookingStatus',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data, req, operation, originalDoc }) => {
        if (!req.payload || data == null) return data

        const statusFromMerge =
          typeof data.bookingStatus === 'string'
            ? data.bookingStatus
            : typeof originalDoc?.bookingStatus === 'string'
              ? originalDoc.bookingStatus
              : 'pending'

        if (statusFromMerge === 'cancelled') {
          return data
        }

        if (!data.date || !data.time) {
          return data
        }

        const settings = await req.payload.findGlobal({
          slug: 'settings',
          depth: 0,
          overrideAccess: true,
        })

        const ignoreSb =
          operation === 'update' && originalDoc && 'id' in originalDoc ? originalDoc.id : undefined

        const { dateKey, timeHHmm } = await assertBookingSlotAllowed(
          req.payload,
          settings as { serviceHours?: { weekDays?: string | null; weekEnds?: string | null } },
          data.date as string | Date | undefined,
          data.time as string,
          ignoreSb !== undefined ? { ignoreServiceBookingId: ignoreSb as string | number } : undefined,
        )

        ;(data as { date?: string; time?: string }).date = dateKey
        ;(data as { date?: string; time?: string }).time = timeHHmm

        return data
      },
    ],
  },
}
