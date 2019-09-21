import styled from "styled-components";
import { Link } from "gatsby";
import Toggle from "react-toggle";
import Image from "gatsby-image";

import { rhythm } from "../../../utils/typography";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rhythm(0.5)};
  height: ${rhythm(3)};
  background-color: var(--headerBackgroundColor);
  transition: background-color 0.25s ease;
`;

export const Content = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: var(--contentWidth);
`;

export const Title = styled.h1`
  margin-bottom: 0;
  color: var(--primary);
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;

export const StyledToggle = styled(Toggle)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledSun = styled(Image)`
  top: -50%;
  left: -30%;
`;

export const StyledMoon = styled(Image)`
  top: -50%;
  left: -15%;
`;
