const {
  DESCRIPTION,
  TITLE,
  AUTHOR,
  NAME,
  SHORT_NAME,
  THEME_COLOR,
  BACKGROUND_COLOR,
  SITE_URL,
} = require("./src/constants");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: TITLE,
    description: DESCRIPTION,
    author: AUTHOR,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        output: "/sitemap",
        excludes: ["/portfolio/*", "/blog"],
        filterPages: ({ path }, excludedRoute) =>
          new RegExp(excludedRoute).test(path),
        resolveSiteUrl: () => SITE_URL,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages;
        },
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: new Date().toISOString(),
          };
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: NAME,
        short_name: SHORT_NAME,
        start_url: `/`,
        background_color: BACKGROUND_COLOR,
        theme_color: THEME_COLOR,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/UI/Layout/index.tsx`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
