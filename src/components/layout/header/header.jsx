import React, { useContext } from "react";
import { Wrapper, Content, Title } from "./header.styled";
import { ThemeSelectorContext } from "../../themer";

export default () => {
  const { toggleTheme } = useContext(ThemeSelectorContext);

  return (
    <Wrapper>
      <Content>
        <Title>Dor Shinar</Title>
        <button onClick={toggleTheme}>Toggle theme</button>
      </Content>
    </Wrapper>
  );
};
