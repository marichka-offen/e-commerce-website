import { userActionTypes } from './userTypes'

const initialState = {
  user: null,
}

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
