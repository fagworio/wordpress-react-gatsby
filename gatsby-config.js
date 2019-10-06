/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsy Wordpress',
    description: 'This is our site description',
    keywords: 'Key 1, Key 2, Key 3',
    image: '/static/gatsby.jpg',
    url: 'https://unicorniohater.com.br'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { 
      resolve: `gatsby-transformer-remark`
    },
    { 
      resolve: `gatsby-source-wordpress`,
      options:{
        baseUrl: `codingsrc.com`,
        protocol: `https`,
        hostingWPCOM: false,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Wordpress`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f8f8fa`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
