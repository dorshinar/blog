import React from "react";
import { graphql } from "gatsby";

import { Bio } from "../components/bio/bio";
import SEO from "../components/seo";
import { BlogPostPreviews } from "../components/blog-post-previews/blog-post-previews";
import Layout from "../components/layout/layout";

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
