// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EOS Developer Documenation',
  tagline: 'Documentation for Developing on EOS Blockchain',
  url: 'https://docs.eosnetwork.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // image under statics directory
  favicon: 'img/cropped-EOS-Network-Foundation-Site-Icon-1-150x150.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eosnetwork', // Usually your GitHub org/user name.
  projectName: 'engineering/developer_documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      zh: {
        label: '中文 Chinese',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh',
      },
      ko: {
        label: '한국어 Korean',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        calendar: 'gregory',
        path: 'ko',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'welcome', // omitted => default instance
          lastVersion: 'current',
          path: 'eosdocs/welcome',
          routeBasePath: 'welcome',
          sidebarPath: require.resolve('./sidebars.js'),
          versions: {
            current: {
               label: 'latest',
               path: 'latest',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cdt',
        lastVersion: 'current',
        path: 'eosdocs/cdt',
        routeBasePath: 'cdt',
        sidebarPath: require.resolve('./sidebarsCdt.js'),
        versions: {
          current: {
             label: 'latest',
             path: 'latest',
          },
        },
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'system-contracts',
        lastVersion: 'current',
        path: 'eosdocs/system-contracts',
        routeBasePath: 'system-contracts',
        sidebarPath: require.resolve('./sidebarsSystemContracts.js'),
        versions: {
          current: {
             label: 'latest',
             path: 'latest',
          },
        },
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leap',
        lastVersion: 'current',
        path: 'eosdocs/leap',
        routeBasePath: 'leap',
        sidebarPath: require.resolve('./sidebarsLeap.js'),
        versions: {
          current: {
             label: 'latest',
             path: 'latest',
          },
        },
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EOS Developer Documenation',
        logo: {
          alt: 'EOS Network',
          src: 'img/eosn_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Welcome',
          },
          {
            type: 'dropdown',
            label: 'Leap',
            position: 'left',
            items: [
              {
                label: 'latest',
                href: 'https://docs.eosnetwork.com/leap/latest/',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'CDT',
            position: 'left',
            items: [
              {
                label: 'latest',
                href: 'https://docs.eosnetwork.com/cdt/latest/',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'EOS System Contracts',
            position: 'left',
            items: [
              {
                label: 'latest',
                href: 'https://docs.eosnetwork.com/system-contracts/latest/',
              },
              // ... more items
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/eosnetworkfoundation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        /* closes sibling categories when expanding a category */
        sidebar: { autoCollapseCategories: true, },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Websites',
            items: [
              { label: 'EOS Network',
                href: 'https://eosnetwork.com/',
              },
              { label: 'EOS Support',
                href: 'https://eossupport.io/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/eosnfoundation',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/eos-network',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/EOSNetworkFoundation',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/c/everythingeos',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EOS Network.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
