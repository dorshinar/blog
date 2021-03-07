import React from "react";

import { BlogPostPreview } from "../blog-post-preview/blog-post-preview";

export function BlogPostPreviews({ posts }) {
  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.frontmatter.slug;
    return (
      <BlogPostPreview node={node} title={title} key={node.frontmatter.slug} />
    );
  });
}
