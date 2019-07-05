import styled from "styled-components";
import { rhythm, scale } from "../../utils/typography";
import { Link } from "gatsby";

export const PrimaryHeader = styled.h1`
  ${() => scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

export const LinkHome = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

export const SecondaryHeader = styled.h3`
  margin-top: 0;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;
