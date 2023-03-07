import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

import { collection, getDoc, setDoc, doc } from "firebase/firestore"

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { getFirebaseConfig } from "./config"

const app = initializeApp(getFirebaseConfig())
export const db = getFirestore(app)
export const usersCollectionRef = collection(db, "users")

const auth = getAuth(app)

export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signUpUser = async (
  email: string,
  password: string,
  name: string
) => {
  if (!email && !password && !name) return

  const createdUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  console.log("created user")

  const userId = createdUser.user.uid

  await setDoc(doc(db, "users", userId), {
    email: email,
    password: password,
    name: name,
    role: "User",
  })

  return createdUser
}

export const getUserRole = async (userId: string) => {
  const docRef = doc(db, "users", userId)
  const data = await getDoc(docRef)
  try {
    if (data.exists()) {
      const info = await data.data()
      console.log("getting info")
      console.log(info.role)
      return await info.role
    }
  } catch (error: any) {
    console.log(error.message)
  }
  return ""
}

export const getUserName = async (userId: string) => {
  const docRef = doc(db, "users", userId)
  const data = await getDoc(docRef)
  try {
    if (data.exists()) {
      const info = await data.data()
      console.log("getting info")
      console.log(info.name)
      return await info.name
    }
  } catch (error: any) {
    console.log(error.message)
  }
  return ""
}

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback)
}

export const SignOutUser = async () => await signOut(auth)
