/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { memo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  faGithub,
  faDev,
  faStackOverflow,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

import {
  Wrapper,
  ProfileImage,
  AboutMe,
  Contact,
  PersonalLink,
  ContactDevBadge,
  ContactSOBadge,
  ContactTwitterBadge,
  ContactGithubBadge,
  ContactLinkedinBadge,
  ContactRSSBadge
} from "./bio.styled";

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
    <Wrapper>
      <ProfileImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <AboutMe>
        I'm <strong>{author}</strong>. I am a web developer, who also likes to
        write articles. This is my blog!
      </AboutMe>
      <Contact data-p="contact">
        <PersonalLink
          href={`https://github.com/${social.github}`}
          aria-label={"Github"}
          data-p="github"
        >
          <ContactGithubBadge alt={author} icon={faGithub} />
        </PersonalLink>
        <PersonalLink
          href={`https://twitter.com/${social.twitter}`}
          aria-label={"Twitter"}
          data-p="twitter"
        >
          <ContactTwitterBadge alt={author} icon={faTwitter} />
        </PersonalLink>
        <PersonalLink
          href={`https://www.linkedin.com/in/${social.linkedin}`}
          aria-label={"Linkedin"}
          data-p="linkedin"
        >
          <ContactLinkedinBadge alt={author} icon={faLinkedin} />
        </PersonalLink>
        <PersonalLink
          href={`https://dev.to/${social.dev}`}
          aria-label={"Dev.to"}
          data-p="dev"
        >
          <ContactDevBadge alt={author} icon={faDev} />
        </PersonalLink>
        <PersonalLink
          href={`https://stackoverflow.com/users/${social.stackoverflow}`}
          aria-label={"StackOverflow"}
          data-p="stack-overflow"
        >
          <ContactSOBadge alt={author} icon={faStackOverflow} />
        </PersonalLink>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"RSS feed"}
          data-p="rss"
        >
          <ContactRSSBadge alt={author} icon={faRss} />
        </a>
      </Contact>
    </Wrapper>
  );
};

export default memo(Bio);
