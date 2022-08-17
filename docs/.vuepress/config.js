const { defaultTheme } = require('@vuepress/theme-default')
const { socialSharePlugin } = require(`vuepress-plugin-social-share`)
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { usePagesPlugin } = require('vuepress-plugin-use-pages')

module.exports = {
  lang: 'de-DE',
  title: 'Draussenfunker.de | QRV im Grünen',
  description: 'Wir sind eine Gruppe von Funkamateuren die sich mit dem Thema Funken im Freien beschäftigen.',
  plugins: [
    usePagesPlugin({ startsWith: '/aktivitaeten/'}),
    socialSharePlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],
  theme: defaultTheme({
    sidebarDepth: 2,
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
      {
        text: 'Aktivitäten',
        link: '/aktivitaeten',
      },
      {
        text: 'DIY',
        children: [
            '/diy/teleskop-viertelwellen-vertical'
        ],
      },
      // NavbarGroup
      {
        text: 'Wissenswertes',
        children: ['/wissenswertes/amateurfunk', '/wissenswertes/ausbreitung'],
      },
    ],
  }),
}
