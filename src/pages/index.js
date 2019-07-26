import React from "react";
import { graphql } from "gatsby";

import { Bio } from "../components/bio";
import { Layout } from "../components/layout";
import SEO from "../components/seo";
import { BlogPostPreviews } from "../components/blog-post-previews";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyled />
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
