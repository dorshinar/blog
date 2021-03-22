import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  faGithub,
  faDev,
  faStackOverflow,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Bio.css";

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 200, height: 200, layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            linkedin
            dev
            stackoverflow
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  return (
    <div className="bio-wrapper">
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        className="profile-image"
        alt={author}
      />
      <p className="about">
        I&apos;m <strong>{author}</strong>. I am a web developer, who also likes
        to write articles. This is my blog!
      </p>
      <address data-p="contact">
        <OutboundLink
          className="social-link"
          href={`https://github.com/${social.github}`}
          aria-label={"Github"}
          data-p="github"
        >
          <FontAwesomeIcon
            className="social-link-icon github"
            alt={author}
            icon={faGithub}
          />
        </OutboundLink>
        <OutboundLink
          className="social-link"
          href={`https://twitter.com/${social.twitter}`}
          aria-label={"Twitter"}
          data-p="twitter"
        >
          <FontAwesomeIcon
            className="social-link-icon twitter"
            alt={author}
            icon={faTwitter}
          />
        </OutboundLink>
        <OutboundLink
          className="social-link"
          href={`https://www.linkedin.com/in/${social.linkedin}`}
          aria-label={"Linkedin"}
          data-p="linkedin"
        >
          <FontAwesomeIcon
            className="social-link-icon linkedin"
            alt={author}
            icon={faLinkedin}
          />
        </OutboundLink>
        <OutboundLink
          className="social-link"
          href={`https://dev.to/${social.dev}`}
          aria-label={"Dev.to"}
          data-p="dev"
        >
          <FontAwesomeIcon
            className="social-link-icon dev"
            alt={author}
            icon={faDev}
          />
        </OutboundLink>
        <OutboundLink
          className="social-link"
          href={`https://stackoverflow.com/users/${social.stackoverflow}`}
          aria-label={"StackOverflow"}
          data-p="stack-overflow"
        >
          <FontAwesomeIcon
            className="social-link-icon stackoverflow"
            alt={author}
            icon={faStackOverflow}
          />
        </OutboundLink>
        <a
          className="social-link"
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"RSS feed"}
          data-p="rss"
        >
          <FontAwesomeIcon
            className="social-link-icon rss"
            alt={author}
            icon={faRss}
          />
        </a>
      </address>
    </div>
  );
};
