const { defaultTheme } = require('@vuepress/theme-default')
const { socialSharePlugin } = require(`vuepress-plugin-social-share`)



module.exports = {
  lang: 'de-DE',
  title: 'Draussenfunker.de | QRV im Grünen',
  description: 'Wir sind eine Gruppe von Funkamateuren die sich mit dem Thema Funken im Freien beschäftigen.',
  plugins: [
    socialSharePlugin(),
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
