import React from "react";
import {
  Wrapper,
  Header,
  PostLink,
  PostInfo,
  PostDescription
} from "./blog-post-preview.styled";

export default ({ node, title }) => {
  return (
    <Wrapper key={node.fields.slug}>
      <Header>
        <PostLink to={node.fields.slug}>{title}</PostLink>
      </Header>
      <PostInfo>{`${node.frontmatter.date}, ${node.fields.readingTime.text}`}</PostInfo>
      <PostDescription
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt
        }}
      />
    </Wrapper>
  );
};
