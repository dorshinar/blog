import styled from "styled-components";
import { rhythm } from "../../utils/typography";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.headerBackgroundColor};
  border-radius: 25px;
  padding: ${rhythm(0.5)};
`;

export const Header = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

export const PostLink = styled(Link)`
  color: ${props => props.theme.primary};
  text-decoration: none;
`;

export const PostInfo = styled.small``;

export const PostDescription = styled.p`
  margin-bottom: 0;
`;
