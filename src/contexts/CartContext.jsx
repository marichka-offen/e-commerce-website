import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id)

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  cartItemsQuantity: 0,
  setCartItemsQuantity: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0)

  useEffect(() => {
    setCartItemsQuantity(
      cartItems.reduce((acc, item) => acc + item.quantity, 0)
    )
  }, [cartItems])

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemsQuantity,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
