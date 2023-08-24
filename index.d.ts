declare module "*.mdx" {
  import { PostMeta } from "./src/types/Post";

  export const meta: Record<string, unknown>;

  import { MDXProps } from "mdx/types";

  /**
   * An function component which renders the MDX content using JSX.
   *
   * @param props This value is be available as the named variable `props` inside the MDX component.
   * @returns A JSX element. The meaning of this may depend on the project configuration. I.e. it
   * could be a React, Preact, or Vuex element.
   */
  export default function MDXContent(props: MDXProps): JSX.Element;
}
