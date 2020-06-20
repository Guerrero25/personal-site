/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = function ({ actions, graphql }) {
  const ProjectTemplate = path.resolve("./src/templates/Project.tsx");

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 10000) {
            edges {
              node {
                frontmatter {
                  path
                  type
                  category
                  tags
                  published
                }
              }
            }
          }
        }
      `).then(({ errors, data }) => {
        if (errors) {
          console.log(errors); // eslint-disable-line no-console
          reject(errors);
        }
        const {
          allMarkdownRemark: { edges },
        } = data;

        const publishedProjects = edges.filter(
          ({
            node: {
              frontmatter: { published, type },
            },
          }) => published === true && type === "project"
        );

        publishedProjects.forEach(
          ({
            node: {
              frontmatter: { path },
            },
          }) => {
            actions.createPage({
              path,
              component: ProjectTemplate,
            });
          }
        );
      })
    );
  });
};
