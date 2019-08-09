import React from "react";

import { StyledFooter } from "./footer.styled";

export default () => (
  <StyledFooter>
    © {new Date().getFullYear()} Dor Shinar, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
);
