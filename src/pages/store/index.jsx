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
                <div className="poster-description-text">Des patates pilées, du steak haché, du maïs en crème, pis kin toé, du pâté chinois. Baptême de crisse de cibole de viande à chien, j'en ai plein mon casse d'être toute décalissé de la vie, avec le windshier de mon char toute déviargé par l'autre esti de cave. Il va manger un esti de char de marde tu vas vouère.</div>
                <br/>
                <div className="poster-description-additional-information">24x36 inches</div>
                <div className="poster-description-additional-information">Canada Only</div>
                <div className="poster-description-additional-information">49.98$ CAD (41.99$+7.99$ for shipping)</div>
                <div className="poster-description-additional-information">Available for purchase the whole month of December</div>
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

