import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  height: calc(var(--rhythm) * 0.1);
`;

export const Indicator = styled.div.attrs((props) => ({
  style: { width: `${props.width || 0}vw` },
}))`
  height: calc(var(--rhythm) * 0.1);
  background-color: #1ca086;
`;
