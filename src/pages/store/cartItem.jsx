import React from 'react'
import ConnectedAddToCartButton from "./addToCartButton"
import './index.scss'

const CartItem = ({itemId, imagePath}) => {
  return (
    <div className="poster-container">
      <div className="poster-left-margin"></div>
      <div className="poster-image-container">
        <a href={imagePath}>
          <h1 className="print-title">First Form</h1>
          <img src={imagePath} className="poster-image" />
        </a>
      </div>
      <div className="poster-description-container">
        <div>
          <div className="poster-description-text">A print to frame and show off to your date in order to make him/her think you're an art connoisseur.</div>
          <br />
          <div className="poster-description-additional-information">24x36 inches prenium matte print</div>
          <div className="poster-description-additional-information">Canada Only</div>
          <div className="poster-description-additional-information">49.98$ CAD (41.99$+7.99$ for shipping)</div>
          <div className="poster-description-additional-information">Available during December</div>
          <div className="poster-description-additional-information">3 to 5 days shipping</div>
          <div className="buy-button-container">
            <ConnectedAddToCartButton id={itemId} imagePath={imagePath} />
          </div>
        </div>
      </div>
      <div className="poster-right-margin"></div>
    </div>)
}

export default CartItem