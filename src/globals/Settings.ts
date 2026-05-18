import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    { name: 'contactEmail', type: 'email', label: 'Email' },
    { name: 'phone', type: 'text', label: 'Contact' },
    { name: 'address', type: 'text', label: 'Address' },
    { name: 'website', type: 'text', label: 'Website Link' },
    {
      name: 'serviceHours',
      type: 'group',
      fields: [
        { name: 'weekDays', type: 'text', label: 'Monday To Friday Hours' },
        { name: 'weekEnds', type: 'text', label: 'Saturday & Sunday Hours' },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
          ],
        },
        {
          name: 'url',
          type: 'text',
        },
        {
          name: 'SocialLogo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
