import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../components/Header'
import './about.scss'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header />
        <div className="about-container">
          <div className="about-content">
            <h1>Warning:</h1>
            <p>
              {' '}
              If you fumble on this about section, the only thing you really
              need to know is I fall under the raised by the internet archetype.
              If some stereotype comes up in your head they probably apply to me
            </p>
            <h2>Current Interests</h2>
            Programming
            <br />
            Music
            <br />
            Video Games
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex
