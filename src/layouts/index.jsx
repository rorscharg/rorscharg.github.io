import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
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
      <div>
        <Helmet title={siteTitle} />
        {children()}
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
