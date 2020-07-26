import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout/layout";

export default () => (
  <>
    <Layout>
      <SEO title="404: Not Found" />
      <div style={{ padding: "calc(var(--rhythm) * 0.5)" }}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  </>
);
