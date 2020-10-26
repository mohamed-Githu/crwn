import cartActionTypes from './cart.types'

const { TOGGLE_CART_HIDDEN,
  ADD_ITEM, 
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM, CLEAR_CART
} = cartActionTypes;

export const ToggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CLEAR_CART,
})