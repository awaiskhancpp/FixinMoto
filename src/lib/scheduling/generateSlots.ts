import { SLOT_INTERVAL_MINUTES } from './constants'
import type { MinuteWindow } from './parseOperatingHours'
import { formatHHMM } from './parseOperatingHours'

export function buildSlotsInsideWindow(win: MinuteWindow, intervalMinutes: number): string[] {
  const slots: string[] = []
  const step = Math.max(5, Math.min(intervalMinutes, 240))
  const lastSlotStart = win.end - step
  if (lastSlotStart < win.start) {
    return slots
  }
  for (let m = win.start; m <= lastSlotStart; m += step) {
    slots.push(formatHHMM(m))
  }
  return slots
}

export function allSlotsFromWindow(win: MinuteWindow): string[] {
  return buildSlotsInsideWindow(win, SLOT_INTERVAL_MINUTES)
}
