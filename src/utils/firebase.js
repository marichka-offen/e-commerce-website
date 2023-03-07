import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCjwn7Rrqe5Q1eiUMYlpPwP1nDBJj28AvI',
  authDomain: 'ecomerce-website-db.firebaseapp.com',
  projectId: 'ecomerce-website-db',
  storageBucket: 'ecomerce-website-db.appspot.com',
  messagingSenderId: '840716222401',
  appId: '1:840716222401:web:2388de9b0752975bd0b940',
}

const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return

  const userRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}
