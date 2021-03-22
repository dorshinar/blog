/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

function SEO({ description, lang, meta, title, slug, thumbnail }) {
  const { site, avatar } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            social {
              twitter
            }
          }
        }
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 1200, layout: FIXED)
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const url = `${site.siteMetadata.siteUrl}${slug}/`;
  const imageSrc = getSrc(thumbnail) || getSrc(avatar);
  const imageUrl = new URL(imageSrc, site.siteMetadata.siteUrl);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta}
    >
      {/* General Tags */}
      <meta name="description" content={metaDescription} />

      {/* OpenGraph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={"website"} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card Tags */}
      <meta
        name="twitter:card"
        content={thumbnail ? "summary_large_image" : "summary"}
      />
      <meta
        name="twitter:creator"
        content={`@${site.siteMetadata.social.twitter}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Google Search Tags */}
      <meta
        name="google-site-verification"
        content="Y0r9c_KfP6Wl0eYoavd1q6mHA60nmGZKbRuQ3e43Cb8"
      />

      {meta}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  slug: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  thumbnail: PropTypes.object,
};

export default SEO;
