import type { CollectionConfig } from 'payload'

export const Testimonial: CollectionConfig = {
  slug: 'testimonial',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
    },
    {
      name: 'clientImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Uncheck to hide this testimonial',
      },
    },
  ],
}
