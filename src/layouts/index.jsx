import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './layouts.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="page-container">
        <Helmet title={siteTitle} />
        <Header />
        <div className="content-wrap">
        {children()}
        <Footer />
        </div>
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
