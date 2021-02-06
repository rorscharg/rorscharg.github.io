import React from 'react'
import ConnectedAddToCartButton from "./addToCartButton"
import './index.scss'

const StoreItem = ({item}) => {
  return (
    <div className="poster-container">
      <div className="poster-left-margin"></div>
      <div className="poster-image-container">
        <a href={item.imagePath}>
          <h1 className="print-title">{item.title}</h1>
          <img src={item.imagePath} className="poster-image" />
        </a>
      </div>
      <div className="poster-description-container">
        <div className="poster-description-text-container">
          <div className="poster-description-text">{item.description}</div>
          <br />
          <div className="poster-description-additional-information">24x36 inches prenium matte print</div>
          <div className="poster-description-additional-information">Canada Only</div>
          <div className="poster-description-additional-information">{item.price}.00$</div>
          <div className="poster-description-additional-information">Available during December</div>
          <div className="poster-description-additional-information">3 to 5 days shipping</div>
          <div className="buy-button-container">
            <ConnectedAddToCartButton item={item}/>
          </div>
        </div>
      </div>
      <div className="poster-right-margin"></div>
    </div>)
}

export default StoreItem