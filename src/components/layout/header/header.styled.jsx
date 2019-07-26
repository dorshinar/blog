import styled from "styled-components";
import { rhythm } from "../../../utils/typography";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rhythm(3)};
  background-color: #f6f6f6;
`;

export const Content = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${rhythm(24)};
`;

export const Title = styled.h1`
  margin-bottom: 0;
`;
