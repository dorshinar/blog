import React from "react";
import { BlogPostPreview } from "../blog-post-preview";
import { Separator } from "./blog-post-previews.styled";

export default ({ posts }) =>
  posts.map(({ node }, index, array) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <>
        <BlogPostPreview key={node.fields.slug} node={node} title={title} />
        {index !== array.length - 1 && <Separator />}
      </>
    );
  });
