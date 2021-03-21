import React from "react";

import { BlogPostPreview } from "../BlogPostPreview/BlogPostPreview";

export function BlogPostPreviews({ posts }) {
  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.frontmatter.slug;
    return (
      <BlogPostPreview node={node} title={title} key={node.frontmatter.slug} />
    );
  });
}
