/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, memo } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeSelectorContext } from "../themer/themer";

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
      <Contact>
        <PersonalLink
          href={`https://github.com/${social.github}`}
          aria-label={"Github"}
        >
          <ContactGithubBadge alt={author} />
        </PersonalLink>
        <PersonalLink
          href={`https://twitter.com/${social.twitter}`}
          aria-label={"Twitter"}
        >
          <ContactTwitterBadge alt={author} />
        </PersonalLink>
        <PersonalLink
          href={`https://www.linkedin.com/in/${social.linkedin}`}
          aria-label={"Linkedin"}
        >
          <ContactLinkedinBadge alt={author} />
        </PersonalLink>
        <PersonalLink
          href={`https://dev.to/${social.dev}`}
          aria-label={"Dev.to"}
        >
          <ContactDevBadge alt={author} />
        </PersonalLink>
        <PersonalLink
          href={`https://stackoverflow.com/users/${social.stackoverflow}`}
          aria-label={"StackOverflow"}
        >
          <ContactSOBadge alt={author} />
        </PersonalLink>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          <ContactRSSBadge alt={author} />
        </a>
      </Contact>
    </Wrapper>
  );
};

export default memo(Bio);
