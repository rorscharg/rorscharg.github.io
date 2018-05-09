import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../components/Header'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header />
        <div className="index-content">
          <Helmet title={siteTitle} />
          <h1> test </h1>
        </div>
      </div>
    )
  }
}

export default BlogIndex
