import React from "react";
import { Link, graphql } from "gatsby";

import { Bio } from "../../components/bio";
import { Layout } from "../../components/layout";
import SEO from "../../components/seo";
import {
  Header,
  SubHeader,
  Post,
  Divider,
  NearByPosts,
  PostLink
} from "./blog-post.styled";
import { ScrollIndicator } from "../../components/scroll-indicator";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <>
        <ScrollIndicator />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <Header>{post.frontmatter.title}</Header>
          <SubHeader>
            {`${post.frontmatter.date}, ${post.fields.readingTime.text}`}
          </SubHeader>
          <Post dangerouslySetInnerHTML={{ __html: post.html }} />
          <Divider />
          <Bio />

          <NearByPosts>
            <PostLink>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </PostLink>
            <PostLink>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </PostLink>
          </NearByPosts>
        </Layout>
      </>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`;
