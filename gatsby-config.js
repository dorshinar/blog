module.exports = {
  siteMetadata: {
    title: `Dor Shinar`,
    author: `Dor Shinar`,
    description: `My Personal blog for thoughts.`,
    siteUrl: "https://dorshinar.me",
    social: {
      github: `dorshinar`,
      linkedin: "dor-shinar-82b00b144",
      dev: "dorshinar",
      stackoverflow: "3822311/dor-shinar",
      twitter: "DorShinar",
      koFi: "https://ko-fi.com/L3L116P44",
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "header",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              prompt: {
                user: "root",
                host: "localhost",
                global: true,
              },
              inlineCodeMarker: ">",
            },
          },
          {
            resolve: "gatsby-remark-behead",
            options: { depth: 1 },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID || "UA-111111111-1",
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dor Shinar's Blog`,
        short_name: `Dor Shinar`,
        start_url: `/`,
        background_color: `#1ca086`,
        theme_color: `#1ca086`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
  ],
};
