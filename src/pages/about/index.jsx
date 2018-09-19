import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import './about.scss'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
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
                they probably apply to me. I'm currently living that "spent
                too much time on the internet now wants to see the world" life.
            </p>
              <h2>Current Interests:</h2>
              Dogs
            <br />
              Programming
            <br />
              Music
            <br />
              Video Games
            <br />
              Being a Riven main
            <br />
              Happiness
          </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex
