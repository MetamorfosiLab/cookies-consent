import '../assets/css/style.css'
import { CookiesConsent, manageGoogleAnalytics, manageGoogleTagManager } from '../index'

// #region callbacks
const cookiesConsent = new CookiesConsent({
  expirationDays: 182, // half year
  buttons: ['accept', 'settings', 'info', 'reject'],

  // #region content
  content: {
    title: 'This website is using Cookies!',
    message: `
      <p>
        This site uses cookies (or similar) to measure traffic to this website. By clicking ACCEPT ALL, you are agreeing to our and our partners' use of cookies. You can change your cookie preferences at any time. For more information, please visit, our Cookie Notice.
      </p>
      `,
    settingsFooter: `
    <p>
      However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website.
      <br />
      Except for essential cookies, all cookies will expire after the expiry periods as set out in the Gecko Hospitality Cookie Notice.
    </p>
  `,
  },
  // #endregion content

  // #region cookies
  cookies: [
    {
      name: 'essential_cookie',
      title: 'Essential Cookies',
      description: `
      <p>
        These cookies are required to enable core functionality of the Site. Without these cookies, services you have asked for cannot be provided. If you disable these cookies certain parts of the Site will not function for you
      </p>
      `,
    },
    {
      name: 'analytics',
      title: 'Analytics',
      description: '<p>Analytics Cookies 🍪.</p>',
      cookies: [
        {
          name: 'cc_ga',
          code: 'G-XXXXXXXXXX',
          manageFunction: manageGoogleAnalytics,
        },
        {
          name: 'cc_gtm',
          code: 'GTM-PVJH7S4',
          manageFunction: manageGoogleTagManager,
        },
      ],
    },
  ],
  // #endregion cookies
})
// #endregion callbacks

const cookieSettings = document.querySelector('#cookie-settings')
cookieSettings?.addEventListener('click', () => {
  cookiesConsent.toggleSettings()
})
