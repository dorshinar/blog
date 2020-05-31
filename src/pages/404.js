import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import SEO from "../components/seo";

const Content = styled.div`
  padding: calc(var(--rhythm) * 0.5);
`;

export default () => (
  <>
    <SEO title="404: Not Found" />
    <Content>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
