import React, { useContext } from "react";
import {
  Wrapper,
  Content,
  Title,
  HomeLink,
  StyledToggle
} from "./header.styled";
import { ThemeSelectorContext } from "../../themer";

import "react-toggle/style.css";
import "./header.css";

export default () => {
  const { toggleTheme, themeName } = useContext(ThemeSelectorContext);

  return (
    <Wrapper>
      <Content>
        <HomeLink to="/">
          <Title>Dor Shinar</Title>
        </HomeLink>
        <StyledToggle
          defaultChecked={themeName === "dark"}
          onClick={toggleTheme}
        />
      </Content>
    </Wrapper>
  );
};
