import React from "react";
import { BlogPostPreview } from "../blog-post-preview";

export default ({ posts }) =>
  posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return <BlogPostPreview key={node.fields.slug} node={node} title={title} />;
  });
