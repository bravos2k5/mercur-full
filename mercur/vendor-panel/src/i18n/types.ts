import type { Locale } from "date-fns"
import vi from "./translations/vi.json"

const resources = {
  translation: vi,
} as const

export type Resources = typeof resources

export type Language = {
  code: string
  display_name: string
  ltr: boolean
  date_locale: Locale
}
