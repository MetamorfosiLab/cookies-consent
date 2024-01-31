import type { Content } from './content.types'
import type { Cookie } from './cookie.types'

export type ButtonType = 'dismiss' | 'accept' | 'reject' | 'info' | 'settings'
export type PositionType = 'top' | 'top-left' | 'top-right' | 'top-center' | 'bottom' | 'bottom-left' | 'bottom-right' | 'bottom-center'
export type ButtonDismissPositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export type CookiesStatusType = 'accept_all' | 'reject_all' | 'selection'
export type CookiesConsentStatusType = 'accept' | 'reject' | 'selection'
export type LifecycleType = 'first-load' | 'load' | 'accept' | 'reject'
export type AnalyticsType = 'cc_ga' | 'cc_gtm'

// #region CookiesInterface
/**
 * Define a type to represent custom cookies in the cookies settings window.
 */
export interface Cookies {
  /**
   * Custom cookies can be added using their respective names as keys.
   * The values are instances of the `Cookie` type.
   */
  [cookieName: string]: Cookie
}
// #endregion CookiesInterface

// #region CookiesStatusInterface
/**
 * Define a type to represent the status of custom cookies.
 */
export interface CookiesStatus {
  /**
   * Status of each custom cookie, identified by their respective names.
   * The values are boolean flags indicating whether the cookie is accepted or rejected.
   */
  [key: keyof Cookies]: {
    status: boolean
    parent?: Cookie
  } & Cookie
}
// #endregion CookiesStatusInterface

export interface Callback {
  first_load?: (params: CookiesStatus) => void
  accept?: (params: CookiesStatus) => void
  reject?: (params: CookiesStatus) => void
  load?: (params: CookiesStatus) => void
}

// #region params
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

  cookies?: Cookies

  callback?: Callback
}
// #endregion params
