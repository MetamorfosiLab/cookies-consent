export interface Content {
  /**
   * Specifies the title of the cookies message.
   */
  title?: string

  /**
   * Specifies the text of the cookies message.
   */
  message?: string

  /**
   * Specifies the text for the **information** button. By clicking this button, the information window will be open.
   */
  info?: string

  /**
   * Specifies the text for the privacy policy link. If not specified, it will not be shown.
   */
  policy?: string

  /**
   * Specifies the link to the privacy policy. If not specified, the text will not be shown.
   */
  policyLink?: string

  /**
   * Specifies the text for the dismiss button. This button is shown when the cookies message is accepted or rejected.
   * By clicking this button, the cookies message will be shown.
   */
  btnDismiss?: string

  /**
   * Specifies the text for the accept button. By clicking this button, all the cookies will be accepted.
   */
  btnAccept?: string

  /**
   * Specifies the text for the reject button. By clicking this button, all the cookies will be rejected.
   */
  btnReject?: string

  /**
   * Specifies the text for the **information** button. By clicking this button, the information window will be open.
   */
  btnInfo?: string

  /**
   * Specifies the text for the settings button. By clicking this button, the settings window will be open to select custom cookies.
   */
  btnSettings?: string

  /**
   * Specifies the alignment of the content (title and message, not buttons).
   */
  align?: string

  /**
   * Specifies the text that will be shown in the header of the settings window. It is possible to specify HTML code.
   */
  settingsHeader?: string

  /**
   * Specifies the text that will be shown in the footer of the settings window. It is possible to specify HTML code.
   */
  settingsFooter?: string

  /**
   * Specifies the text for the **select all** button placed in the settings window.
   */
  btnSettingsSelectAll?: string

  /**
   * Specifies the text for the **unselect all** button placed in the settings window.
   */
  btnSettingsUnselectAll?: string

  /**
   * Specifies the text for the accept selection button placed in the settings window.
   */
  btnSettingsAccept?: string
}
