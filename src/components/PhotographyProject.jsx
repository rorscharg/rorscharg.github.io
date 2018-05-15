import React, { Component } from 'react'

class PhotographyProject extends Component {
    render() {
        return (
            <div className="App">
                <Images images={this.props.images} />
            </div>
        )
    }
}

function Images(props) {
    return (
        <div>
            {props.images.map(function(image) {
                return (
                    <div key={image}>
                        <img src={image} style={imageStyle} alt={image} />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

const imageStyle = {
    display: 'block',
    margin: 'auto',
    maxWidth: '80vw',
    maxHeight: '100vh',
}

export default PhotographyProject
