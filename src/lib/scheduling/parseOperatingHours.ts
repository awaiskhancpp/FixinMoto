import { DEFAULT_DAY_MINUTES } from './constants'

export interface MinuteWindow {
  start: number
  end: number
}

export function formatHHMM(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

function parseTimeFragment(raw: string): number | null {
  const trimmed = raw.trim().toUpperCase().replace(/\s+/g, ' ')
  if (!trimmed) return null

  const twelve = trimmed.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/)
  if (twelve) {
    let h = Number(twelve[1])
    const mins = twelve[2] ? Number(twelve[2]) : 0
    const ap = twelve[3]
    if (!Number.isFinite(h) || !Number.isFinite(mins)) return null
    if (ap === 'AM') {
      if (h === 12) h = 0
    } else if (ap === 'PM') {
      if (h !== 12) h += 12
    }
    return h * 60 + mins
  }

  const twentyFour = trimmed.match(/^(\d{1,2}):(\d{2})$/)
  if (twentyFour) {
    const h = Number(twentyFour[1])
    const mins = Number(twentyFour[2])
    if (!Number.isFinite(h) || !Number.isFinite(mins)) return null
    if (h < 0 || h > 23 || mins < 0 || mins > 59) return null
    return h * 60 + mins
  }

  const hourOnly = trimmed.match(/^(\d{1,2})$/)
  if (hourOnly) {
    const h = Number(hourOnly[1])
    if (!Number.isFinite(h) || h < 0 || h > 23) return null
    return h * 60
  }

  return null
}

/** Split "9 AM - 5 PM", "09:00-17:30", etc. → start/end minutes */
export function parseOperatingWindow(text?: string | null): MinuteWindow {
  if (!text || !text.trim()) {
    return { ...DEFAULT_DAY_MINUTES }
  }

  const cleaned = text.replace(/[–—]/g, '-')
  const separators = /\s(?:TO|-|–|—)\s/i
  const parts = cleaned.split(separators)
  let startFrag: string
  let endFrag: string

  if (parts.length >= 2) {
    startFrag = parts[0]
    endFrag = parts.slice(1).join(' ')
  } else {
    const dashParts = cleaned.split(/\s*-\s*/)
    if (dashParts.length >= 2) {
      startFrag = dashParts[0]
      endFrag = dashParts.slice(1).join(' ')
    } else {
      return { ...DEFAULT_DAY_MINUTES }
    }
  }

  const startMin = parseTimeFragment(startFrag)
  const endMin = parseTimeFragment(endFrag)

  if (startMin === null || endMin === null) {
    return { ...DEFAULT_DAY_MINUTES }
  }

  const start = Math.min(startMin, endMin)
  const end = Math.max(startMin, endMin)
  if (end <= start) {
    return { ...DEFAULT_DAY_MINUTES }
  }

  return { start, end }
}
