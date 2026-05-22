import type { Payload } from 'payload'

import { DEFAULT_DAY_MINUTES, MAX_BOOKINGS_PER_DAY } from './constants'
import type { BookingBounds } from './dateBounds'
import { bookingDateBounds, isDateWithinBookingBounds, parseDateKey } from './dateBounds'
import { dayKindFromDateKey } from './dayKind'
import { allSlotsFromWindow } from './generateSlots'
import { normalizeBookingDateKey, normalizeTimeToken } from './normalize'
import { parseOperatingWindow } from './parseOperatingHours'

interface SettingsHours {
  serviceHours?: { weekDays?: string | null; weekEnds?: string | null }
}

export interface OccupiedSlotsOptions {
  ignoreServiceBookingId?: number | string
  ignoreAppointmentId?: number | string
}

export async function occupiedSlotsForDay(
  payload: Payload,
  dateKey: string,
  opts?: OccupiedSlotsOptions,
): Promise<{ times: Set<string>; count: number }> {
  const times = new Set<string>()
  const [bookingRes, aptRes] = await Promise.all([
    payload.find({
      collection: 'service-booking',
      where: {
        and: [
          { date: { equals: dateKey } },
          { bookingStatus: { not_equals: 'cancelled' } },
        ],
      },
      limit: 250,
      depth: 0,
      overrideAccess: true,
    }),
    payload.find({
      collection: 'appointment',
      where: { date: { equals: dateKey } },
      limit: 250,
      depth: 0,
      overrideAccess: true,
    }),
  ])

  for (const doc of bookingRes.docs) {
    if (
      opts?.ignoreServiceBookingId !== undefined &&
      String((doc as { id?: unknown }).id) === String(opts.ignoreServiceBookingId)
    ) {
      continue
    }
    const d = doc as { date?: string; time?: string }
    const dk =
      normalizeBookingDateKey(d.date) ??
      (typeof d.date === 'string' && d.date.includes('T') ? d.date.slice(0, 10) : null)
    if (dk !== dateKey) continue
    const t = normalizeTimeToken(d.time)
    if (t) times.add(t)
  }

  for (const doc of aptRes.docs) {
    if (
      opts?.ignoreAppointmentId !== undefined &&
      String((doc as { id?: unknown }).id) === String(opts.ignoreAppointmentId)
    ) {
      continue
    }
    const d = doc as { date?: string; time?: string }
    const dk = normalizeBookingDateKey(d.date)
    if (dk !== dateKey) continue
    const t = normalizeTimeToken(d.time)
    if (t) times.add(t)
  }

  return { times, count: times.size }
}

/** Allowed slot starts for weekday vs weekend (from global CMS). */
export function slotsForCalendarDate(settings: SettingsHours, dateKey: string): string[] {
  const kind = dayKindFromDateKey(dateKey)
  if (!kind || !parseDateKey(dateKey)) return []

  const weekWin = parseOperatingWindow(settings.serviceHours?.weekDays)

  let win = weekWin
  if (kind === 'weekend') {
    const hasEnds =
      Boolean(settings.serviceHours?.weekEnds) &&
      Boolean(settings.serviceHours!.weekEnds!.trim().length)
    const endWin = parseOperatingWindow(settings.serviceHours?.weekEnds)
    win =
      hasEnds &&
      (endWin.start !== DEFAULT_DAY_MINUTES.start || endWin.end !== DEFAULT_DAY_MINUTES.end)
        ? endWin
        : weekWin
  }

  return allSlotsFromWindow(win)
}

export interface ScheduleForDayPayload {
  date: string
  bounds: BookingBounds
  slots: string[]
  bookedTimes: string[]
  usedCount: number
  capacity: number
  dayKind: ReturnType<typeof dayKindFromDateKey>
  error?: string
}

export async function computeScheduleForDay(
  payload: Payload,
  settings: SettingsHours,
  rawDate: string | null | undefined,
): Promise<ScheduleForDayPayload> {
  const bounds = bookingDateBounds()
  if (!rawDate || !/^(\d{4}-\d{2}-\d{2})$/.test(rawDate.trim())) {
    return {
      date: '',
      bounds,
      slots: [],
      bookedTimes: [],
      usedCount: 0,
      capacity: MAX_BOOKINGS_PER_DAY,
      dayKind: null,
      error: 'Invalid or missing date',
    }
  }

  const date = rawDate.trim()

  if (!isDateWithinBookingBounds(date, bounds)) {
    return {
      date,
      bounds,
      slots: [],
      bookedTimes: [],
      usedCount: 0,
      capacity: MAX_BOOKINGS_PER_DAY,
      dayKind: dayKindFromDateKey(date),
      error: `Date outside allowed booking window (${bounds.minDate} … ${bounds.maxDate})`,
    }
  }

  const allPossible = slotsForCalendarDate(settings, date)
  const kind = dayKindFromDateKey(date)

  if (allPossible.length === 0) {
    return {
      date,
      bounds,
      slots: [],
      bookedTimes: [],
      usedCount: 0,
      capacity: MAX_BOOKINGS_PER_DAY,
      dayKind: kind,
      error:
        kind === null
          ? 'Could not classify day'
          : 'No slots generated (fix operating-hours text in CMS settings)',
    }
  }

  const { times } = await occupiedSlotsForDay(payload, date)
  const booked = [...times].sort()
  let slots = allPossible.filter((slot) => !times.has(slot))

  const usedUniqueSlotCount = booked.length

  if (usedUniqueSlotCount >= MAX_BOOKINGS_PER_DAY) {
    slots = []
  }

  return {
    date,
    bounds,
    slots,
    bookedTimes: booked,
    usedCount: usedUniqueSlotCount,
    capacity: MAX_BOOKINGS_PER_DAY,
    dayKind: kind,
  }
}

export async function assertBookingSlotAllowed(
  payload: Payload,
  settings: SettingsHours,
  rawDateKey: unknown,
  rawTime: unknown,
  occupancyOpts?: OccupiedSlotsOptions,
): Promise<{ dateKey: string; timeHHmm: string }> {
  let dateKey = normalizeBookingDateKey(rawDateKey)
  const rawMaybe =
    rawDateKey instanceof Date ? rawDateKey.toISOString().slice(0, 10) : String(rawDateKey ?? '')
  if (!dateKey && /^(\d{4}-\d{2}-\d{2})/.test(rawMaybe)) {
    dateKey = rawMaybe.slice(0, 10)
  }
  const timeHHmm = normalizeTimeToken(typeof rawTime === 'string' ? rawTime : null)
  const bounds = bookingDateBounds()

  if (!dateKey) {
    throw new Error('A valid booking date is required.')
  }
  if (!timeHHmm) {
    throw new Error('A valid time slot is required.')
  }
  if (!isDateWithinBookingBounds(dateKey, bounds)) {
    throw new Error(`Date must fall between ${bounds.minDate} and ${bounds.maxDate}.`)
  }

  const allowed = new Set(slotsForCalendarDate(settings, dateKey))
  if (!allowed.has(timeHHmm)) {
    throw new Error(`Time ${timeHHmm} is outside operating hours for that day.`)
  }

  const { times } = await occupiedSlotsForDay(payload, dateKey, occupancyOpts)
  if (times.has(timeHHmm)) {
    throw new Error(`Time ${timeHHmm} has already been booked on ${dateKey}.`)
  }

  if (times.size >= MAX_BOOKINGS_PER_DAY) {
    throw new Error('Maximum bookings for this date have been reached.')
  }

  return { dateKey, timeHHmm }
}
