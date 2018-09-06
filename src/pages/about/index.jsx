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
              If you fumble on this about 'section', the only thing you really
              need to know is I fall under the 'raised by the internet'
              archetype. If some stereotype comes up in your head right now,
              they probably apply to me. Living that "spent too much time on
	      the internet, now want to see the world" life.
            </p>
            <h2>Current Interests:</h2>
            Dogs
            <br />
            Programming
            <br />
            Photography
            <br />
            Music
            <br />
            Video Games
            <br />
            Being a Riven main
            <br />
            Happiness
            <br />
            <br />
            <p>
              If you want to contact me, feel free to send me an email at <a href="mailto:rorscharg@gmail.com">rorscharg@gmail.com</a> and I'll be super happy to answer or have a conversation with you!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex
