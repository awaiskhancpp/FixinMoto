import { isValidFormEmail } from '@/lib/validateEmail'

/** Digits-only for validation */
export function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, '')
}

export function isValidCoveragePhone(phone: string): boolean {
  const d = phoneDigits(phone)
  return d.length >= 10 && d.length <= 15
}

/** Non-empty trimmed name */
export function isValidNamePart(name: string, minLen = 2): boolean {
  const t = name.trim()
  return t.length >= minLen && t.length <= 120
}

export interface CoverageSubmitBody {
  firstName: string
  lastName: string
  email: string
  phone: string
  addressLine: string
  selectedAreaId: number | null
  mainServiceId: number | null
}

/** Returns `{ ok: true }` or `{ ok: false, field, message }` */
export function validateCoveragePayload(
  body: CoverageSubmitBody,
  opts?: { requireArea?: boolean },
): { ok: true } | { ok: false; field: string; message: string } {
  if (
    opts?.requireArea &&
    (body.selectedAreaId == null || Number.isNaN(Number(body.selectedAreaId)))
  ) {
    return { ok: false, field: 'selectedArea', message: 'Please select your area.' }
  }
  if (!isValidNamePart(body.firstName)) {
    return {
      ok: false,
      field: 'firstName',
      message: 'Please enter a valid first name (at least 2 characters).',
    }
  }
  if (!isValidNamePart(body.lastName)) {
    return {
      ok: false,
      field: 'lastName',
      message: 'Please enter a valid last name (at least 2 characters).',
    }
  }
  if (!body.email.trim()) {
    return { ok: false, field: 'email', message: 'Please enter your email.' }
  }
  if (!isValidFormEmail(body.email)) {
    return { ok: false, field: 'email', message: 'Enter a valid email address.' }
  }
  if (!isValidCoveragePhone(body.phone)) {
    return {
      ok: false,
      field: 'phone',
      message: 'Enter a valid phone number (10–15 digits).',
    }
  }
  if (!body.addressLine.trim()) {
    return { ok: false, field: 'addressLine', message: 'Please enter your location.' }
  }
  if (body.addressLine.trim().length < 4) {
    return {
      ok: false,
      field: 'addressLine',
      message: 'Location looks too short.',
    }
  }
  return { ok: true }
}
