import styled from "styled-components";

import { rhythm } from "../../utils/typography";

export const Separator = styled.hr`
  margin: ${rhythm(1)} 0;
  background-color: ${({ theme }) => theme.separatorColor};
  transition: background-color 0.25s ease;
`;
