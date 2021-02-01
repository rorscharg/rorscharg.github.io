import React from 'react'
import Layout from '../../components/layout'
import Cart from './Cart'
import CartItem from './cartItem'
import './index.scss'

class StoreHome extends React.Component {
  render() {
    debugger;
    var images = process.env.LINE_ITEM_IMAGES?.split(",");
    var itemsToDisplay = process.env.LINE_ITEM.split(",").map((id, index) => (<CartItem itemId={id} key={id} imagePath={images ? images[index]: null}></CartItem>));
    console.log(itemsToDisplay);

    return (
      <Layout>
        <div className="home-container">
          <div className="poster-container">
            <div></div>
            {itemsToDisplay}
            <Cart />
          </div>
        </div>
      </Layout>
    )
  }
}

export default StoreHome