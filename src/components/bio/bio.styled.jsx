import React from "react";
import styled, { css } from "styled-components";
import Image from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDev,
  faStackOverflow,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

import { rhythm } from "../../utils/typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rhythm(1)};
  padding: ${rhythm(0.5)};
`;

export const ProfileImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50;
  border-radius: 100%;
`;

export const AboutMe = styled.p`
  margin-bottom: ${rhythm(0.5)};
`;

export const Contact = styled.div`
  display: flex;
  justify-content: start;
  margin: 0;
  width: 100%;
`;

export const PersonalLink = styled(OutboundLink)`
  background-image: initial;
  margin-right: ${rhythm(1)};

  color: unset;
`;

const getStyledIcon = (icon, hoverColor) => styled(({ ...rest }) => (
  <FontAwesomeIcon icon={icon} {...rest} />
))`
  margin-bottom: 0;
  font-size: 150%;

  & path {
    fill: ${({ theme: { icon } }) => icon};

    transition: fill 0.3s ease;
  }

  &:hover {
    & path {
      fill: ${hoverColor};
    }
  }
`;

export const ContactGithubBadge = getStyledIcon(faGithub, "rgb(173, 155, 198)");
export const ContactTwitterBadge = getStyledIcon(
  faTwitter,
  "rgb(29, 161, 242)"
);
export const ContactLinkedinBadge = getStyledIcon(faLinkedin, "#0077B5");
export const ContactDevBadge = getStyledIcon(faDev, "#f783ac");
export const ContactSOBadge = getStyledIcon(faStackOverflow, "#F48024");
export const ContactRSSBadge = getStyledIcon(faRss, "#fd7e14");
