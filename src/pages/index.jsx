import React from "react";
import { graphql } from "gatsby";

import { Bio } from "../components/Bio/Bio";
import SEO from "../components/Seo";
import { BlogPostPreviews } from "../components/BlogPostPreviews/BlogPostPreviews";
import Layout from "../components/Layout/Layout";

const BlogIndex = (props) => {
  const { data } = props;
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      <BlogPostPreviews posts={posts} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery($published: [Boolean!]!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { in: $published } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            slug
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
