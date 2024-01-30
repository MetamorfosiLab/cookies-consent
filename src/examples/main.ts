import { CookiesConsent } from '../index'

const _cc = new CookiesConsent({
  expirationDays: 182, // half year
  buttons: ['accept', 'settings', 'reject'],

  content: {
    title: 'This website is using Cookies!',
    message: `
      <p>
        This site uses cookies (or similar) to measure traffic to this website. By clicking ACCEPT ALL, you are agreeing to our and our partners' use of cookies. You can change your cookie preferences at any time. For more information, please visit, our Cookie Notice.
      </p>
      `,
    // policy: 'Privacy Policy',
    // policyLink: 'https://gdpr-info.eu/',
    settingsFooter: `
    <p>
      However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website.
      <br />
      Except for essential cookies, all cookies will expire after the expiry periods as set out in the Gecko Hospitality Cookie Notice.
    </p>
  `,
  },

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
    analytics_cookie: {
      name: 'analytics_cookie',
      title: 'Analytics Cookies',
      description: `
      <p>
        These cookies help us improve or optimise the experience we provide. They allow us to measure how visitors interact with the Site and we use this information to improve the user experience and performance of the Site.
        <br />
        These cookies are used to collect technical information such as how many messages you send, how many times you open the Site, when you connect to third party services, and other key events
      </p>
      `,
    },
    cc_ga: {
      name: 'cc_ga',
      title: 'Google Analytics',
      description: '<p>GA Cookies 🍪.</p>',
      code: 'G-SNGNJYXMJJ',
    },
  },
})
