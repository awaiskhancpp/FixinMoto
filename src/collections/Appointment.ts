import { CollectionConfig } from 'payload'
export const Appointment: CollectionConfig = {
  slug: 'appointment',
  fields: [
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'carMake', type: 'relationship', relationTo: 'car-make', required: true },
    { name: 'carModel', type: 'relationship', relationTo: 'car-model', required: true },
    { name: 'carYear', type: 'number', required: true },
    { name: 'licencePlate', type: 'text', required: true },
    { name: 'vin', type: 'text' },
    { name: 'date', type: 'text', required: true },
    { name: 'time', type: 'text', required: true },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'location',
      required: true,
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: true,
    },
    {
      name: 'mainService',
      type: 'relationship',
      relationTo: 'main-service',
      required: true,
    },
  ],
}
