import React from "react";
import { BlogPostPreview } from "../blog-post-preview";

export default ({ posts }) =>
  posts.map(({ node }, index, array) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <>
        <BlogPostPreview key={node.fields.slug} node={node} title={title} />
        {index !== array.length - 1 && <hr />}
      </>
    );
  });
