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

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/getting-started' },
    // ],
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      // '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MetamorfosiLab/cookies-consent' },
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2014-present Metamorfosi Lab',
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
    // {
    //   text: 'Reference',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/'
    // },
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
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'getting-started' },
      ],
    },
    // {
    //   text: 'Writing',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown Extensions', link: 'markdown' },
    //     { text: 'Asset Handling', link: 'asset-handling' },
    //     { text: 'Frontmatter', link: 'frontmatter' },
    //     { text: 'Using Vue in Markdown', link: 'using-vue' },
    //     { text: 'Internationalization', link: 'i18n' }
    //   ]
    // },
    // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
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
