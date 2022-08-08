const { defaultTheme } = require('@vuepress/theme-default')
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { socialSharePlugin } = require(`vuepress-plugin-social-share`)



module.exports = {
  lang: 'de-DE',
  title: 'Draussenfunker.de | QRV im Grünen',
  description: 'Wir sind eine Gruppe von Funkamateuren die sich mit dem Thema Funken im Freien beschäftigen.',
  plugins: [
    activeHeaderLinksPlugin({
      // options
    }),
    backToTopPlugin(),
    socialSharePlugin(),
  ],
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Start',
        link: '/',
      },
      // NavbarGroup
      {
        text: 'Wissenswertes',
        children: ['/wissenswertes/amateurfunk', '/wissenswertes/ausbreitung'],
      },
      {
        text: 'Blog',
        link: '/blog',
      }
    ],
  }),
}