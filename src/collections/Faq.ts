import type { CollectionConfig } from 'payload'

export const Faq: CollectionConfig = {
  slug: 'faq',
  fields: [
    { name: 'question', type: 'text' },
    { name: 'answer', type: 'text' },
  ],
}
