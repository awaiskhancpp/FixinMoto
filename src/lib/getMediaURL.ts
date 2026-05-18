export function getMediaUrl(media: number | string | { url?: string } | null | undefined) {
  if (typeof media === 'object' && media?.url) {
    return media.url
  }

  return ''
}
