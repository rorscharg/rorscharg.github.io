import React from 'react'
import Layout from '../../components/layout'
import './index.scss'
import Checkout from "./checkout"

class WebsiteHome extends React.Component {
  render() {

    return (
      <Layout>
        <div className="home-container">
          <div className="home-content">
            <Checkout />
          </div>
        </div>
      </Layout>
    )
  }
}

export default WebsiteHome

