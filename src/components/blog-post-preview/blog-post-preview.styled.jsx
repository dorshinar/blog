import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  border-radius: 25px;
  padding: calc(var(--rhythm) * 0.5);
`;

export const Header = styled.h3`
  margin-bottom: calc(var(--rhythm) * 0.25);
`;

export const PostLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
`;

export const PostInfo = styled.small``;

export const PostDescription = styled.p`
  margin-bottom: 0;
`;
