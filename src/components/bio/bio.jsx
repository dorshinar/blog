/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useMemo, memo } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { ThemeSelectorContext } from "../themer/themer";

import {
  Wrapper,
  ProfileImage,
  AboutMe,
  ContactMe,
  PersonalLink,
  ContactImage,
  ContactDevBadge,
  ContactSOBadge,
  ContactTwitterBadge
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
      githubDark: file(
        absolutePath: { regex: "/GitHub-Mark-120px-plus.png/" }
      ) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubLight: file(
        absolutePath: { regex: "/GitHub-Mark-Light-120px-plus.png/" }
      ) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinLight: file(absolutePath: { regex: "/LI-In-Bug - Light.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinDark: file(absolutePath: { regex: "/LI-In-Bug - Dark.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rssLight: file(absolutePath: { regex: "/rss-512-light/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rssDark: file(absolutePath: { regex: "/rss-512-dark/" }) {
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

  const themeContext = useContext(ThemeSelectorContext);

  const [githubIcon, linkedinIcon, rssIcon] = useMemo(
    () =>
      themeContext.themeName === "dark"
        ? ["githubLight", "linkedinLight", "rssLight"]
        : ["githubDark", "linkedinDark", "rssDark"],
    [themeContext.themeName]
  );

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
      <ContactMe>
        <PersonalLink
          href={`https://github.com/${social.github}`}
          aria-label={"Github"}
        >
          <ContactImage
            fixed={data[githubIcon].childImageSharp.fixed}
            alt={author}
          />
        </PersonalLink>
        <PersonalLink
          href={`https://twitter.com/${social.twitter}`}
          aria-label={"Twitter"}
        >
          <ContactTwitterBadge
            alt={author}
            themeName={themeContext.themeName}
          />
        </PersonalLink>
        <PersonalLink
          href={`https://www.linkedin.com/in/${social.linkedin}`}
          aria-label={"Linkedin"}
        >
          <ContactImage
            fixed={data[linkedinIcon].childImageSharp.fixed}
            alt={author}
          />
        </PersonalLink>
        <PersonalLink
          href={`https://dev.to/${social.dev}`}
          aria-label={"Dev.to"}
        >
          <ContactDevBadge alt={author} themeName={themeContext.themeName} />
        </PersonalLink>
        <PersonalLink
          href={`https://stackoverflow.com/users/${social.stackoverflow}`}
          aria-label={"StackOverflow"}
        >
          <ContactSOBadge alt={author} themeName={themeContext.themeName} />
        </PersonalLink>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          <ContactImage
            fixed={data[rssIcon].childImageSharp.fixed}
            alt={"RSS Feed"}
          />
        </a>
      </ContactMe>
    </Wrapper>
  );
};

export default memo(Bio);
