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

  head: [['link', { rel: 'icon', href: '/cookies-consent/favicon.ico' }]],

  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/getting-started' },
    // ],
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/config/': { base: '/config/', items: sidebarGuide() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MetamorfosiLab/cookies-consent' },
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
