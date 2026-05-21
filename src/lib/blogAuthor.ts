import type { Blog } from '@/payload-types'

export function blogAuthorLabel(author: Blog['author']): string {
  if (author == null) return ''
  if (typeof author === 'object') return author.email
  return ''
}
