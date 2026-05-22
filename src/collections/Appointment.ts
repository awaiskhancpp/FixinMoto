import { CollectionConfig } from 'payload'

import { assertBookingSlotAllowed } from '@/lib/scheduling'

export const Appointment: CollectionConfig = {
  slug: 'appointment',
  fields: [
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'carMake', type: 'relationship', relationTo: 'car-make', required: true },
    { name: 'carModel', type: 'relationship', relationTo: 'car-model', required: true },
    { name: 'carYear', type: 'number', required: true },
    { name: 'licencePlate', type: 'text', required: true },
    { name: 'vin', type: 'text' },
    { name: 'date', type: 'text', required: true },
    { name: 'time', type: 'text', required: true },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'location',
      required: true,
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'mainService',
      type: 'relationship',
      relationTo: 'main-service',
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data, req, operation, originalDoc }) => {
        if (!req.payload || data == null) return data

        const dateVal = typeof data.date === 'string' ? data.date : undefined
        const timeVal = typeof data.time === 'string' ? data.time : undefined
        if (!dateVal?.trim() || !timeVal?.trim()) return data

        const settings = await req.payload.findGlobal({
          slug: 'settings',
          depth: 0,
          overrideAccess: true,
        })

        const ignoreAppointment =
          operation === 'update' && originalDoc && 'id' in originalDoc ? originalDoc.id : undefined

        const { dateKey, timeHHmm } = await assertBookingSlotAllowed(
          req.payload,
          settings as { serviceHours?: { weekDays?: string | null; weekEnds?: string | null } },
          dateVal,
          timeVal,
          ignoreAppointment !== undefined
            ? { ignoreAppointmentId: ignoreAppointment as string | number }
            : undefined,
        )

        data.date = dateKey
        data.time = timeHHmm

        return data
      },
    ],
  },
}
