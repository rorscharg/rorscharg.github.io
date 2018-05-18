import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../components/Header'
import Card from '../../components/Card'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header />
        <Card
          name="Photography"
          link="/projects/photography/"
          image="projects/photography/2017_fall_montreal/sipping.jpg"
          alt="2017_fall_montreal/sipping.jpg"
        >
          {' '}
        </Card>
        <Card
          name="Programming"
          link="/projects/programming/"
          image="projects/programming.png"
          alt="programming.jpg"
        >
          {' '}
        </Card>
      </div>
    )
  }
}

export default BlogIndex
