import { CollectionConfig } from 'payload'
import { checkbox } from 'payload/shared'

export const Comments: CollectionConfig = {
  slug: 'comments',
  fields: [
    {
      name: 'blog',
      type: 'relationship',
      relationTo: 'blog',
      required: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
    },
    {
      name: 'approved',
      type: 'checkbox',
      label: 'Approved by Admin',
      defaultValue: false,
    },
  ],
}
