/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  Wrapper,
  ProfileImage,
  AboutMe,
  ContactMe,
  PersonalLink,
  ContactImage,
  ContactDevBadge
} from "./bio.styled";
import { ThemeSelectorContext } from "../themer/themer";

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
      linkedin: file(absolutePath: { regex: "/LI-In-Bug.png/" }) {
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
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  const themeContext = useContext(ThemeSelectorContext);
  const githubIcon = useMemo(
    () => (themeContext.themeName === "dark" ? "githubLight" : "githubDark"),
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
        <PersonalLink href={`https://github.com/${social.github}`}>
          <ContactImage
            fixed={data[githubIcon].childImageSharp.fixed}
            alt={author}
          />
        </PersonalLink>
        <PersonalLink href={`https://www.linkedin.com/in/${social.linkedin}`}>
          <ContactImage
            fixed={data.linkedin.childImageSharp.fixed}
            alt={author}
          />
        </PersonalLink>
        <PersonalLink href={`https://dev.to/${social.dev}`}>
          <ContactDevBadge alt={author} theme={themeContext.themeName} />
        </PersonalLink>
      </ContactMe>
    </Wrapper>
  );
};

export default Bio;
