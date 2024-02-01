// ManageGoogleTagManager.ts

import type { LifecycleType } from '../types'
import type { Cookie } from '../types/cookie.types'

interface ManageGoogleTagManagerParams {
  lifecycle: LifecycleType
  cookie: Cookie
  status?: boolean
  path?: string
}

export function manageGoogleTagManager({
  lifecycle,
  cookie,
  status = false,
  path = '',
}: ManageGoogleTagManagerParams) {
  const code = cookie.code ?? ''

  if (code !== '') {
    switch (lifecycle) {
      case 'first-load':
      case 'reject':
        delGoogleTagManagerScript()
        cleanGoogleTagManagerCookies(path)
        break

      case 'load':
      case 'accept':
        if (status) {
          addGoogleTagManagerScript(code)
        }
        else {
          delGoogleTagManagerScript()
          cleanGoogleTagManagerCookies(path)
        }
        break
    }
  }
  else {
    console.error(`ERROR: Google Tag Manager code not specified`)
  }
}

function addGoogleTagManagerScript(code: string) {
  if (code === '')
    return

  const scriptToCheck1 = document.getElementById('cc-gtm-script-1')
  const scriptToCheck2 = document.getElementById('cc-gtm-script-2')

  if (!scriptToCheck1) {
    const script = createScriptElement(`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${code}');
    `)
    document.head.insertAdjacentElement('afterbegin', script)
  }

  if (!scriptToCheck2) {
    const noscript = createScriptElement(`
      <iframe src="https://www.googletagmanager.com/ns.html?id=${code}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `)
    document.body.insertAdjacentElement('afterbegin', noscript)
  }
}

function delGoogleTagManagerScript() {
  removeElement('cc-gtm-script-1')
  removeElement('cc-gtm-script-2')
  removeElement('script[src^="https://www.googletagmanager.com/gtm.js"]')
  removeElement('script[src^="https://www.google-analytics.com/analytics.js"]')
}

function cleanGoogleTagManagerCookies(path: string) {
  const keysToRemove = ['_ga', '_gid', '__utm']

  const cookies = document.cookie
  const ca = cookies.split(';')
  const hostnameParts = window.location.hostname.split('.')

  for (let i = 0; i < ca.length; i++) {
    const key = ca[i].split('=')

    for (let j = 0; j < keysToRemove.length; j++) {
      if (key.toString().trim().startsWith(keysToRemove[j])) {
        document.cookie = `${key[0]}="";domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 UTC;${path}`

        if (hostnameParts[0] === 'www') {
          const domain = `.${hostnameParts[1]}.${hostnameParts[2]}`
          document.cookie = `${key[0]}="";domain=${domain};expires=Thu, 01 Jan 1970 00:00:00 UTC;${path}`
        }
      }
    }
  }
}

function createScriptElement(content: string) {
  const script = document.createElement('script')
  script.innerHTML = content
  return script
}

function removeElement(idOrSelector: string) {
  const element = document.querySelector(`#${idOrSelector}`) || document.querySelector(idOrSelector)
  if (element)
    element.remove()
}
