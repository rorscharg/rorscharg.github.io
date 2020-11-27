import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import './index.scss'

const buttonStyles = {
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  letterSpacing: "1.5px",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PK_TEST)
  }
  return stripePromise
}
const CheckoutButton = () => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      billingAddressCollection: "required",
      shippingAddressCollection: {
        allowedCountries: ['CA'],
      },
      lineItems: [{ price: `${process.env.LINE_ITEM}`, quantity: 1 }],
      successUrl: `${process.env.WEBSITE_URL}/store/success/`,
      cancelUrl: `${process.env.WEBSITE_URL}/store`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <button
      disabled={loading}
      className="checkout-button"
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Buy
    </button>
  )
}

export default CheckoutButton
