import type { CollectionConfig } from 'payload'

export const ServiceBooking: CollectionConfig = {
  slug: 'service-booking',
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
      validate: (value) => {
        if (!value) return true

        const selectedDate = new Date(value)
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        const maxDate = new Date()
        maxDate.setDate(maxDate.getDate() + 14)

        if (selectedDate < tomorrow) {
          return 'Date must be tomorrow or later'
        }
        if (selectedDate > maxDate) {
          return 'Date must be within 2 weeks'
        }
        return true
      },
    },
    {
      name: 'time',
      type: 'text',
      required: true,
      validate: (value: any) => {
        if (!value) return true

        const validTimes = [
          '08:00',
          '08:30',
          '09:00',
          '09:30',
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '13:00',
          '13:30',
          '14:00',
          '14:30',
          '15:00',
          '15:30',
          '16:00',
          '16:30',
          '17:00',
          '17:30',
          '18:00',
          '18:30',
          '19:00',
          '19:30',
          '20:00',
        ]

        if (!validTimes.includes(value)) {
          return 'Invalid time slot'
        }
        return true
      },
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
      async ({ data }) => {
        const payload = data?.req?.payload
        if (!payload || !data.date) return data

        const existingBookings = await payload.find({
          collection: 'service-booking',
          where: {
            date: { equals: data.date },
            bookingStatus: { not_equals: 'cancelled' },
          },
        })

        if (existingBookings.totalDocs >= 5) {
          throw new Error('Maximum 5 appointments allowed per day. This date is fully booked.')
        }

        return data
      },
    ],
  },
}
