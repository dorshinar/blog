import { meta as linting } from "../app/posts/linting-your-react-typescript-project-with-eslint-and-prettier/page.mdx";
import { meta as jestSnapshots } from "../app/posts/why-i-stopped-writing-jest-snapshot-tests/page.mdx";
import { meta as buildingABlog } from "../app/posts/building-a-personal-blog/page.mdx";
import { meta as impossibleState } from "../app/posts/avoid-impossible-state-with-typescript/page.mdx";
import { meta as perfectTeammate } from "../app/posts/be-the-perfect-teammate/page.mdx";
import { meta as themes } from "../app/posts/themes-using-css-variables-and-react-context/page.mdx";
import { meta as ci } from "../app/posts/continuous-integration-with-github-actions-and-puppeteer/page.mdx";
import { meta as guardedCity } from "../app/posts/guarded-city-with-no-defensive-wall-typescript/page.mdx";
import { meta as githubActions } from "../app/posts/creating-github-actions/page.mdx";
import { meta as infiniteScroll } from "../app/posts/infinite-scroll-hook/page.mdx";
import { PostSchema } from "../types/Post";
import { z } from "zod";

export const PostsSchema = z.array(PostSchema);

export function getPosts() {
  return PostsSchema.parse([
    linting,
    jestSnapshots,
    buildingABlog,
    impossibleState,
    perfectTeammate,
    themes,
    ci,
    guardedCity,
    githubActions,
    infiniteScroll,
  ]).sort((first, second) => (first.date > second.date ? -1 : 1));
}
