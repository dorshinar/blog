import styled from "styled-components";
import { rhythm } from "../../../utils/typography";
import { Link } from "gatsby";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rhythm(3)};
  background-color: ${props => props.theme.headerBackgroundColor};
`;

export const Content = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${rhythm(24)};
`;

export const Title = styled.h1`
  margin-bottom: 0;
  color: ${props => props.theme.textColor};
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;
