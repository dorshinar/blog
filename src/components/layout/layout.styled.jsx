import styled from "styled-components";
import { Link } from "gatsby";

import { rhythm } from "../../utils/typography";

export const LinkHome = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${({ theme }) => theme.textColor};
  transition: background-color 0.25s ease, color 0.25s ease;

  min-height: 100vh;

  & a {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rhythm(1)};
  max-width: ${rhythm(24)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
