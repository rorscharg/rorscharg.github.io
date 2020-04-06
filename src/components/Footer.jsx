import React, { Component } from 'react'
import './Footer.scss'
import { FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div></div>
        <div>
          <a className="external-links" href="https://instagram.com/jean.arjean">
            <FaInstagram className="icon-style" />
          </a>
          <a className="external-links" href="https://github.com/rorscharg">
            <FaGithub className="icon-style" />
          </a>
          <a className="external-links" href="https://twitter.com/rorscharg">
            <FaTwitter className="icon-style" />
          </a>
        </div>
        <div></div>
      </footer>
    )
  }
}

export default Footer
