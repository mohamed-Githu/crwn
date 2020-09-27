import React from 'react'
import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux';

import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={ToggleCartHidden}>
    <ShoppingIcon className='cart-icon__shopping-icon'/>
    <span className='cart-icon__item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
