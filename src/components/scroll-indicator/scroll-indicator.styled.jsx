import styled from "styled-components";
import { rhythm } from "../../utils/typography";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  height: ${rhythm(0.1)};
`;

export const Indicator = styled.div.attrs(props => ({
  style: { width: `${props.width || 0}vw` }
}))`
  position: fixed;
  top: 0;
  height: ${rhythm(0.1)};
  background-color: #1ca086;
`;
