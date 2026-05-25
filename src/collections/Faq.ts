import type { CollectionConfig } from 'payload'

export const Faq: CollectionConfig = {
  slug: 'faq',
  access: { read: () => true },
  fields: [
    { name: 'question', type: 'text' },
    { name: 'answer', type: 'text' },
  ],
}
