/**
 * Define an interface for custom cookies in the cookies settings window.
 */
export interface Cookie {
  /**
   * Name by which the browser will identify the cookie.
   * A name without spaces or special characters is recommended.
   */
  name: string

  /**
   * Title or long name with which the cookie will be displayed in its description section.
   */
  title?: string

  /**
   * Text that will be shown in the settings window to describe the cookie.
   * It is possible to specify HTML code.
   */
  description?: string

  /**
   * Initial state of the cookie checkbox.
   */
  checked?: boolean

  /**
   * Allows to interact or not with the checkbox.
   */
  disabled?: boolean

  /**
   * Only applicable to a cookie associated with Google Analytics.
   * Determines whether data collection is activated before the user has accepted or rejected cookies.
   */
  onLoad?: boolean

  /**
   * Only applicable to a cookie associated with Google Analytics.
   * Google Analytics code for global site tag (gtag.js).
   */
  code?: string

  cookies?: Array<Omit<Cookie, 'title' | 'description'>>
}
