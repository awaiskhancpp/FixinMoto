import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { slateEditor } from '@payloadcms/richtext-slate'
import { resendAdapter } from '@payloadcms/email-resend'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Settings } from './globals/Settings'
import { NewLetterSubscribers } from './collections/NewsLetterSubscribers'
import { Homepage } from './globals/Homepage'
import { Testimonial } from './collections/Testimonial'
import { Service } from './collections/Service'
import { ServicePackage } from './collections/ServicePackage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, NewLetterSubscribers, Testimonial, Service, ServicePackage],
  globals: [Settings, Homepage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  email: resendAdapter({
    apiKey: process.env.RESEND_API_KEY || '',
    defaultFromAddress: process.env.RESEND_FROM || '',
    defaultFromName: 'FixinMoto',
  }),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },

      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
