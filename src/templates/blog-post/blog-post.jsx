import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Bio } from "../../components/bio/bio";
import SEO from "../../components/seo";
import { ScrollIndicator } from "../../components/scroll-indicator/scroll-indicator";
import { Separator } from "../../utils/styled/separator";
import { BuyMeACoffee } from "../../components/buy-me-a-coffee/buy-me-a-coffee";
import Layout from "../../components/layout/layout";

import "./blog-post.css";

const BlogPostTemplate = (props) => {
  const post = props.data.mdx;
  const { previous, next } = props.pageContext;

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
        <MDXRenderer>{post.body}</MDXRenderer>
        <BuyMeACoffee />
        <Separator />
        <Bio />
        <ul className="near-by-posts">
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        slug
        thumbnail: cover_image {
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
