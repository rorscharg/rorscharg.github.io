import React, { Component } from 'react'
import Link from 'gatsby-link'
import './Footer.scss'
import Github from 'react-icons/lib/go/mark-github';
import Instagram from 'react-icons/lib/fa/instagram';
import Twitter from 'react-icons/lib/fa/twitter-square';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div></div>
                <div>
                    <a className="external-links" href="https://instagram.com/rorscharg">
                        <Instagram className="icon-style"/>
                    </a>
                    <a className="external-links" href="https://github.com/rorscharg">
                        <Github className="icon-style"/>
                    </a>
                    <a className="external-links" href="https://twitter.com/rorscharg">
                        <Twitter className="icon-style" />
                    </a>
                    </div>
                 <div></div>
            </footer>
        )
    }
}

export default Footer
