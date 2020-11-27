import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import CheckoutButton from "./checkoutButton"
import './index.scss'

class WebsiteHome extends React.Component {
  render() {

    return (
      <Layout>
        <div className="home-container">
          <div className="poster-container">
          <div className="poster-left-margin"></div>
            <div className="poster-image-container">
              <a href="/store/print1.jpg">
                <h1 className="print-title">Print #1 by jeanarjean</h1>
                <img src='/store/print1.jpg'  className="poster-image"/>
              </a>
            </div>
            <div className="poster-description-container">
              <div>
                <div className="poster-description-text">A print to frame and show off to your date in order to make him/her think you're an art connoisseur.</div>
                <br/>
                <div className="poster-description-additional-information">24x36 inches prenium matte print</div>
                <div className="poster-description-additional-information">Canada Only</div>
                <div className="poster-description-additional-information">49.98$ CAD (41.99$+7.99$ for shipping)</div>
                <div className="poster-description-additional-information">Available during December</div>
                <div className="poster-description-additional-information">3 to 5 days shipping</div>
                <div className="buy-button-container">
                  <CheckoutButton />
                </div>
              </div>
            </div>
          <div className="poster-right-margin"></div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WebsiteHome

