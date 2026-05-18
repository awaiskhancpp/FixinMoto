import { CollectionConfig } from 'payload'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const Blog: CollectionConfig = {
  slug: 'blog',
  fields: [
    {
      name: 'Category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      required: true,
    },
    { name: 'title', type: 'text' },
    { name: 'datePublished', type: 'text' },
    { name: 'author', type: 'text' },
    { name: 'bannerImg', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'social',
      type: 'array',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'forwardTo',
          type: 'text',
          required: true,
        },
      ],
    },
    { name: 'cardImg', type: 'upload', relationTo: 'media' },
    { name: 'tags', type: 'relationship', relationTo: 'tags', hasMany: true },
    {
      name: 'blogDetail',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
      }),
    },
    { name: 'slug', type: 'text' },
  ],
}
