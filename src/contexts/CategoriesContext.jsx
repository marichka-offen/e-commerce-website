import { createContext, useState, useEffect } from 'react'
import {
  getCategoriesAndDocuments,
  //   addCollectionAndDocuments,
} from '../utils/firebase'
// import SHOP_DATA from '../shop-data'

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA)
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  )
}
