import { userActionTypes } from './user.types'

const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { SET_CURRENT_USER } = userActionTypes;

  switch (type) {
      case SET_CURRENT_USER:
          return {
            ...state,
            currentUser: payload
          }
      default: return state;
  }
}

export default userReducer;