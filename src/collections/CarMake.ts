import { CollectionConfig } from 'payload'
export const CarMake: CollectionConfig = {
  slug: 'car-make',
  access: { read: () => true },
  fields: [{ name: 'name', type: 'text', required: true }],
}
