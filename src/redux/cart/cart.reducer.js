import cartAcionTypes from "./cart.types";

const initialState = {
  hidden: true
}

const cartRedecer = (state = initialState, action) => {
  switch (action.type) {
      case cartAcionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden
        }
      default:
        return state
  }
}

export default cartRedecer;