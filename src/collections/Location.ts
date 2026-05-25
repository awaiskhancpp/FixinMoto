import { CollectionConfig } from 'payload'
export const Location: CollectionConfig = {
  slug: 'location',
  access: { read: () => true },
  fields: [{ name: 'name', type: 'text', required: true }],
}
