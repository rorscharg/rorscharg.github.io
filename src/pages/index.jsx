import React from 'react'
import get from 'lodash/get'
import Header from '../components/Header'
import Layout from '../../components/Layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <div>
          <Header />
          <img
            src="/projects/photography/2017_fall_montreal/back_turned.jpg"
            style={imageStyle}
            alt="back_turned.jpg"
          />
        </div>
      </Layout>
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
