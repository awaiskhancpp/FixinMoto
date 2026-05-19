import { CollectionConfig } from 'payload'
export const CTA: CollectionConfig = {
  slug: 'cta',
  fields: [
    { name: 'ctaHeading', type: 'text', required: true },
    { name: 'ctaText', type: 'text', required: true },
    { name: 'ctaImage', type: 'upload', relationTo: 'media', required: true },
  ],
}
