import React from "react"
import { graphql } from 'gatsby'
import PrimayLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'

export default ({data}) =>{
  console.log(data);
  
  return (
  <PrimayLayout col="col-xs-6">
    {data.allMarkdownRemark.nodes.map(node=>(
      <Post key={node.frontmatter.id} title={node.frontmatter.title}
      image={node.frontmatter.image} 
      excerpt={node.excerpt} />

    ))}
  </PrimayLayout>
  )
} 

export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      frontmatter {
        id
        title
        image
        keywords
        date
      }
      excerpt
      html
    }
  }
}
`