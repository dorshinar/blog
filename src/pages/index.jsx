import React from "react";
import { graphql } from "gatsby";

import { Bio } from "../components/bio/bio";
import SEO from "../components/seo";
import { BlogPostPreviews } from "../components/blog-post-previews/blog-post-previews";
import Layout from "../components/layout/layout";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO title="All posts" />
        <Bio />
        <BlogPostPreviews posts={posts} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
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
