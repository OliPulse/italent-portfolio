module.exports = {
  siteMetadata: {
    title: `Oliver Maenen`,
    description: `I-talent portfolio van Oliver Maenen`,
    author: `Oliver Maenen`,
    siteUrl: `https://olivermaenen.me`,
    image: `/images/CV-foto.png`,

  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
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
        icon: `src/assets/images/logo-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {},
          },
        ],
      },
    },
    "gatsby-remark-autolink-headers",
  ],
}
