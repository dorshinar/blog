import styled from "styled-components";

import { scale } from "../../utils/typography";
import media from "../../components/themer/media";

export const Wrapper = styled.div`
  --spacing: calc(var(--rhythm) * 0.5);

  padding-right: var(--spacing);
  padding-left: var(--spacing);

  ${media.medium`
    padding-right: 0;
    padding-left: 0;
  `}
`;

export const Header = styled.h1`
  margin-top: var(--rhythm);
  margin-bottom: 0;
`;

export const SubHeader = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: var(--rhythm);
`;

export const Post = styled.div`
  & > p > img {
    margin-bottom: 0;
  }

  & .gatsby-resp-image-wrapper,
  & img:not([class]) {
    margin-right: calc(var(--spacing) * -1) !important;
    margin-left: calc(var(--spacing) * -1) !important;
  }

  & img:not([class]) {
    max-width: calc(100% + (var(--spacing) * 2));
  }

  & pre[class*="language-"] {
    margin-right: calc(var(--spacing) * -1);
    margin-left: calc(var(--spacing) * -1);

    padding-right: var(--spacing);
    padding-left: var(--spacing);
  }

  & code[class*="language-"] {
    white-space: pre-wrap;
  }

  ${media.medium`
    & .gatsby-resp-image-wrapper,
    & img:not([class]) {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    & img:not([class]) {
      max-width: 100%;
    }
    
    & pre[class*="language-"] {
      margin-right: auto;
      margin-left: auto;
      border-radius: 5px;
    }
  `}

  & .command-line-prompt {
    border-right: 0;
    margin-right: 0;
  }

  & :not(pre) > code[class*="language-"] {
    border-radius: 0.3em;
  }

  /* Prompt for all users */
  & .command-line-prompt > span:before {
    content: "$";
  }

  & blockquote {
    margin-left: calc(var(--spacing) * -1);
    border-left: 0.4rem solid var(--blockquoteColor);
    padding: 1rem;
  }

  & .gatsby-highlight-code-line {
    display: block;
    margin-right: calc(var(--spacing) * -1);
    margin-left: calc(var(--spacing) * -1);
    padding-right: var(--spacing);
    padding-left: var(--spacing);
    background-color: #ffffff38;
  }

  & li {
    margin-bottom: 0;
  }

  & .header path {
    fill: var(--primary);
  }
`;

export const NearByPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

export const PostLink = styled.li``;
