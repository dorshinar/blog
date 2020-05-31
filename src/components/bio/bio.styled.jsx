import styled from "styled-components";
import Image from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--rhythm);
  padding: calc(var(--rhythm) * 0.5);
`;

export const ProfileImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50;
  border-radius: 100%;
`;

export const AboutMe = styled.p`
  margin-bottom: calc(var(--rhythm) * 0.5);
`;

export const Contact = styled.div`
  display: flex;
  justify-content: start;
  margin: 0;
  width: 100%;
`;

export const PersonalLink = styled(OutboundLink)`
  background-image: initial;
  margin-right: var(--rhythm);

  color: unset;
`;

export const ContactGithubBadge = styled(FontAwesomeIcon)`
  margin-bottom: 0;
  font-size: 150%;

  & path {
    fill: var(--icon);

    transition: fill 0.3s ease;
  }

  &:hover {
    & path {
      fill: ${"rgb(29, 161, 242)"};
    }
  }
  &:hover {
    & path {
      fill: ${"rgb(173, 155, 198)"};
    }
  }
`;
export const ContactTwitterBadge = styled(FontAwesomeIcon)`
  margin-bottom: 0;
  font-size: 150%;

  & path {
    fill: var(--icon);

    transition: fill 0.3s ease;
  }

  &:hover {
    & path {
      fill: ${"rgb(29, 161, 242)"};
    }
  }
`;
export const ContactLinkedinBadge = styled(FontAwesomeIcon)`
  margin-bottom: 0;
  font-size: 150%;

  & path {
    fill: var(--icon);

    transition: fill 0.3s ease;
  }

  &:hover {
    & path {
      fill: ${"#0077B5"};
    }
  }
`;
export const ContactDevBadge = styled(FontAwesomeIcon)`
  margin-bottom: 0;
  font-size: 150%;

  & path {
    fill: var(--icon);

    transition: fill 0.3s ease;
  }

  &:hover {
    & path {
      fill: ${"#f783ac"};
    }
  }
`;
export const ContactSOBadge = styled(FontAwesomeIcon)`
  margin-bottom: 0;
  font-size: 150%;

  & path {
    fill: var(--icon);

    transition: fill 0.3s ease;
  }

  &:hover {
    & path {
      fill: ${"#F48024"};
    }
  }
`;
export const ContactRSSBadge = styled(FontAwesomeIcon)`
  margin-bottom: 0;
  font-size: 150%;

  & path {
    fill: var(--icon);

    transition: fill 0.3s ease;
  }

  &:hover {
    & path {
      fill: ${"#fd7e14"};
    }
  }
`;
