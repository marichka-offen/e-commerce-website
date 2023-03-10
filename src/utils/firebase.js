import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDT9hYOB6CmX7iGATCIkroKN2zkH114kVE',
  authDomain: 'crown-apparel-db-93694.firebaseapp.com',
  projectId: 'crown-apparel-db-93694',
  storageBucket: 'crown-apparel-db-93694.appspot.com',
  messagingSenderId: '629975967250',
  appId: '1:629975967250:web:bbd27e43a604d10d05dacb',
}

initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const db = getFirestore()

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase())
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const createUserProfileDocument = async (
  userAuth,
  additionalInformation
) => {
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
        ...additionalInformation,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return createUserWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback)

export const getCategoriesAndDocuments = async () => {
  const categoriesRef = collection(db, 'categories')
  const q = query(categoriesRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}
