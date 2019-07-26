import React from "react";
import { Wrapper, Content, Title } from "./header.styled";

export default () => {
  return (
    <Wrapper>
      <Content>
        <Title>Dor Shinar</Title>
        <button>Toggle theme</button>
      </Content>
    </Wrapper>
  );
};
