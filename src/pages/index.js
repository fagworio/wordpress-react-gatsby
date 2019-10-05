import React from "react"
import { graphql } from 'gatsby'
import PrimayLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'

export default ({data}) =>{
  return (
  <PrimayLayout col="col-xs-6">
    { 
      data.posts.nodes.map(post=>(
        <Post key={post.id}
          title={post.title}
          image={post.featured_media.source_url} 
          excerpt={post.excerpt}
          readMore={post.slug} 
        />
      )) 
    }
  </PrimayLayout>
  )
} 

export const query = graphql`
query {
  posts: allWordpressPost {
    nodes {
      id
      slug
      title
      excerpt
      date
      featured_media {
        source_url
      }
      author {
        name
        slug
      }
    }
  }
}
`