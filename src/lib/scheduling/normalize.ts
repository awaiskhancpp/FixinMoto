export function normalizeTimeToken(raw?: string | null): string | null {
  if (raw === undefined || raw === null) return null
  const s = typeof raw === 'string' ? raw.trim() : String(raw).trim()
  if (!s) return null

  const m = s.match(/^(\d{1,2}):(\d{2})(?::\d{2})?/)
  if (m) {
    let h = Number(m[1])
    const min = Number(m[2])
    if (!Number.isFinite(h) || !Number.isFinite(min)) return null
    h = Math.min(23, Math.max(0, h))
    const mm = Math.min(59, Math.max(0, min))
    return `${String(h).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
  }

  return null
}

export function normalizeBookingDateKey(raw?: unknown): string | null {
  if (typeof raw !== 'string' || !raw.trim()) return null
  const s = raw.trim()
  const isoDay = /^(\d{4}-\d{2}-\d{2})/.exec(s)
  if (isoDay) return isoDay[1]
  return null
}
