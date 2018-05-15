import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../../components/Header'
import PhotographyProjectPreviewBox from '../../../components/PhotographyProjectPreviewBox'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header />

        <PhotographyProjectPreviewBox
          name="Montreal, Fall 2017"
          link="/projects/photography/2017_fall_montreal"
          image="photography/2017_fall_montreal/back_turned.jpg"
          alt="2017_fall_montreal/back_turned.jpg"
        >
          {' '}
        </PhotographyProjectPreviewBox>
        <PhotographyProjectPreviewBox
          name="Beauce, Summer  2017"
          link="/projects/photography/2017_summer_beauce"
          image="photography/2017_summer_beauce/again.jpg"
          alt="2017_summer_beauce/again.jpg"
        >
          {' '}
        </PhotographyProjectPreviewBox>
        <PhotographyProjectPreviewBox
          name="Montreal, Summer 2017"
          link="/projects/photography/2017_summer_montreal"
          image="photography/2017_summer_montreal/love.jpg"
          alt="2017_summer_montreal/love.jpg"
        >
          {' '}
        </PhotographyProjectPreviewBox>
      </div>
    )
  }
}

export default BlogIndex
