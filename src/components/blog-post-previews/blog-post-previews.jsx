import React from "react";

import { BlogPostPreview } from "../blog-post-preview/blog-post-preview";
import { Separator } from "../../utils/styled/separator";

export default ({ posts }) =>
  posts.map(({ node }, index, array) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <React.Fragment key={node.fields.slug}>
        <BlogPostPreview node={node} title={title} />
        {index !== array.length - 1 && <Separator />}
      </React.Fragment>
    );
  });
