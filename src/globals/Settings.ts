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
    { name: 'logo', type: 'upload', relationTo: 'media' },
  ],
}
