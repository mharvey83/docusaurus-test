// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simprints Documentation',
  tagline: 'Open-Source Biometics are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mharvey83.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus-test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mharvey83', // Usually your GitHub org/user name.
  projectName: 'docusaurus-test', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Simprints Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/4208048.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Simprints',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        apiKey:'9fd28d72ab15e2103c4f1a2c74bab627',
        indexName: 'Docusaurus-test',
        appId: 'aZEVC68JVGR', // Optional, if you run the DocSearch crawler on your own
      },
      themeConfig: {
        navbar: {
          items: [
            // highlight-start
            {
              type: 'docsVersionDropdown',
            },
            // highlight-end
          ],
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Areas',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Simprints Website',
                href: 'https://www.simprints.com/',
              },
              {
                label: 'Simprints for Developers',
                href: 'https://sites.google.com/simprints.com/simprints-for-developers/product-overview',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/simprints-technology-ltd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/simprints?lang=en',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Simprints/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
