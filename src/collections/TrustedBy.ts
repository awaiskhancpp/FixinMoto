import type { CollectionConfig } from 'payload'

export const TrustedBy: CollectionConfig = {
  slug: 'trustedBy',
  fields: [{ name: 'Logo', type: 'upload', relationTo: 'media', required: true }],
}
