import type {
  AnalyticsType,
  Callback,
  CookiesConsentParams,
  CookiesConsentStatusType,
  CookiesStatus,
  CookiesStatusType,
  LifecycleType,
} from './types'
import { manageGoogleAnalytics } from './modules/cc-ga'
import { manageGoogleTagManager } from './modules/cc-gtm'
import { contentDefault } from './shared/content-default'

export class CookiesConsent {
  private params: CookiesConsentParams

  #answered = false
  #cookies_status: CookiesStatus = {}
  #cookie_name = 'consentcookies_status'

  constructor(params: CookiesConsentParams) {
    this.params = params ?? {}
    this.checkParameters()

    if (!this.isPageAllowedToShowConsent())
      return

    if (!this.answeredConsent()) {
      this.printHtmlMessage()
      this.callbackFunction('first-load')
    }
    else {
      this.checkCookies()
      this.printDismissButton()
      this.callbackFunction('load')
    }
  }

  isPageAllowedToShowConsent() {
    const url = window.location.pathname

    return !this.params.ignorePages?.some(page => url !== '' && url.includes(page)) ?? true
  }

  answeredConsent() {
    this.#answered = (document.cookie.split(';').some(c => c.trim().startsWith(this.#cookie_name)) || '') !== ''
    return this.#answered
  }

  checkCookies() {
    document.cookie.split(' ').forEach((cookie) => {
      const [name] = cookie.split('=')
      this.#cookies_status[name] = true
    })
  }

  checkParameters() {
    this.params = this.params || {}
    this.params.cookies = this.params.cookies || {}

    for (const cookie in this.params.cookies)
      this.#cookies_status[this.params.cookies[cookie]?.name] = false

    this.params.mainWindowSettings ??= false
    this.params.position ??= 'bottom-left'
    this.params.btnDismissPosition ??= 'bottom-left'
    this.params.expirationDays ??= 0
    this.params.animation ??= true
    this.params.path ??= 'path=/'
    this.params.hideDescription ??= true

    this.params.content = {
      ...contentDefault,
      ...this.params.content,
    }
  }

  printHtmlMessage() {
    if (this.params.mainWindowSettings) {
      this.toggleSettings()
    }
    else if (!document.getElementById('cc-window')) {
      const positionCss = `cc-pos-${this.params.position}`
      const contentAlign = `cc-content-${this.params.content?.align}`
      const positionInsert = ['bottom', 'bottom-right', 'bottom-left', 'bottom-center'].includes(this.params.position ?? '') ? 'beforeend' : 'afterbegin'

      const buttons = this.getHtmlButtons()
      const policy = this.params.content?.policy !== '' && this.params.content?.policyLink !== '' ? `<a href="${this.params.content.policyLink}" target="_blank">${this.params.content.policy}</a>` : ''

      const htmlMessage = `
        <div id="cc-window" class="cc-window ${positionCss} ${contentAlign} ${this.params.animation ? 'cc-animation-in' : ''}">
            <div class="cc-window-content">
              <div class="cc-window-title">${this.params.content?.title}</div>
              <div class="cc-window-message">${this.params.content?.message} <span class="cc-window-policy">${policy}</span></div>
              <div class="cc-window-buttons">${buttons}</div>
          </div>
        </div>
      `

      document.body.insertAdjacentHTML(positionInsert, htmlMessage)
      this.attachEventsButtons()
    }
  }

  getHtmlButtons() {
    if (this.params?.buttons) {
      if (Array.isArray(this.params.buttons)) {
        let html = ''

        this.params.buttons.forEach(
          (button) => {
            if (button === 'accept')
              html += `<button type="button" id="cc-btn-accept" class="cc-btn-accept">${this.params.content?.btnAccept}</button>`
            else if (button === 'reject')
              html += `<button type="button" id="cc-btn-reject" class="cc-btn-reject">${this.params.content?.btnReject}</button>`
            else if (button === 'info')
              html += `<button type="button" id="cc-btn-info" class="cc-btn-info">${this.params.content?.btnInfo}</button>`
            else if (button === 'settings')
              html += `<button type="button" id="cc-btn-settings" class="cc-btn-settings">${this.params.content?.btnSettings}</button>`
          },
        )

        return html
      }
    }

    return `<button type="button" id="cc-btn-accept" class="cc-btn-accept">${this.params.content?.btnAccept}</button>`
  }

