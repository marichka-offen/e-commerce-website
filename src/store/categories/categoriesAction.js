import { categoriesActionTypes } from './categoriesTypes'

export const setCategories = (categories) => ({
  type: categoriesActionTypes.SET_CATEGORIES,
  payload: categories,
})
