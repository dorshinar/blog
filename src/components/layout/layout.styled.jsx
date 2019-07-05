import styled, { css } from "styled-components";
import { rhythm, scale } from "../../utils/typography";
import { Link } from "gatsby";

export const headerProps = css`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PrimaryHeader = styled.h1`
  ${() => scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  ${headerProps}
`;

export const LinkHome = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

export const SecondaryHeader = styled.h3`
  ${headerProps}
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;