  removeHtmlMessage() {
    if (!this.params.mainWindowSettings) {
      const elem = document.getElementById('cc-window')

      if (this.params.animation && elem) {
        ['accept', 'reject', 'info', 'settings'].forEach((button) => {
          const btn = document.getElementById(`cc-btn-${button}`)
          if (btn)
            btn.id = `cc-btn-${button}-out`
        })

        elem.id = 'cc-window-out'
        elem.classList.remove('cc-animation-in')
        elem.classList.add('cc-animation-out')

        setTimeout(() => elem?.remove(), 2000)
      }
      else {
        elem?.remove()
      }
    }
  }

  printDismissButton() {
    const cc_btn_dismiss = document.getElementById('cc-btn-dismiss')

    if (!cc_btn_dismiss && this.params?.buttons?.includes('dismiss')) {
      const positionCss = `cc-pos-${this.params.btnDismissPosition}`
      const positionInsert = ['top-right', 'top-left'].includes(this.params.position ?? '') ? 'afterbegin' : 'beforeend'

      document.body.insertAdjacentHTML(positionInsert, `
        <div id="cc-btn-dismiss" class="${positionCss}">
          ${this.params.content?.btnDismiss ?? ''}
        </div>
      `)

      this.attachEventsButtons()
    }
  }

  removeDismissButton() {
    document.getElementById('cc-btn-dismiss')?.remove()
  }

  toggleInfo() {
    if (this.params.content?.info) {
      const divInfo = document.createElement('div')
      divInfo.innerHTML = this.params.content.info ?? ''

      this.openPopup('cc-window-info', divInfo)
    }
  }

  createElement(tag: string, className: string, innerHTML?: string) {
    const element = document.createElement(tag)
    element.className = className
    element.innerHTML = innerHTML ?? ''
    return element
  }

  toggleSettings() {
    const divCookieSettings = this.createElement('div', 'cc-window-settings-cookies')

    this.createSettingsHeader(divCookieSettings)

    for (const cookie in this.params.cookies) {
      const cookieElement = this.createCookieElement(cookie)

      if (cookieElement)
        divCookieSettings.appendChild(cookieElement)
    }

    this.createSettingsButtons(divCookieSettings)

    this.createSettingsFooter(divCookieSettings)

    this.openPopup('cc-window-settings', divCookieSettings)
    this.attachEventsSettingsButtons()
  }

  createSettingsHeader(parentElement: HTMLElement) {
    if (this.params.content?.settingsHeader) {
      const divHeader = this.createElement('div', 'cc-window-settings-header', this.params.content.settingsHeader)
      parentElement.appendChild(divHeader)
    }
  }

  createCookieElement(cookie: string) {
    const elem_id = globalThis.crypto.randomUUID()
    const divCookie = document.createElement('div')
    divCookie.setAttribute('id', cookie)
    divCookie.className = 'cc-window-settings-cookie'

    const divCookieContent = this.createElement('div', 'cc-window-settings-cookie-content')

    const title = this.createCookieTitle(cookie, elem_id)
    const description = this.createCookieDescription(cookie, elem_id)
    const status = this.createCookieStatus(cookie)

    title && divCookieContent.appendChild(title)
    description && divCookieContent.appendChild(description)
    divCookie.insertAdjacentElement('afterbegin', divCookieContent)
    status && divCookie.insertAdjacentElement('beforeend', status)

    return divCookie
  }

  createCookieTitle(cookie: string, elem_id: string) {
    if (this.params.cookies?.[cookie]?.title) {
      const divTitle = this.createElement('div', 'cc-window-settings-cookie-title', this.params.cookies[cookie].title)

      if (this.params.cookies[cookie]?.description && this.params.hideDescription) {
        divTitle.innerHTML += ` <div id="cc-window-icon-dropdown-id-${elem_id}">&#10095;</div>`
        divTitle.classList.add('cc-window-settings-cookie-title-dropdown')

        divTitle.addEventListener('click', () => {
          this.toggleDescription(String(elem_id))
        })
      }

      return divTitle
    }
  }

  createCookieDescription(cookie: string, elem_id: string) {
    if (this.params.cookies?.[cookie]?.description) {
      const divDescription = document.createElement('div')
      divDescription.id = `cc-window-desc-id-${elem_id}`
      divDescription.className = 'cc-window-settings-cookie-desc'

      if (this.params.cookies[cookie]?.title && this.params.hideDescription)
        divDescription.style.display = 'none'

      divDescription.innerHTML = this.params.cookies[cookie].description ?? ''
      return divDescription
    }
  }

