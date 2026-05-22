import { parseDateKey } from './dateBounds'

export type DayKind = 'weekday' | 'weekend'

export function dayKindFromDateKey(isoDay: string): DayKind | null {
  const dt = parseDateKey(isoDay)
  if (!dt) return null
  const d = dt.getDay()
  if (d === 0 || d === 6) return 'weekend'
  return 'weekday'
}
