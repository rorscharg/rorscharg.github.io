import PropTypes from "prop-types"
import React from 'react'
import { connect } from "react-redux"
import CheckoutButton from "./checkoutButton"

const buttonStyles = {
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  letterSpacing: "1.5px",
}

const Cart = ({ itemsInCart }) => {
  debugger;
  const cartItems = Object.keys(itemsInCart).map((key) => {
    var item = itemsInCart[key]
    return <div key={item.itemId}>
      <img src={item.imagePath} className="cart-image"></img>
      <span>{item.itemId} :{item.quantity}</span>
    </div>
  });
  return <div>
    {cartItems}
    <CheckoutButton />
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