import PropTypes from "prop-types";
import React from 'react';
import { connect } from "react-redux";
import './cart.scss';
import CheckoutButton from "./checkoutButton";

const Cart = ({ itemsInCart, price, changeQuantity }) => {

  const handleChange = (e, item) => {
    changeQuantity(item, e.target.value)
  };

  const cartItems = Object.keys(itemsInCart).map((key) => {
    var item = itemsInCart[key]
    return <tr key={item.itemId}>
      <th>
        <img src={item.imagePath} className="cart-image"></img>
      </th>
      <th className="cart-time-title">
        <span>{item.title}</span>
      </th>
      <th className="cart-item-qty-container">
        <select onChange={e => handleChange(e, item)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>a
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </th>
      <th className="cart-time-price">
        <span>{item.price},00$ each</span>
      </th>
    </tr>
  });

  let cartState;
  if (cartItems.length > 0) {
    cartState = (<div className="cart-item-container">
      <table>
        <tbody>
          {cartItems}
        </tbody>
      </table>
      <div>
        <div className="cart-checkout-total-title">Total:</div>
        <div className="cart-checkout-price">{price},00 $</div>
        <CheckoutButton />
      </div>
    </div>)
  }
  else {
    cartState = (<p> Your cart is empty! </p>)
  }

  return (
    <div className="cart-checkout-container">
      <h1 className="cart-checkout-title">Cart</h1>
        {cartState}
    </div>)
}

Cart.propTypes = {
  itemsInCart: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  changeQuantity: PropTypes.func.isRequired
}

const mapStateToProps = ({ itemsInCart, price }) => {
  return { itemsInCart, price };
}

const mapDispatchToProps = dispatch => {
  return { changeQuantity: (item, quantity) => dispatch({ type: `MODIFY_ITEM_QUANTITY`, item, quantity }) }
}

const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default ConnectedCart;