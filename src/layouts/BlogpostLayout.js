import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogpostLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <div>
            This is our blogpostlayout
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  
  )
}

export default BlogpostLayout
