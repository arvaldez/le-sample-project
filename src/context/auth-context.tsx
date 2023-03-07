import { User } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import {
  getUserName,
  getUserRole,
  SignOutUser,
  userStateListener,
} from "../config/firebase"
import { createContext, useState, useEffect, ReactNode } from "react"
import { getDoc, getDocs } from "firebase/firestore"

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  // "User" comes from firebase auth-public.d.ts
  currentUser: {} as User | null,
  currentUserRole: "",
  currentUserId: "",
  currentUserName: "",
  setCurrentUser: (_user: User) => {},
  signOut: () => {},
})

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [currentUserId, setCurrentUserId] = useState<string>("")
  const [currentUserRole, setCurrentUserRole] = useState<string>("")
  const [currentUserName, setCurrentUserName] = useState<string>("")
  const navigate = useNavigate()

  console.log("current user", currentUser?.uid)
  //   const getUserId<string> = async () => {
  //     return userId = await currentUser?.uid
  //     setCurrentUserId(userId as string)
  //     //   setc
  //   }
  //   console.log("getuser", getUserId())

  const getRole = async (userId: string) => {
    return await getUserRole(userId)
  }

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user)
        setCurrentUserId(user.uid)
        getUserRole(user.uid).then((user) => {
          if (user) {
            setCurrentUserRole(user)
          }
        })
        getUserName(user.uid).then((user) => {
          if (user) {
            setCurrentUserName(user)
          }
        })
      }
    })
    return unsubscribe
  }, [setCurrentUser])

  // As soon as setting the current user to null,
  // the user will be redirected to the home page.
  const signOut = () => {
    SignOutUser()
    setCurrentUser(null)
    navigate("/")
  }

  const value = {
    currentUser,
    currentUserRole,
    currentUserId,
    setCurrentUser,
    currentUserName,

    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
