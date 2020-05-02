module.exports = {
  title: 'VLC Stream and Remote',
  tagline: 'Get smart with VLC Stream and Remote',
  url: 'https://codefromdude.com',
  baseUrl: '/vlc-docs/',
  favicon: 'img/favicon.png',
  organizationName: 'gokuldroid', // Usually your GitHub org/user name.
  projectName: 'vlc-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VLC stream and remote',
      logo: {
        alt: 'VLC stream and remote',
        src: 'img/vlc_stream_remote.png',
      },
      links: [
        {
          to: 'docs/windows_setup',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://play.google.com/store/apps/details?id=tuple.me.vlcremote&hl=en_IN',
          label: 'Download from Playstore',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} VLC stream and remote`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
