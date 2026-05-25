import type { CollectionConfig } from 'payload'

export const ServicePackage: CollectionConfig = {
  slug: 'service-package',
  access: { read: () => true },
  fields: [
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      required: true,
      hasMany: true,
    },
    { name: 'packageName', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'price', type: 'number' },
    { name: 'included', type: 'array', fields: [{ name: 'prop', type: 'text' }], required: true },
  ],
}
