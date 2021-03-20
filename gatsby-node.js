const path = require(`path`);
const readingTime = require("reading-time");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post/blog-post.jsx`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              title
              slug
              published
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMdx.nodes;

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === 0 ? null : posts[index - 1];
      const next = index === posts.length - 1 ? null : posts[index + 1];

      createPage({
        path: post.frontmatter.slug,
        component: blogPost,
        context: {
          id: post.id,
          slug: post.frontmatter.slug,
          previous,
          next,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.rawBody),
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path === "/") {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        published:
          process.env.NODE_ENV === "production" ? [true] : [false, true],
      },
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      slug: String
      published: Boolean
    }
    type Fields {
      readingTime: ReadingTime
    }
    type ReadingTime {
      text: String
    }
  `);
};
