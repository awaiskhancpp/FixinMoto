import type { CollectionConfig } from 'payload'

export const Service: CollectionConfig = {
  slug: 'services',
  auth: false,
  fields: [
    {
      name: 'serviceNumber',
      type: 'number',
      required: true,
    },
    {
      name: 'serviceName',
      type: 'text',
      required: true,
    },
    {
      name: 'serviceIcon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
