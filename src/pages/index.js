import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post'
export default () =>{
    return (
        <div>
            <Header />
            <div className="container">
               <Post />
            </div>
            <Footer/>
        </div>
    )
} 
