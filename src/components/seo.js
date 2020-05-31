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
import { useLocation } from "@reach/router";

function SEO({ description, lang, meta, title, slug, thumbnail }) {
  const { site } = useStaticQuery(
    graphql`
      query {
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
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const url = `${site.siteMetadata.siteUrl}${slug}/`;
  const imageSrc = thumbnail && thumbnail.childImageSharp.sizes.src;
  const imageUrl = new URL(
    imageSrc,
    process.env.VERCEL_URL || site.siteMetadata.siteUrl
  );

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
      {thumbnail && <meta property="og:image" content={imageUrl} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={"summary"} />
      <meta
        name="twitter:creator"
        content={`@${site.siteMetadata.social.twitter}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {thumbnail && <meta name="twitter:image" content={imageUrl} />}

      {/* Google Search Tags */}
      <meta
        name="google-site-verification"
        content="Y0r9c_KfP6Wl0eYoavd1q6mHA60nmGZKbRuQ3e43Cb8"
      />
      <link
        rel="dns-prefetch"
        key="dns-prefetch-google-marketing"
        href="https://marketingplatform.google.com"
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
