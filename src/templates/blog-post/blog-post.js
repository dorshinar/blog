import React from "react";
import { Link, graphql } from "gatsby";

import { Bio } from "../../components/bio";
import SEO from "../../components/seo";
import { ScrollIndicator } from "../../components/scroll-indicator";
import { Separator } from "../../utils/styled/separator";
import { BuyMeACoffee } from "../../components/buy-me-a-coffee/buy-me-a-coffee";
import Layout from "../../components/layout/layout";

import {
  Header,
  SubHeader,
  Post,
  NearByPosts,
  PostLink,
  Wrapper,
} from "./blog-post.styled";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <ScrollIndicator />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          slug={post.fields.slug}
          thumbnail={post.frontmatter.thumbnail}
        />
        <Wrapper>
          <Header data-p="post-title">{post.frontmatter.title}</Header>
          <SubHeader>
            {`${post.frontmatter.date}, ${post.fields.readingTime.text}`}
          </SubHeader>
          <Post dangerouslySetInnerHTML={{ __html: post.html }} />
          <BuyMeACoffee />
          <Separator />
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
        </Wrapper>
      </Layout>
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
        thumbnail: cover_image {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
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
