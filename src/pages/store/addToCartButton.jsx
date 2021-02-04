import PropTypes from "prop-types"
import React from 'react'
import { connect } from "react-redux"

const buttonStyles = {
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  letterSpacing: "1.5px",
}

const AddToCartButton = ({item, addToCart}) => {
  return <div>
    <button className="add-to-cart-button" style={buttonStyles} onClick={() => addToCart(item)}>Add To Cart</button>
  </div>
}

AddToCartButton.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = ({}, ownProps) => {
  const { item } = ownProps;
  return { item };
}

const mapDispatchToProps = dispatch => {
  return { addToCart: (item) => dispatch({ type: `ADD_TO_CART`, item }) }
}

const ConnectedAddToCartButton = connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)

export default ConnectedAddToCartButton;