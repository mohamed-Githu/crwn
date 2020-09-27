import cartAcionTypes from "./cart.types";
import { addItemToCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
}

const cartRedecer = (state = initialState, action) => {
  const { TOGGLE_CART_HIDDEN, ADD_ITEM } = cartAcionTypes;
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
      default:
        return state
  }
}

export default cartRedecer;