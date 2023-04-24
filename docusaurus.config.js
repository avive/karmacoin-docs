module.exports = {
  title: 'Karma Coin',
  tagline: 'The coin for all of us',
  url: 'https://karmaco.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'icon.png',
  organizationName: 'avive', // GitHub org/user name.
  projectName: 'KarmaCoin-docs', // repo name.
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'MH4M9KEK96',

      // Public API key: it is safe to commit it
      apiKey: '2e68a17c8c282f9f925ed608bdb77e2c',

      indexName: 'karmaco',

      // Optional: see doc section below
      // contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'karmaco.in',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      /*
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },*/

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'false',

      //... other Algolia params
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
        additionalLanguages: ['protobuf'],
        theme: require('prism-react-renderer/themes/dracula')
    },
    scripts: [
      ],
    navbar: {
      title: 'Karma Coin',
      logo: {
        alt: 'Karma Coin Logo',
        src: 'icon.png',
      },
      items: [
        {
          position: 'left',
          className: 'header-link',
          label: 'Team',
          to: '/team',
        },
        {
          position: 'left',
          className: 'header-link',
          label: 'For Validators',
          to: '/validators',
        },
        {
          position: 'left',
          className: 'header-link',
          label: 'For Communities',
          to: '/communities',
        },
        {
          position: 'left',
          className: 'header-link',
          label: 'Docs',
          to: '/docs',
        },
        {
          position: 'left',
          className: 'header-link',
          label: 'Karmachain',
          to: '/karmachain',
        },

        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'http://bit.ly/3z9fvNe',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/karmacoin',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TeamKarmaCoin',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/+YDBZLJNknFM4YTE0',
            },
            {
              label: 'Blog',
              href: 'https://connect.karmaco.in/',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              href: '/docs',
            },
            {
              label: 'For Validators',
              href: '/validators',
            },
            {
              label: 'For Communities',
              href: '/communities',
            },
          ],
        },
        {
          title: 'Tech',
          items: [
              {
              label: 'Code',
              href: 'https://github.com/karma-coin',
            },
            {
              label: 'Karmachain',
              href: '/karmachain',
            },
            {
              label: 'Tech Stack',
              href: '/docs/code/techstack',
            }
          ],
        },
        {
          title: 'Misc',
          items: [
            {
              label: 'LinkTree',
              href: 'https://linktr.ee/karmaco.in',
            },
            {
              label: 'Economics',
              href: '/docs/tokenomics',
            }
          ],
        },
      ],
      copyright: `☥ Copyright © ${new Date().getFullYear()} by the Karma Coin Authors. This work is licensed under the <a href="/docs/license"> Karma Coin License</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/avive/karmacoin-docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/avive/karmacoin-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-1D42G0L4SS',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
