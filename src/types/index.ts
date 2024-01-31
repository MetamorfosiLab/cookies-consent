import type { Content } from './content.types'
import type { Cookie } from './cookie.types'

export type ButtonType = 'dismiss' | 'accept' | 'reject' | 'info' | 'settings'
export type PositionType = 'top' | 'top-left' | 'top-right' | 'top-center' | 'bottom' | 'bottom-left' | 'bottom-right' | 'bottom-center'
export type ButtonDismissPositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export type CookiesStatusType = 'accept_all' | 'reject_all' | 'selection'
export type CookiesConsentStatusType = 'accept' | 'reject' | 'selection'
export type LifecycleType = 'first-load' | 'load' | 'accept' | 'reject'

export interface CookiesConsentParams {
  expirationDays: number
  path?: string
  sameSite?: 'strict' | 'lax' | 'none'
  position?: PositionType
  btnDismissPosition?: ButtonDismissPositionType
  buttons?: ButtonType[]

  ignorePages?: string[]
  hideDescription?: boolean
  mainWindowSettings?: boolean
  animation?: boolean

  content: Content

  cookies?: { [key: string]: Cookie }

  callback?: {
    first_load?: (params: CustomCookiePreferences) => void
    accept?: (params: CustomCookiePreferences) => void
    reject?: (params: CustomCookiePreferences) => void
    load?: (params: CustomCookiePreferences) => void
  }
}

export interface CustomCookiePreferences {
  [key: string]: boolean | undefined
  cc_ga?: boolean
  cc_gtm?: boolean
}
