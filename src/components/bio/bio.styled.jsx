import styled from "styled-components";
import { rhythm } from "../../utils/typography";
import Image from "gatsby-image";
import DevBadge from "../../../content/assets/dev-badge.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rhythm(2.5)};
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

export const ContactMe = styled.div`
  display: flex;
  justify-content: start;
  margin: 0;
  width: 100%;
`;

export const PersonalLink = styled.a`
  background-image: initial;
`;

export const ContactImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: 25px;
  height: 25px;
`;

export const ContactDevBadge = styled(DevBadge)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: 25px;
  height: 25px;
`;
