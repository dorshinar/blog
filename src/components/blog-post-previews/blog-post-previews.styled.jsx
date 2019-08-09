import styled from "styled-components";

import { rhythm } from "../../utils/typography";

export const Separator = styled.hr`
  margin: ${rhythm(1)} 0;
  background-color: ${props => props.theme.separatorColor};
`;
