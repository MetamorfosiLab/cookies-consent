import type { LifecycleType } from '../types'
import type { Cookie } from '../types/cookie.types'

interface ManageGoogleAnalyticsParams {
  lifecycle: LifecycleType
  cookie: Cookie
  status?: boolean
  path?: string
}

export function manageGoogleAnalytics({ lifecycle, cookie, status = false, path = '',
}: ManageGoogleAnalyticsParams) {
  const code = cookie.code ?? ''
  const onLoad = cookie.onLoad ?? false

  if (code !== '') {
    switch (lifecycle) {
      case 'first-load' :
        if (onLoad) {
          addGoogleAnalyticsScript(code)
          setGoogleAnalyticsCookieStatus(code, true)
        }
        else {
          setGoogleAnalyticsCookieStatus(code, false)
          cleanGoogleAnalyticsCookies(path)
        }
        break

      case 'load' :
      case 'accept' :
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

      case 'reject' :
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

function addGoogleAnalyticsScript(code = '') {
  if (code !== '') {
    const scriptToCheck1 = document.getElementById('cc-ga-script-1')
    const scriptToCheck2 = document.getElementById('cc-ga-script-2')

    if (!scriptToCheck1) {
      const script = document.createElement('script')
      script.id = 'cc-ga-script-1'
      script.src = `https://www.googletagmanager.com/gtag/js?id=${code}`
      script.async = true
      document.head.appendChild(script)
    }

    if (!scriptToCheck2) {
      const script = document.createElement('script')
      script.id = 'cc-ga-script-2'
      script.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${code}', { 'anonymize_ip': true });
            gtag('config', '${code}');
            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
            window['ga-disable-' + '${code}'] = true;`
      document.head.appendChild(script)
    }
  }
}

function delGoogleAnalyticsScript() {
  const scriptToCheck1 = document.getElementById('cc-ga-script-1')
  const scriptToCheck2 = document.getElementById('cc-ga-script-2')

  if (scriptToCheck1)
    scriptToCheck1.remove()
  if (scriptToCheck2)
    scriptToCheck2.remove()
}

function setGoogleAnalyticsCookieStatus(code = '', status = false) {
  const scriptToCheck = document.getElementById('cc-ga-script-2')

  if (code !== '' && scriptToCheck) {
    gtag('set', 'allow_google_signals', status)
    gtag('set', 'allow_ad_personalization_signals', status)
    gtag('consent', 'update', {
      analytics_storage: status ? 'granted' : 'denied',
    })

    // @ts-expect-error - need more time to figure out how to fix this
    window[`ga-disable-${code}`] = !status
  }
}

function cleanGoogleAnalyticsCookies(path: string) {
  const keysToRemove = (['_ga', '_gid', '__utm'])

  const cookies = document.cookie
  const ca = cookies.split(';')
  const hostname_parts = window.location.hostname.split('.')

  for (let i = 0; i < ca.length; i++) {
    const key = ca[i].split('=')

    for (let j = 0; j < keysToRemove.length; j++) {
      if (key.toString().trim().startsWith(keysToRemove[j])) {
        document.cookie = `${key[0]}="";domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 UTC;${path}`

        if (hostname_parts[0] === 'www') {
          const domain = `.${hostname_parts[1]}.${hostname_parts[2]}`
          document.cookie = `${key[0]}="";domain=${domain};expires=Thu, 01 Jan 1970 00:00:00 UTC;${path}`
        }
      }
    }
  }
}