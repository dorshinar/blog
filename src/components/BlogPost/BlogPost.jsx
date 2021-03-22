import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { Bio } from "../Bio/Bio";
import SEO from "../Seo";
import { ScrollIndicator } from "../ScrollIndicator/ScrollIndicator";
import { Separator } from "../../Separator";
import { BuyMeACoffee } from "../BuyMeACoffee/BuyMeACoffee";
import Layout from "../Layout/Layout";

import "./BlogPost.css";

const CoverImageWrapper = styled.figure`
  margin: 0;
`;
const CoverImageCredit = styled.figcaption`
  text-align: center;
`;

const BlogPostTemplate = (props) => {
  const post = props.data.mdx;
  const { previous, next } = props.pageContext;
  const image = getImage(post.frontmatter.thumbnail);

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
        {post.frontmatter.cover_image_credit &&
          post.frontmatter.cover_image_alt && (
            <CoverImageWrapper>
              <GatsbyImage
                image={image}
                alt={post.frontmatter.cover_image_alt}
              ></GatsbyImage>
              <CoverImageCredit>
                <ReactMarkdown>
                  {post.frontmatter.cover_image_credit}
                </ReactMarkdown>
              </CoverImageCredit>
            </CoverImageWrapper>
          )}
        <MDXRenderer>{post.body}</MDXRenderer>
        <BuyMeACoffee />
      </article>
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
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AVIF, WEBP, AUTO]
            )
          }
        }
        cover_image_credit
        cover_image_alt
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
