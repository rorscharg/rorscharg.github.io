import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header />
        <img
          src="/projects/photography/2017_fall_montreal/back_turned.jpg"
          style={imageStyle}
          alt="back_turned.jpg"
        />
        <Footer />
      </div>
    )
  }
}

const imageStyle = {
  display: 'block',
  margin: 'auto',
  maxWidth: '80vw',
  maxHeight: '100vh',
}
export default BlogIndex
