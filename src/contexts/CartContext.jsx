import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id)

  if (existingCartItem) {
    const newCart = cartItems.map((item) =>
      item.id === itemToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )

    return newCart
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToRemove.id)

  if (existingCartItem.quantity === 1) {
    return removeProduct(cartItems, itemToRemove.id)
  }

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  }

  return [...cartItems, { ...itemToRemove, quantity: 1 }]
}

const removeProduct = (cartItems, itemToRemoveId) => {
  return cartItems.filter((item) => item.id !== itemToRemoveId)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartItemsQuantity: 0,
  setCartItemsQuantity: () => {},
  removeProductFromCart: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartItemsQuantity(
      cartItems.reduce((acc, item) => acc + item.quantity, 0)
    )
  }, [cartItems])

  useEffect(() => {
    setCartTotal(
      cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    )
  }, [cartItems])

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd))
  }

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove))
  }

  const removeProductFromCart = (itemToRemoveId) => {
    setCartItems(removeProduct(cartItems, itemToRemoveId))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartItemsQuantity,
    removeProductFromCart,
    cartTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
