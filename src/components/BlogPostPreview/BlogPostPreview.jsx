import React from "react";
import { Link } from "gatsby";

import "./BlogPostPreview.css";

export function BlogPostPreview({ node, title }) {
  return (
    <article className="preview-wrapper">
      <h2 className="preview-header">
        <Link className="post-link" to={node.frontmatter.slug}>
          {title}
        </Link>
      </h2>
      <small>{`${node.frontmatter.date}, ${node.fields.readingTime.text}`}</small>
      <p
        className="description"
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </article>
  );
}
