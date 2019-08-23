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

  & .gatsby-resp-image-wrapper {
    margin-right: -${rhythm(1)} !important;
    margin-left: -${rhythm(1)} !important;
  }

  ${media.medium`
    & .gatsby-resp-image-wrapper {
      margin-right: auto !important;
      margin-left: auto !important;
    }
  `}

  & .command-line-prompt {
    border-right: 0;
    margin-right: 0;
  }

  & :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
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
`;

export const NearByPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

export const PostLink = styled.li``;
