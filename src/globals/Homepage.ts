import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'heroTitle', type: 'text', label: 'Hero Title' },
    { name: 'heroTagline', type: 'text', label: 'Hero Tagline' },
    {
      name: 'highlightedWords',
      type: 'array',
      label: 'Highlighted Words',
      fields: [{ name: 'word', type: 'text' }],
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media', label: 'Hero Image' },
  ],
}
