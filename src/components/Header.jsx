import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

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
                    <h1 className="title">RORSCHARG</h1>
                    <div className="right">
                        {/*                        <MenuItem name="Home" link="/" />
                        <MenuItem name="Projects" link="/projects" />
                        <MenuItem name="Blog" link="/blog" />
                        <MenuItem name="About" link="/about" />
*/}{' '}
                    </div>
                </header>
            </div>
        )
    }
}

function MenuItem(props) {
    return (
        <div className="menu-item-container">
            <Link to={props.link}>
                <h2> {props.name}</h2>
            </Link>
        </div>
    )
}

export default Header
