import React from 'react'

import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({ item, addItem }) => {
  const { imgUrl, name, price } = item;
  return (
  <div className='collection-item'>
    <div className="image"
      style={{backgroundImage: `url(${imgUrl})`}}
    ></div>
    <div className="collection-item__footer">
      <span className="collection-item__name">{name}</span>
      <span className="collection-item__price">${price}</span>
    </div>
    <CustomButton inverted value='ADD TO CART' onClick={() => addItem(item)} />
  </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
