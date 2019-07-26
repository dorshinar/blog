import styled, { css } from "styled-components";
import { rhythm } from "../../utils/typography";
import { Link } from "gatsby";

export const headerProps = css`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkHome = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.div`
  padding-bottom: ${rhythm(1.5)};
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rhythm(1)};
  max-width: ${rhythm(24)};
`;
