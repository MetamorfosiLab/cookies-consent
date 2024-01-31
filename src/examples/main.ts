import '../assets/css/style.css'
import { CookiesConsent } from '../index'

// #region callbacks
const cookiesConsent = new CookiesConsent({
  expirationDays: 182, // half year
  buttons: ['accept', 'settings', 'reject'],

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
  cookies: {
    essential_cookie: {
      name: 'essential_cookie',
      title: 'Essential Cookies',
      description: `
      <p>
        These cookies are required to enable core functionality of the Site. Without these cookies, services you have asked for cannot be provided. If you disable these cookies certain parts of the Site will not function for you
      </p>
      `,
    },
    // cc_ga: {
    //   name: 'cc_ga',
    //   title: 'Google Analytics',
    //   description: '<p>GA Cookies 🍪.</p>',
    //   code: 'G-XXXXXXXXXX',
    // },
    analytics: {
      name: 'analytics',
      title: 'Analytics',
      description: '<p>Analytics Cookies 🍪.</p>',
      cookies: [
        {
          name: 'cc_ga',
          code: 'G-XXXXXXXXXX',
        },
        {
          name: 'cc_gtm',
          code: 'GTM-XXXXXXX',
        },
      ],
    },
  },
  // #endregion cookies
})
// #endregion callbacks

const cookieSettings = document.querySelector('#cookie-settings')
cookieSettings?.addEventListener('click', () => {
  cookiesConsent.toggleSettings()
})