  createCookieStatus(cookie: string) {
    let checked = ''
    if (this.#answered && this.params.cookies?.[cookie]?.name)
      checked = this.#cookies_status[this.params.cookies[cookie].name] ? ' checked="checked"' : ''
    else
      checked = this.params.cookies?.[cookie].checked ? ' checked="checked"' : ''

    const disabled = this.params.cookies?.[cookie].disabled && checked !== '' ? ' disabled="disabled"' : ''
    const name = this.params.cookies?.[cookie].name ?? ''

    const divStatus = document.createElement('div')
    divStatus.className = 'cc-window-settings-cookie-value'
    divStatus.innerHTML = `<label class="switch"><input type="checkbox" class="cc-cookie-checkbox" id="cc-cookie-${name}" data-name="${name}" name="cc-cookie-${name}"${checked}${disabled}><span class="slider round"></span></label>`

    return divStatus
  }

  createSettingsButtons(parentElement: HTMLElement) {
    const btnSettingsSelectAll = this.params.content?.btnSettingsSelectAll ?? 'Select all'
    const btnSettingsAccept = this.params.content?.btnSettingsAccept ?? 'Accept selection'

    if (parentElement.innerHTML !== '') {
      const divButtons = document.createElement('div')
      divButtons.className = 'cc-window-settings-buttons'
      divButtons.innerHTML = `
        ${this.createButton('cc-btn-settings-select', 'cc-btn-settings-select', btnSettingsSelectAll)}
        ${this.createButton('cc-btn-settings-accept', 'cc-btn-settings-accept', btnSettingsAccept)}
      `

      parentElement.appendChild(divButtons)
    }
  }

  createSettingsFooter(parentElement: HTMLElement) {
    if (this.params.content?.settingsFooter) {
      const divFooter = document.createElement('div')
      divFooter.className = 'cc-window-settings-footer'
      divFooter.innerHTML = this.params.content.settingsFooter ?? ''
      parentElement.appendChild(divFooter)
    }
  }

  createButton(id: string, className: string, text: string) {
    return `<button type="button" id="${id}" class="${className}">${text}</button>`
  }

  toggleDescription(id: string) {
    const description = document.getElementById(`cc-window-desc-id-${id}`)
    const icon = document.getElementById(`cc-window-icon-dropdown-id-${id}`)

    if (description?.style.display === 'block' && icon) {
      icon.style.transform = 'rotate(0deg)'
      description.style.display = 'none'
    }
    else if (description && icon) {
      icon.style.transform = 'rotate(90deg)'
      description.style.display = 'block'
    }
  }

  openPopup(id: string, content: HTMLElement) {
    const htmlPopup = document.createElement('div')
    htmlPopup.id = id
    htmlPopup.className = 'cc-modal'

    const modalWindow = document.createElement('div')
    modalWindow.className = 'cc-modal-window'

    const modalContent = document.createElement('div')
    modalContent.className = 'cc-modal-content'
    modalContent.appendChild(content)

    if (!this.params.mainWindowSettings) {
      const modalClose = document.createElement('div')
      modalClose.id = 'cc-modal-close'
      modalClose.className = 'cc-modal-close'
      modalClose.innerHTML = '&times;'
      modalWindow.appendChild(modalClose)
    }

    modalWindow.appendChild(modalContent)
    htmlPopup.appendChild(modalWindow)

    document.body.insertAdjacentElement('beforeend', htmlPopup)

    htmlPopup.style.display = 'block'

    const btnClose = document.getElementById('cc-modal-close')
    btnClose?.addEventListener('click', () => htmlPopup.remove())
  }

  closePopup() {
    const modals = document.getElementsByClassName('cc-modal')

    for (let i = 0; i < modals.length; i++)
      modals[i].remove()
  }

  attachEventsButtons() {
    const btnAccept = document.getElementById('cc-btn-accept')
    const btnReject = document.getElementById('cc-btn-reject')
    const btnInfo = document.getElementById('cc-btn-info')
    const btnSettings = document.getElementById('cc-btn-settings')
    const btnDismiss = document.getElementById('cc-btn-dismiss')

    btnAccept?.addEventListener('click', () => {
      this.removeHtmlMessage()
      this.printDismissButton()
      this.setCookieStatusInParams('accept_all')
      this.setCookieConsent('accept')
      this.callbackFunction('accept')
    })

    btnReject?.addEventListener('click', () => {
      this.removeHtmlMessage()
      this.printDismissButton()
      this.setCookieStatusInParams('reject_all')
      this.setCookieConsent('reject')
      this.callbackFunction('reject')
    })

    btnInfo?.addEventListener('click', () => {
      this.toggleInfo()
    })

    btnDismiss?.addEventListener('click', () => {
      this.printHtmlMessage()
      this.removeDismissButton()
    })

    btnSettings?.addEventListener('click', () => {
      this.toggleSettings()
    })
  }

  attachEventsSettingsButtons() {
    const btnSelect = document.getElementById('cc-btn-settings-select')
    const btnAccept = document.getElementById('cc-btn-settings-accept')

    if (btnSelect) {
      btnSelect.addEventListener('click', () => {
        this.changeStateSettingsSelection()
      })
    }

    if (btnAccept) {
      btnAccept.addEventListener('click', () => {
        this.removeHtmlMessage()
        this.printDismissButton()
        this.setCookieStatusInParams('selection')
        this.setCookieConsent('selection')
        this.closePopup()
        this.callbackFunction('accept')
      })
    }
  }

  changeStateSettingsSelection() {
    const elem = document.getElementById('cc-btn-settings-select')
    const action = elem?.dataset.action

    if (elem && (action === 'select' || action === 'unselect')) {
      const status = action === 'select'
      elem.innerHTML = status ? (this.params.content.btnSettingsUnselectAll ?? '') : (this.params.content.btnSettingsSelectAll ?? '')
      elem.dataset.action = status ? 'unselect' : 'select'

      const chk_cookie = document.querySelectorAll<HTMLInputElement>('.cc-window-settings-cookie-value .cc-cookie-checkbox')
      chk_cookie.forEach((checkbox) => {
        if (!checkbox.disabled)
          checkbox.checked = status
      })
    }
  }

  setCookieConsent(status: CookiesConsentStatusType) {
    const expires = this.params.expirationDays > 0 ? `expires=${new Date(Date.now() + this.params.expirationDays * 24 * 60 * 60 * 1000).toUTCString()}` : ''
    const value = btoa(`${status}:${Date.now()}`)
    const sameSiteOptions = {
      none: 'SameSite=None;Secure',
      strict: 'SameSite=Strict',
      lax: 'SameSite=Lax',
    }
    const sameSite = (this.params.sameSite && sameSiteOptions[this.params.sameSite]) || sameSiteOptions.lax

    const setCookie = (key: string, value: string) => {
      document.cookie = `${key}=${value};${expires};${this.params.path};${sameSite};`
    }

    setCookie(this.#cookie_name, value)

    Object.entries(this.#cookies_status).forEach(([key, value]) => {
      value && setCookie(key, btoa(`${key}:${Date.now()}`))
    })

    this.#answered = true
  }

  setCookieStatusInParams($type: CookiesStatusType) {
    if (this.#cookies_status) {
      if ($type === 'accept_all') {
        for (const cookie in this.#cookies_status)
          this.#cookies_status[cookie] = true
      }
      else if ($type === 'reject_all') {
        for (const cookie in this.#cookies_status)
          this.#cookies_status[cookie] = false
      }
      else if ($type === 'selection') {
        const chk_cookie: NodeListOf<HTMLInputElement> = document.querySelectorAll('.cc-window-settings-cookie-value .cc-cookie-checkbox')

        for (let i = 0; i < chk_cookie.length; i++) {
          const key = chk_cookie[i].dataset.name

          if (key)
            this.#cookies_status[key] = chk_cookie[i].checked
        }
      }
    }
  }

  callbackFunction(type: LifecycleType) {
    const invokeCallback = (callbackType: keyof Callback) => {
      const callback = this.params.callback?.[callbackType]
      if (callback && typeof callback === 'function') {
        try {
          callback(this.#cookies_status)
        }
        catch (err) {
          console.error(`ERROR: Function ${callbackType} not found`)
        }
      }
    }

    const invokeAnalyticsCallback = (cookieType: AnalyticsType) => {
      const status = Boolean(this.#cookies_status?.[cookieType] === true)
      const manageFunction = cookieType === 'cc_ga' ? manageGoogleAnalytics : manageGoogleTagManager

      if (this.params.cookies?.[cookieType]) {
        try {
          manageFunction({ lifecycle: type, cookie: this.params.cookies[cookieType], status, path: this.params.path })
        }
        catch (err) {
          console.error(`ERROR: cc-${cookieType}.js script not loaded`)
        }
      }
    }

    invokeAnalyticsCallback('cc_ga')
    invokeAnalyticsCallback('cc_gtm')

    switch (type) {
      case 'first-load':
        invokeCallback('first_load')
        break
      case 'load':
        invokeCallback('load')
        break
      case 'accept':
        invokeCallback('accept')
        break
      case 'reject':
        invokeCallback('reject')
        break
      default:
        break
    }
  }

  getStatus() { return this.#answered }

  getConfig() { return this.params }

  showMessage() {
    try {
      this.printHtmlMessage()
      this.removeDismissButton()
    }
    catch (err) {
      console.error(`ERROR: Can not show message`)
    }
  }

  removeCookies() {
    const cookies = document.cookie.split(';')

    cookies.forEach((cookie) => {
      const [key] = cookie.trim().split('=')
      document.cookie = `${key}=""; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${this.params.path}`
    })
  }
}
