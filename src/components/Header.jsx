import React, { Component } from 'react'
import Link from 'gatsby-link'
import './Header.scss'

class Header extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="left">
                        <MenuItem name="Home" link="/" />
                        <MenuItem name="Projects" link="/projects" />
                    </div>
                    <div className="title">
                        <h1>RORSCHARG</h1>
                    </div>
                    <div className="right">
                        <MenuItem name="Blog" link="/blog" />
                        <MenuItem name="About" link="/about" />
                    </div>
                </header>
            </div>
        )
    }
}

function MenuItem(props) {
    return (
        <div className="menu-item-container">
            <Link to={props.link}>{props.name}</Link>
        </div>
    )
}

export default Header
