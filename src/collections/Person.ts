import type { CollectionConfig } from 'payload'

export const Person: CollectionConfig = {
  slug: 'person',
  auth: false,
  access: { read: () => true },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'quote',
      type: 'text',
    },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'profession', type: 'text' },
    { name: 'facebook', type: 'text' },
    { name: 'twitter', type: 'text' },
    { name: 'instagram', type: 'text' },
    { name: 'linkdin', type: 'text' },
  ],
}
