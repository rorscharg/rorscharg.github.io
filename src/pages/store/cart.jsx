import PropTypes from "prop-types"
import React from 'react'
import { connect } from "react-redux"
import CheckoutButton from "./checkoutButton"

const buttonStyles = {
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  letterSpacing: "1.5px",
}

const Cart = ({ itemsInCart }) => {
  const cartItems = Object.keys(itemsInCart).map((key) => {
    var item = itemsInCart[key]
    return <tr key={item.itemId}>
      <th>
        <img src={item.imagePath} className="cart-image"></img>
      </th>
      <th>
        <span>{item.title}: {item.quantity}</span>
      </th>
    </tr>
  });
  return <div className="cart-checkout-container">
    <table>
      <tbody>
        {cartItems}
      </tbody>
    </table>
    <div>
      { cartItems.length > 0 &&
      <CheckoutButton />
      }
    </div>
  </div>
}

Cart.propTypes = {
  itemsInCart: PropTypes.object.isRequired,
}

const mapStateToProps = ({ itemsInCart }) => {
  return { itemsInCart };
}

const ConnectedCart = connect(mapStateToProps)(Cart)

export default ConnectedCart;