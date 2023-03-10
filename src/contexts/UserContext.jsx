import { createContext, useEffect, useReducer } from 'react'
import {
  onAuthStateChangeListener,
  createUserProfileDocument,
} from '../utils/firebase'

export const UserContext = createContext({
  user: null,
  setUser: () => {},
})

const initialState = {
  user: null,
}

export const userActionTypes = {
  SET_USER: 'SET_USER',
}

const reducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export const UserProvider = ({ children }) => {
  const [{ user }, dispatch] = useReducer(reducer, initialState)
  const setUser = (user) =>
    dispatch({ type: userActionTypes.SET_USER, payload: user })

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserProfileDocument(user)
      }

      setUser(user)
    })

    return unsubscribe
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
