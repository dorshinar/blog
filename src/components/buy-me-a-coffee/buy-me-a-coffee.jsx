import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import "./buy-me-a-coffee.css";

const BuyMeACoffee = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            koFi
          }
        }
      }
    }
  `);
  return (
    <>
      <p className="buy-me-a-coffee">Loved the article?</p>
      <OutboundLink
        href={data.site.siteMetadata.social.koFi}
        rel="noopener noreferrer"
        target="_blank"
        data-p="koFi"
      >
        <img
          height="36"
          style={{ border: "0px", height: "36px" }}
          src="https://az743702.vo.msecnd.net/cdn/kofi4.png?v=2"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
          className="buy-me-a-coffee"
        />
      </OutboundLink>
    </>
  );
};

export { BuyMeACoffee };
