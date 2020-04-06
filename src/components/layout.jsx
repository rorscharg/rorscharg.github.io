import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { StaticQuery, graphql } from 'gatsby'
import './layouts.scss'
import { FaChevronLeft } from 'react-icons/fa'

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
    render={data => {
      var backgroundColor = 'white';
      if (children && children.props && children.props.style && children.props.style.backgroundColor) {
        backgroundColor = children.props.style.backgroundColor;
      }

      return (<div className="page-container" style={{
        backgroundColor: `${backgroundColor}`
      }}>
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
      )
    }}
  />
)
