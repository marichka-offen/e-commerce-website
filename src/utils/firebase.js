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
  apiKey: 'AIzaSyBvoOQOHvgjWUwYDVxLRifqQvo2Sn50vDs',
  authDomain: 'crwn-apparel-db-23492.firebaseapp.com',
  projectId: 'crwn-apparel-db-23492',
  storageBucket: 'crwn-apparel-db-23492.appspot.com',
  messagingSenderId: '564342809044',
  appId: '1:564342809044:web:d65d025f0dea77f05d7641',
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
  return querySnapshot.docs.map((doc) => doc.data())
}
