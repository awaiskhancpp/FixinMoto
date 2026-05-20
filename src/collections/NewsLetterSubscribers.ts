import type { CollectionConfig } from 'payload'

export const NewLetterSubscribers: CollectionConfig = {
  slug: 'newsletter-subscribers',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [
          ({ value }) => {
            if (typeof value === 'string') {
              return value.trim().toLowerCase()
            }
            return value
          },
        ],
      },
    },
  ],
}
