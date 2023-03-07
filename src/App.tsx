import { useContext, useEffect } from "react"

import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import "./index.css"

import { Route, Routes, useNavigate } from "react-router-dom"
import { AuthContext } from "./context/auth-context"
import RequireAuth from "./components/RequireAuth"

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard")
    }
  }, [currentUser])
  return (
    <Routes>
      <Route path="/" element={currentUser ? <Dashboard /> : <SignIn />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}

export default App
