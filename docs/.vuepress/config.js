const { defaultTheme } = require("@vuepress/theme-default");
const { socialSharePlugin } = require("vuepress-plugin-social-share");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const { path } = require("@vuepress/utils");
const { usePagesPlugin } = require("vuepress-plugin-use-pages");

const socialShare = socialSharePlugin();

if (typeof socialShare.clientConfigFile === "string") {
  socialShare.clientConfigFile = socialShare.clientConfigFile.replace(/\\/g, "/");
}

module.exports = {
  lang: "de-DE",
  title: "Draussenfunker.de | QRV im Grünen",
  description:
    "Wir sind eine Gruppe von Funkamateuren, die sich mit dem Thema Funken im Freien beschäftigt.",

  plugins: [
    usePagesPlugin({ startsWith: "/aktivitaeten/" }),
    socialShare,
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],

  theme: defaultTheme({
    sidebarDepth: 2,
    contributors: false,
    hostname: "https://draussenfunker.de",

    notFound: ["Sorry, etwas ist schief gelaufen."],
    backToHome: "Zurück zur Startseite",
    lastUpdatedText: "Aktualisiert am",

    navbar: [
      {
        text: "Start",
        link: "/",
      },
      {
        text: "Aktivitäten",
        link: "/aktivitaeten",
      },
      {
        text: "Amateurfunk",
        link: "/amateurfunk",
      },
      {
        text: "Mitmachen",
        link: "/mitmachen",
      },
      {
        text: "DIY",
        children: [
          "/diy/teleskop-viertelwellen-vertical",
          "/diy/efhw",
          "/diy/t2lt",
          "/diy/portabelrucksack",
          "/diy/mic-splitter-ft-891",
        ],
      },
      {
        text: "FAQ",
        link: "/faq",
      },
      {
        text: "Impressum",
        link: "/impressum",
      },
    ],
  }),
};
