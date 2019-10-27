import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { BuyMeACoffeeSentence } from "./buy-me-a-coffee.styled";

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
      <BuyMeACoffeeSentence>Loved the article?</BuyMeACoffeeSentence>
      <a
        href={data.site.siteMetadata.social.koFi}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          height="36"
          style={{ border: "0px", height: "36px" }}
          src="https://az743702.vo.msecnd.net/cdn/kofi4.png?v=2"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </>
  );
};

export { BuyMeACoffee };
