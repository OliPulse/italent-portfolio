module.exports = {
  siteMetadata: {
    title: `Oliver Maenen`,
    description: `I-Talent portfolio van Oliver Maenen`,
    author: `Oliver Maenen`,
    siteUrl: `https://olivermaenen.me`,
    image: `/images/CV-foto.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-image",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oliver Maenen`,
        short_name: `Oliver Maenen`,
        start_url: `/`,
        background_color: `#2d3748`,
        theme_color: `#81E6D9`,
        display: `minimal-ui`,
        icon: `src/assets/images/cv-foto.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    "gatsby-remark-autolink-headers",
  ],
}
