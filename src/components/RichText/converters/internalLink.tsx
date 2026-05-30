import type { SerializedLinkNode } from '@payloadcms/richtext-lexical'

export const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const doc = linkNode.fields.doc
  if (!doc || typeof doc.value !== 'object' || doc.value === null) {
    return '/'
  }
  const slug = 'slug' in doc.value ? String(doc.value.slug ?? '') : ''
  if (doc.relationTo === 'blog') return `/blogs/${slug}`
  return `/${doc.relationTo}/${slug}`
}
