import { CollectionConfig } from 'payload'
export const CarModel: CollectionConfig = {
  slug: 'car-model',
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'make',
      type: 'relationship',
      relationTo: 'car-make',
    },
  ],
}
