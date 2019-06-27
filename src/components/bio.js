/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(absolutePath: { regex: "/GitHub-Mark-120px-plus.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: "column",
        alignItems: "center",
        marginBottom: rhythm(2.5)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <p
        style={{
          marginBottom: rhythm(0.5)
        }}
      >
        I'm <strong>{author}</strong>. I am a web developer, who also likes to
        write articles. This is my blog!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          margin: 0,
          width: "100%"
        }}
      >
        <a
          href={`https://github.com/${social.github}`}
          style={{ backgroundImage: "initial" }}
        >
          <Image
            fixed={data.github.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 25,
              borderRadius: `100%`
            }}
            imgStyle={{
              borderRadius: `50%`
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Bio;
