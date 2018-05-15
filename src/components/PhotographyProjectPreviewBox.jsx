import React, { Component } from 'react'
import Link from 'gatsby-link'
import Images from './PhotographyProject'
import './PhotographyProjectPreviewBox.scss'

class PhotographyProjectPreviewBox extends Component {
    render() {
        return (
            <div>
                <Link
                    to={this.props.link}
                    className="photography-project-box-link"
                >
                    <div className="container">
                        <div className="card photography-project-box">
                            <div className="row ">
                                <div
                                    className="col-md-4"
                                    className="photography-box-title"
                                >
                                    <h4 className="card-title">
                                        {this.props.name}
                                    </h4>
                                </div>
                                <div className="col-md-8">
                                    <img
                                        className="photography-project-preview"
                                        src={this.props.image}
                                        className="w-100"
                                        alt={this.props.image}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PhotographyProjectPreviewBox
