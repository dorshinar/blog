import React, { useContext } from "react";
import { Wrapper, Content, Title, HomeLink } from "./header.styled";
import { ThemeSelectorContext } from "../../themer";

export default () => {
  const { toggleTheme } = useContext(ThemeSelectorContext);

  return (
    <Wrapper>
      <Content>
        <HomeLink>
          <Title>Dor Shinar</Title>
        </HomeLink>
        <button onClick={toggleTheme}>Toggle theme</button>
      </Content>
    </Wrapper>
  );
};
