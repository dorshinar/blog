import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { StyledFooter } from "./footer.styled";

export default () => (
  <StyledFooter>
    © {new Date().getFullYear()} Dor Shinar, Built with
    {` `}
    <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>
  </StyledFooter>
);
