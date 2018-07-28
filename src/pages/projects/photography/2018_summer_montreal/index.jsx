import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../../../components/Header'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const images = [
      '2018_summer_montreal/trapped.jpg',
      '2018_summer_montreal/wedding.jpeg',
      '2018_summer_montreal/birdattack.jpg',
      '2018_summer_montreal/happy.jpg',
      '2018_summer_montreal/calm.jpeg',
      '2018_summer_montreal/funeral.jpeg',
      '2018_summer_montreal/violonsonthefloor.jpg',
      '2018_summer_montreal/devileye.jpg',
    ]

    return (
      <div>
        <Header />
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
