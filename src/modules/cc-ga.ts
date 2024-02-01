// ManageGoogleAnalytics.ts

import type { LifecycleType } from '../types'
import type { Cookie } from '../types/cookie.types'

interface ManageGoogleAnalyticsParams {
  lifecycle: LifecycleType
  cookie: Cookie
  status?: boolean
  path?: string
}

export function manageGoogleAnalytics({
  lifecycle,
  cookie,
  status = false,
  path = '',
}: ManageGoogleAnalyticsParams) {
  const code = cookie.code ?? ''
  const onLoad = cookie.onLoad ?? false

  if (code !== '') {
    switch (lifecycle) {
      case 'first-load':
        if (onLoad) {
          addGoogleAnalyticsScript(code)
          setGoogleAnalyticsCookieStatus(code, true)
        }
        else {
          setGoogleAnalyticsCookieStatus(code, false)
          cleanGoogleAnalyticsCookies(path)
        }
        break

      case 'load':
      case 'accept':
        if (status) {
          addGoogleAnalyticsScript(code)
          setGoogleAnalyticsCookieStatus(code, true)
        }
        else {
          setGoogleAnalyticsCookieStatus(code, false)
          delGoogleAnalyticsScript()
          cleanGoogleAnalyticsCookies(path)
        }
        break

      case 'reject':
        setGoogleAnalyticsCookieStatus(code, false)
        delGoogleAnalyticsScript()
        cleanGoogleAnalyticsCookies(path)
        break
    }
  }
  else {
    console.error(`ERROR: Google Analytics code not specified`)
  }
}

function addGoogleAnalyticsScript(code: string) {
  if (code === '')
    return

  const scriptToCheck1 = document.getElementById('cc-ga-script-1')
  const scriptToCheck2 = document.getElementById('cc-ga-script-2')

  if (!scriptToCheck1)
    appendScriptElement(`https://www.googletagmanager.com/gtag/js?id=${code}`, 'cc-ga-script-1')

  if (!scriptToCheck2) {
    const scriptContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${code}', { 'anonymize_ip': true });
      gtag('config', '${code}');
      gtag('consent', 'default', { 'analytics_storage': 'denied' });
      window['ga-disable-' + '${code}'] = true;
    `
    appendScriptElement(scriptContent, 'cc-ga-script-2')
  }
}

function appendScriptElement(srcOrContent: string, id: string) {
  const script = document.createElement('script')
  script.id = id
  script[srcOrContent.startsWith('http') ? 'src' : 'innerHTML'] = srcOrContent
  script.async = true
  document.head.appendChild(script)
}

function delGoogleAnalyticsScript() {
  document.getElementById('cc-ga-script-1')?.remove()
  document.getElementById('cc-ga-script-2')?.remove()
}

function setGoogleAnalyticsCookieStatus(code: string, status: boolean) {
  const scriptToCheck = document.getElementById('cc-ga-script-2')

  if (code !== '' && scriptToCheck) {
    gtag('set', 'allow_google_signals', status)
    gtag('set', 'allow_ad_personalization_signals', status)
    gtag('consent', 'update', { analytics_storage: status ? 'granted' : 'denied' })
    // @ts-expect-error - need more time to figure out how to fix this
    window[`ga-disable-${code}`] = !status
  }
}

function cleanGoogleAnalyticsCookies(path: string) {
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
