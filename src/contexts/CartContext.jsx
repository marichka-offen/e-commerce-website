import { createContext, useReducer } from 'react'

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

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartItemsQuantity: 0,
  cartTotal: 0,
}

export const cartActionTypes = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case cartActionTypes.SET_CART_ITEMS:
      return { ...state, ...payload }
    case cartActionTypes.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen }
    case cartActionTypes.ADD_ITEM:
      return { ...state, cartItems: payload }
    case cartActionTypes.REMOVE_ITEM:
      return { ...state, cartItems: payload }
    case cartActionTypes.REMOVE_PRODUCT:
      return { ...state, cartItems: payload }
    default:
      throw new Error(`Unhandled action type: ${type} in CartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartItemsQuantity, cartTotal }, dispatch] =
    useReducer(reducer, initialState)

  const updateCartItems = (newCartItems) => {
    const newCartItemsQuantity = newCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    )
    const newCartTotal = newCartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )

    dispatch({
      type: cartActionTypes.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartItemsQuantity: newCartItemsQuantity,
        cartTotal: newCartTotal,
      },
    })
  }

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd)

    dispatch({
      type: cartActionTypes.ADD_ITEM,
      payload: newCartItems,
    })

    updateCartItems(newCartItems)
  }

  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove)

    dispatch({
      type: cartActionTypes.REMOVE_ITEM,
      payload: newCartItems,
    })

    updateCartItems(newCartItems)
  }

  const removeProductFromCart = (itemToRemoveId) => {
    const newCartItems = removeProduct(cartItems, itemToRemoveId)

    dispatch({
      type: cartActionTypes.REMOVE_PRODUCT,
      payload: newCartItems,
    })

    updateCartItems(newCartItems)
  }

  const setIsCartOpen = () => {
    dispatch({ type: cartActionTypes.TOGGLE_CART })
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
