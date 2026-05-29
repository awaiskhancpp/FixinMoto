import type { CollectionConfig } from 'payload'

/**
 * Guest submissions from the Service Coverage landing form.
 */
export const CoverageInquiries: CollectionConfig = {
  slug: 'coverage-inquiries',
  labels: {
    singular: 'Coverage inquiry',
    plural: 'Coverage inquiries',
  },
  admin: {
    defaultColumns: ['email', 'firstName', 'lastName', 'phone', 'createdAt'],
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    {
      name: 'phone',
      type: 'text',
      required: true,
      admin: { description: 'Stored as typed; sanitize digits on client/API if needed.' },
    },
    {
      name: 'addressLine',
      type: 'textarea',
      required: true,
      admin: { description: 'Address or landmark from the coverage form.' },
    },
    {
      name: 'selectedArea',
      type: 'relationship',
      relationTo: 'location',
      hasMany: false,
      admin: { description: 'Optional “Select your area” choice.' },
    },
    {
      name: 'mainServiceInterest',
      type: 'relationship',
      relationTo: 'main-service',
      hasMany: false,
      admin: { description: 'Main service card highlighted on the form.' },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: { description: 'Internal notes (filled in Payload admin).' },
    },
  ],
}
