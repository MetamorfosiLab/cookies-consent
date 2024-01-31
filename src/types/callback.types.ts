import type { CookiesStatus } from './index'

export interface Callback {
  /**
   * This function will be invoked when the user visits the page and has not neither accepted nor rejected the cookies message.
   * @param params - Custom cookie preferences.
   */
  first_load?: (params: CookiesStatus) => void

  /**
   * This function will be invoked when the user clicks on the accept all or accept settings buttons.
   * @param params - Custom cookie preferences.
   */
  accept?: (params: CookiesStatus) => void

  /**
   * This function will be invoked when the user clicks on the reject button.
   * @param params - Custom cookie preferences.
   */
  reject?: (params: CookiesStatus) => void

  /**
   * This function will be invoked every time a user that interacted previously with the cookies message (accepting or rejecting) visits the page.
   * @param params - Custom cookie preferences.
   */
  load?: (params: CookiesStatus) => void
}
