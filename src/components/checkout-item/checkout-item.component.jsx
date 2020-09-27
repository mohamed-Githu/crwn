import React from 'react'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem: { name, imgUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className="image-container"><img src={imgUrl} alt={name} /></div>
    <span className="name">{name}</span>
    <span className="quantity">&#10096; {quantity} &#10097;</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
)

export default CheckoutItem
