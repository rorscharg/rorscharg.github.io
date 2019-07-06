import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { StaticQuery, graphql } from 'gatsby'
import './layouts.scss'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page-container">
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <Header />
        <div className="content-wrap">
          {children}
          <Footer />
        </div>
      </div>
    )}
  />
)
