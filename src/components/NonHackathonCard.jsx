import React, { Component } from 'react'
import Button from './Button.jsx'
import './ProgrammingCard.scss'

class PhotographyProjectPreviewBox extends Component {
  render() {
    return (
      <div className="programming-card">
        <div className="programming-card-container">
          <div className="programming-card-title-section">
            <span className="programming-card-title">{this.props.name}</span>
            <span className="programming-card-date">{this.props.date}</span>
          </div>
          <div className="programming-card-image">
            <img
              src={this.props.image}
              alt={this.props.image}
              className="programming-card-image-preview"
            />
          </div>
          <div className="programming-card-description">
            {this.props.description}
          </div>
          <div className="programming-card-footer">
            <span>
              <span className="programming-card-stack-element">
                {this.props.stack}
              </span>
            </span>
            <Button label="Link" link={this.props.link}>
              {' '}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotographyProjectPreviewBox
