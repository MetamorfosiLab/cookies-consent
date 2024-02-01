import { createRequire } from 'node:module'
import { type DefaultTheme, defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('@metamorfosilab/cookies-consent/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cookies Consent',
  description: 'A Cookies Consent Generator Docs 🍪',
  base: '/cookies-consent/',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/cookies-consent/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#dc9a09' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'CookiesConsent' }],
    ['meta', { name: 'og:image', content: 'https://metamorfosilab.github.io/cookies-consent/cookiesconsent-og.png' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/config/': { base: '/config/', items: sidebarGuide() },
      '/types/': { base: '/types/', items: sidebarGuide() },
      '/styles/': { base: '/styles/', items: sidebarGuide() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MetamorfosiLab/cookies-consent' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/metamorfosi-agency/' },
      { icon: 'instagram', link: 'https://www.instagram.com/metamorfosi.agency/' },
      { icon: 'youtube', link: 'https://youtube.com/@metamorfosi.agency' },
    ],

    editLink: {
      pattern: 'https://github.com/MetamorfosiLab/cookies-consent/edit/dev/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Metamorfosi Lab',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/getting-started',
      activeMatch: '/guide/',
    },
    {
      text: 'Config',
      link: '/config/shared-options',
      activeMatch: '/config/',
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Releases',
          link: 'https://github.com/MetamorfosiLab/cookies-consent/releases/',
        },
      ],
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      base: '/guide/',
      items: [
        { text: 'Getting Started', link: 'getting-started' },
      ],
    },
    {
      text: 'Config',
      base: '/config/',
      items: [
        { text: 'Shared Options', link: 'shared-options' },
        { text: 'Content Options', link: 'content-options' },
        { text: 'Cookies Options', link: 'cookies-options' },
        { text: 'Callback Functions', link: 'callback-functions' },
      ],
    },
    {
      text: 'Themes',
      base: '/guide/',
      items: [
        { text: 'Default', link: 'theme-default' },
        { text: 'Dark', link: 'theme-dark' },
        { text: 'Smooth', link: 'theme-smooth' },
        { text: 'Contrast', link: 'theme-contrast' },
        { text: 'Custom', link: 'theme-custom' },
      ],
    },
    {
      text: 'Styles',
      base: '/styles/',
      items: [
        { text: 'General', link: 'general' },
        // { text: 'Typography', link: 'typography' },
        // { text: 'Buttons', link: 'buttons' },
        // { text: 'Layout', link: 'layout' },
      ],
    },
    {
      text: 'Types',
      base: '/types/',
      items: [
        { text: 'Content Type', link: 'content-type' },
        { text: 'Cookies Type', link: 'cookies-type' },
        { text: 'Callback Type', link: 'callback-type' },
      ],
    },
  ]
}

// function sidebarReference(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: 'Reference',
//       items: [
//         { text: 'Site Config', link: 'site-config' },
//         { text: 'Frontmatter Config', link: 'frontmatter-config' },
//         { text: 'Runtime API', link: 'runtime-api' },
//         { text: 'CLI', link: 'cli' },
//         {
//           text: 'Default Theme',
//           base: '/reference/default-theme-',
//           items: [
//             { text: 'Overview', link: 'config' },
//             { text: 'Nav', link: 'nav' },
//             { text: 'Sidebar', link: 'sidebar' },
//             { text: 'Home Page', link: 'home-page' },
//             { text: 'Footer', link: 'footer' },
//             { text: 'Layout', link: 'layout' },
//             { text: 'Badge', link: 'badge' },
//             { text: 'Team Page', link: 'team-page' },
//             { text: 'Prev / Next Links', link: 'prev-next-links' },
//             { text: 'Edit Link', link: 'edit-link' },
//             { text: 'Last Updated Timestamp', link: 'last-updated' },
//             { text: 'Search', link: 'search' },
//             { text: 'Carbon Ads', link: 'carbon-ads' }
//           ]
//         }
//       ]
//     }
//   ]
// }
