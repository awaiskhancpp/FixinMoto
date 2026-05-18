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
    {
      name: 'highlightedWords',
      type: 'array',
      label: 'Highlighted Words',
      fields: [{ name: 'word', type: 'text' }],
    },
    { name: 'serviceDescription', type: 'text' },
    {
      name: 'serviceDetail',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
      }),
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
  ],
}
