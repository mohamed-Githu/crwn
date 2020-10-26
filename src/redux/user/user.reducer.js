import userActionTypes from './user.types'

const initialState = {
  currentUser: null,
  error: null,
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
      case userActionTypes.SIGN_IN_SUCCESS:
        return {
          ...state,
          currentUser: payload,
          error: null,
        }
      case userActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          error: null
        }
      case userActionTypes.SIGN_IN_FAILURE:
      case userActionTypes.SIGN_OUT_FAILURE:
      case userActionTypes.SIGN_UP_FAILURE:
        return {
          ...state,
          error: payload,
        }
      default: return state;
  }
}

export default userReducer;