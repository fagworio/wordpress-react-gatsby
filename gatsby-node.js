const path = require('path')
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
      query{
        allWordpressPost {
          nodes {
            slug
          }
        }
      }
    `)
    data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/layouts/BlogpostLayout.js'),
        context: {
          slug: node.slug,
        },
      })
    })
  }
