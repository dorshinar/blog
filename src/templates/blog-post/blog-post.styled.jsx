import styled from "styled-components";

import { rhythm, scale } from "../../utils/typography";
import { media } from "../../components/themer";

export const Wrapper = styled.div`
  padding-right: ${rhythm(1)};
  padding-left: ${rhythm(1)};

  ${media.medium`
    padding-right: 0;
    padding-left: 0;
  `}
`;

export const Header = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`;

export const SubHeader = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(1)};
`;

export const Post = styled.div`
  & > p > img {
    margin-bottom: 0;
  }

  & .gatsby-resp-image-wrapper,
  & img:not([class]) {
    margin-right: -${rhythm(1)} !important;
    margin-left: -${rhythm(1)} !important;
  }

  & img:not([class]) {
    max-width: calc(100% + ${rhythm(2)});
  }

  & pre[class*="language-"] {
    margin-right: -${rhythm(1)};
    margin-left: -${rhythm(1)};

    padding-right: ${rhythm(1)};
    padding-left: ${rhythm(1)};
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
    margin-left: -${rhythm(1)};
    border-left: 0.4rem solid var(--blockquoteColor);
    padding: 1rem;
  }

  & .gatsby-highlight-code-line {
    display: block;
    margin-right: -${rhythm(1)};
    margin-left: -${rhythm(1)};
    padding-right: ${rhythm(1)};
    padding-left: ${rhythm(1)};
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
