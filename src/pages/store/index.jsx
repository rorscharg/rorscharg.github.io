import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import './index.scss'
import CheckoutButton from "./checkoutButton"

class WebsiteHome extends React.Component {
  render() {

    return (
      <Layout>
        <div className="home-container">
          <div className="poster-item-container">
            <div className="poster-image-container">
              <a href="/store/print1.jpg">
                <h1 className="print-title">Print #1 by jeanarjean</h1>
                <img src='/store/print1.jpg'  className="poster-image"/>
              </a>
            </div>
            <div className="poster-description-container">
              <div>
                <div className="poster-description-text">Des patates pilées, du steak haché, du maïs en crème, pis kin toé, du pâté chinois. Baptême de crisse de cibole de viande à chien, j'en ai plein mon casse d'être toute décalissé de la vie, avec le windshier de mon char toute déviargé par l'autre esti de cave. Il va manger un esti de char de marde tu vas vouère.</div>
                <div className="buy-button-container">
                  <CheckoutButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WebsiteHome

