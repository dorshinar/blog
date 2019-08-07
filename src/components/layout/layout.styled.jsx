import styled from "styled-components";
import { rhythm } from "../../utils/typography";
import { Link } from "gatsby";

export const LinkHome = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${props => props.theme.textColor};

  & a {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rhythm(1)};
  max-width: ${rhythm(24)};
`;

export const Footer = styled.footer`
  margin-top: ${rhythm(1)};
  padding: ${rhythm(0.5)};
`;
