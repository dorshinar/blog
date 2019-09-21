import styled from "styled-components";
import { Link } from "gatsby";

import { rhythm } from "../../utils/typography";

export const Wrapper = styled.div`
  border-radius: 25px;
  padding: ${rhythm(0.5)};
`;

export const Header = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

export const PostLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
`;

export const PostInfo = styled.small``;

export const PostDescription = styled.p`
  margin-bottom: 0;
`;
