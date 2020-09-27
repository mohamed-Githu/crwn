import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({ item: { name, price, quantity, imgUrl } }) => (
  <div className='cart-item'>
    <img src={imgUrl} alt={name} className='image'/>
    <div className="item-details">
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </div>
  </div>
)

export default CartItem
