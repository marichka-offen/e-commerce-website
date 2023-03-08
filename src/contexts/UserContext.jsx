import { createContext, useState, useEffect } from 'react'
import {
  onAuthStateChangeListener,
  createUserProfileDocument,
} from '../utils/firebase'

export const UserContext = createContext({
  user: null,
  setUser: () => {},
})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

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
