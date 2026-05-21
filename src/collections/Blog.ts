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

    { name: 'author', type: 'relationship', relationTo: 'users' },
    { name: 'bannerImg', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'social',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
          ],
        },
        {
          name: 'forwardTo',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'comments',
      type: 'relationship',
      relationTo: 'comments',
      hasMany: true,
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
    { name: 'slug', type: 'text', unique: true, required: true },
  ],
  hooks: {
    afterDelete: [
      async ({ req, id }) => {
        await req.payload.delete({
          collection: 'comments',
          where: {
            blog: {
              equals: id,
            },
          },
          overrideAccess: true,
        })
      },
    ],
  },
}
