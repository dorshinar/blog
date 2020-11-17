import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

function PageNotExists() {
  return (
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
}

export default PageNotExists;
