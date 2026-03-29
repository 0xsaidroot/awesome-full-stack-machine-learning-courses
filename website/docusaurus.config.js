// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Awesome ML Courses',
  tagline: 'Curated full stack machine learning engineering courses',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://leehanchung.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/awesome-full-stack-machine-learning-courses/',

  // GitHub pages deployment config.
  organizationName: 'leehanchung',
  projectName: 'awesome-full-stack-machine-learning-courses',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.png',
      navbar: {
        title: 'Awesome ML Courses',
        logo: {
          alt: 'Awesome ML Courses Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            label: 'Home',
            to: '/',
            activeBaseRegex: '/$',
          },
          {
            label: 'Explore',
            to: '/explore',
            activeBaseRegex: '/explore/?$',
          },
          {
            label: 'Learning Paths',
            to: '/learning-paths',
            activeBaseRegex: '/learning-paths/?$',
          },
          {
            href: 'https://github.com/leehanchung/awesome-full-stack-machine-learning-courses',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Explore Courses',
                to: '/explore',
              },
              {
                label: 'Learning Paths',
                to: '/learning-paths',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/leehanchung/awesome-full-stack-machine-learning-courses',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/leehanchung',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Contributing',
                href: 'https://github.com/leehanchung/awesome-full-stack-machine-learning-courses/blob/main/CONTRIBUTING.md',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024-${new Date().getFullYear()} Lee Han Chung. Built with Docusaurus.`,
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

    }),

  plugins: [],
};

module.exports = config;
