import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Service: CollectionConfig = {
  slug: 'services',
  auth: false,
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
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
    { name: 'serviceDescription', type: 'text' },
    {
      name: 'included',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      required: true,
    },
    { name: 'description', type: 'textarea' },
    { name: 'detail', type: 'textarea' },
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
      name: 'ImageNo1',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ImageNo2',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
