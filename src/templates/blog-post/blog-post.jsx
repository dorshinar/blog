import React from "react";
import { Link, graphql } from "gatsby";

import { Bio } from "../../components/bio/bio";
import SEO from "../../components/seo";
import { ScrollIndicator } from "../../components/scroll-indicator/scroll-indicator";
import { Separator } from "../../utils/styled/separator";
import { BuyMeACoffee } from "../../components/buy-me-a-coffee/buy-me-a-coffee";
import Layout from "../../components/layout/layout";

import "./blog-post.css";

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
        <article className="blog-post-wrapper">
          <h2 data-p="post-title">{post.frontmatter.title}</h2>
          <p className="subtitle">
            {`${post.frontmatter.date}, ${post.fields.readingTime.text}`}
          </p>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <BuyMeACoffee />
          <Separator />
          <Bio />
          <ul className="near-by-posts">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </article>
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
            gatsbyImageData(width: 1200)
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
