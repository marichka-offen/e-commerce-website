import { createContext, useState, useEffect } from 'react'
import { addCollectionAndDocuments } from '../utils/firebase'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
