import { BOOKING_FIRST_OFFSET_DAYS, BOOKING_RANGE_DAYS } from './constants'

function pad(n: number) {
  return String(n).padStart(2, '0')
}
export function toLocalDateKey(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function parseDateKey(isoDay: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDay.trim())
  if (!m) return null
  const [, y, mo, d] = m
  const dt = new Date(Number(y), Number(mo) - 1, Number(d), 12, 0, 0)
  return Number.isNaN(dt.getTime()) ? null : dt
}

export interface BookingBounds {
  minDate: string
  maxDate: string
}

export function bookingDateBounds(now = new Date()): BookingBounds {
  const base = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  base.setDate(base.getDate() + BOOKING_FIRST_OFFSET_DAYS)

  const end = new Date(base)
  end.setDate(end.getDate() + BOOKING_RANGE_DAYS - 1)

  return { minDate: toLocalDateKey(base), maxDate: toLocalDateKey(end) }
}

export function isDateWithinBookingBounds(isoDay: string, bounds: BookingBounds): boolean {
  return isoDay >= bounds.minDate && isoDay <= bounds.maxDate
}
