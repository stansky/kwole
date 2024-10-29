/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kwole.com`,
    siteUrl: `https://www.kwole.com`,
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "GA-TRACKING_ID", 
          "AW-CONVERSION_ID", 
          "DC-FLOODIGHT_ID", 
        ]
      },
      
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: "src/images/icon.png", 
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
