module.exports = {
  siteMetadata: {
    title: `Dor Shinar`,
    author: `Dor Shinar`,
    description: `My Personal blog for thoughts.`,
    siteUrl: "http://10.0.0.27:8000",
    social: {
      github: `dorshinar`,
      linkedin: "dor-shinar-82b00b144",
      dev: "dorshinar",
      stackoverflow: "3822311/dor-shinar"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
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
        icons: [
          {
            src: "static/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "static/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "static/android-chrome-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "static/android-chrome-32x32.png",
            sizes: "32x32",
            type: "image/png"
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#1ca086"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.jsx`)
      }
    }
  ]
};
