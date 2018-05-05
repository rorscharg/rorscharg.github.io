import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import './layout.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="container">
        <Header />
        {children()}
      </div>
    )
  }
}

export default Template
