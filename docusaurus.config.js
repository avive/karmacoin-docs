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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
        additionalLanguages: ['protobuf'],
        theme: require('prism-react-renderer/themes/dracula')
    },
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
          position: 'left',
          className: 'header-link',
          label: 'Airdrop',
          to: '/airdrop',
        },
        {
          position: 'left',
          className: 'header-link',
          label: 'Jobs',
          to: '/jobs',
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
              label: 'Economics',
              href: '/docs/tokenomics',
            }
          ],
        },
        {
          title: 'Misc',
          items: [
            {
              label: 'LinkTree',
              href: 'https://linktr.ee/karmaco.in',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by the Karma Coin Authors. This work is licensed under the <a href="/docs/license"> Karma Coin License</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Karma Coin-docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Karma Coin-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
