import styled from "styled-components";
import { Link } from "gatsby";

import "./index.css";

export const LinkHome = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.div`
  background-color: var(--backgroundColor);
  color: var(--textColor);
  transition: background-color 0.25s ease, color 0.25s ease;

  min-height: 100vh;

  & a {
    color: var(--primary);
  }
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--rhythm);
  max-width: calc(var(--rhythm) * 24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
