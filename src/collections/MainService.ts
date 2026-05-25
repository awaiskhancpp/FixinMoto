import { CollectionConfig } from 'payload'
export const MainService: CollectionConfig = {
  slug: 'main-service',
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'text', required: true },
    { name: 'mainIcon', type: 'upload', relationTo: 'media', required: true },
    { name: 'changedIcon', type: 'upload', relationTo: 'media', required: true },
  ],
}
