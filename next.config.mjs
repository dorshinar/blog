import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: { dark: "night-owl", light: "github-light" },
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [["rehype-pretty-code", prettyCodeOptions], ["rehype-slug"]],
  },
});
export default withMDX(nextConfig);
