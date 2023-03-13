import { categoriesActionTypes } from './categoriesTypes'

const initialState = {
  categories: [],
}

export const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case categoriesActionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
