const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
   if(node.internal.type === 'MarkdownRemark') {
   const slug = createFilePath({node, getNode, basePath: 'posts'})
   createNodeField({
     node,
     name: 'slug',
     value: slug
   })
   }
 }

 exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
  query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach((node)=>{
    createPage({
        path: node.fields.slug,
        component: path.resolve('./src/layouts/BlogpostLayout.js'),
        context: {
          slug: node.fields.slug
        }
    })
  })
}