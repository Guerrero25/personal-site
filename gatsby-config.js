const {
  DESCRIPTION,
  TITLE,
  AUTHOR,
  NAME,
  SHORT_NAME,
  THEME_COLOR,
  BACKGROUND_COLOR,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
