import styled from "styled-components";
import { rhythm } from "../../utils/typography";
import { Link } from "gatsby";

export const Wrapper = styled.div``;

export const Header = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

export const PostLink = styled(Link)`
  box-shadow: none;
`;

export const PostInfo = styled.small``;

export const PostDescription = styled.p``;
