// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes, themes} from 'prism-react-renderer';

// This runs in Node.js

const config = {
  title: 'Under Constructon',
  tagline: 'Simplifying Healthcare, Empowering You',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.medibound.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  baseUrl: '/',

  projectName: 'docs',
  organizationName: 'medibound',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './docs/sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/medibound/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true
      },
      // Replace with your project's social card
      image: 'img/medibound-social-card.jpg',
      navbar: {
        title: 'medibound',

        logo: {
          alt: 'Medibound Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/medibound/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://creator.medibound.com',
            label: 'Creator',
            position: 'right',
          },
          {
            href: 'https://medibound.com',
            label: 'Main Site',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Hardware Support',
                to: '/docs/hardware-support',
              },
              {
                label: 'Understand The Basics',
                to: '/docs/understand-basics',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Medibound Stories',
                href: 'https://medibound.com/stories',
              },
             
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/medibound/docs',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/medibound',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/medibound',
              },
              {
                label: 'Medibound',
                href: 'https://medibound.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Medibound, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
