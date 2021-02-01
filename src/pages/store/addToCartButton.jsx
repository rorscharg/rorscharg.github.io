import PropTypes from "prop-types"
import React from 'react'
import { connect } from "react-redux"

const buttonStyles = {
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  letterSpacing: "1.5px",
}

const AddToCartButton = ({id, imagePath, addToCart}) => {
  return <div>
    <button className="add-to-cart-button" style={buttonStyles} onClick={() => addToCart(id, imagePath)}>Add To Cart</button>
  </div>
}

AddToCartButton.propTypes = {
  id: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = ({}, ownProps) => {
  const { id , imagePath } = ownProps;
  return { itemId: id};
}

const mapDispatchToProps = dispatch => {
  return { addToCart: (itemId, imagePath) => dispatch({ type: `ADD_TO_CART`, itemId, imagePath }) }
}

const ConnectedAddToCartButton = connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)

export default ConnectedAddToCartButton;