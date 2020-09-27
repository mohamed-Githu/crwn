import cartAcionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
}

const cartRedecer = (state = initialState, action) => {
  const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } = cartAcionTypes;
  const { hidden, cartItems } = state;
  const { type, payload } = action;

  switch (type) {
      case TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !hidden
        }
      case ADD_ITEM: 
        return {
          ...state,
          cartItems: addItemToCart(cartItems, payload)
        }
      case CLEAR_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: cartItems.filter(cartItem => cartItem.id !== payload.id)
        }
      case REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(cartItems, payload)
        }
      default:
        return state
  }
}

export default cartRedecer;