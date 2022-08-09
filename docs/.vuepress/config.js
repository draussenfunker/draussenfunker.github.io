const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('@vuepress/theme-default')
const { socialSharePlugin } = require(`vuepress-plugin-social-share`)
const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'de-DE',
  title: 'Draussenfunker.de | QRV im Grünen',
  description: 'Wir sind eine Gruppe von Funkamateuren die sich mit dem Thema Funken im Freien beschäftigen.',
  plugins: [
    socialSharePlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: defaultTheme({
    sidebarDepth: 0,
    contributors: false,
    notFound: ['Sorry, etwas ist schief gelaufen.'],
    backToHome: 'Zurück zur Startseite',
    lastUpdatedText: 'Aktualisiert am',
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