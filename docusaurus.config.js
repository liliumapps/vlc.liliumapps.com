// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VLC Stream and Remote',
  tagline: 'The smart way to control VLC media player on your computer',
  url: 'https://vlc.liliumapps.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'liliumapps',
  projectName: 'vlc.liliumapps.com',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {sidebarPath: './sidebars.js'},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'VLC Stream and Remote',
        logo: {alt: 'VLC Stream and Remote', src: 'img/vlc_stream_remote.png'},
        items: [
          {to: 'docs/windows_setup', activeBasePath: 'docs', label: 'Docs', position: 'left'},
          {
            href: 'https://play.google.com/store/apps/details?id=tuple.me.vlcremote',
            label: 'Get it on Google Play',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'VLC Stream and Remote',
            items: [
              {label: 'Setup guide', to: 'docs/windows_setup'},
              {label: 'Privacy policy', to: 'privacy'},
            ],
          },
          {
            title: 'Lilium Apps',
            items: [
              {label: 'liliumapps.com', href: 'https://liliumapps.com'},
              {label: 'More apps on Google Play', href: 'https://play.google.com/store/apps/dev?id=6497481824038903914'},
              {label: 'liliumappshq@gmail.com', href: 'mailto:liliumappshq@gmail.com'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Lilium Apps`,
      },
    }),
};

module.exports = config;
