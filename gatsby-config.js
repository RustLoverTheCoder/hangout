const languages = require("./src/locales/languages")
const EN = require("./src/locales/en")
const ZH = require("./src/locales/zh")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `再度相会的地方`,
    description: `在这里，您可以加入校园俱乐部、游戏群组，或是世界级艺术社区。在这里，您也能邀三五好友一起共度欢乐时光。在这里，您可以轻而易举地每日谈天说地，时常消遣娱乐。`,
    author: `pupu`,
    siteUrl: `https://hangoutmain.gatsbyjs.io/`,
    languages,
    EN,
    ZH
  },
  developMiddleware: app => {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://ec2-18-163-196-99.ap-east-1.compute.amazonaws.com:3000",
        changeOrigin:true,
        pathRewrite: {
          "^/api": "",
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `哔啵`,
        short_name: `哔啵`,
        start_url: `/`,
        background_color: `#36393f`,
        theme_color: `#36393f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-use-query-params",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true
      }
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
        prefixDefault: false
      }
    }
  ]
}
