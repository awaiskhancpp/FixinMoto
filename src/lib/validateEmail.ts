/** Client-side rule aligned with Appointment form (toast: “Enter a valid email address”). */
export function isValidFormEmail(value: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(value.trim())
}
