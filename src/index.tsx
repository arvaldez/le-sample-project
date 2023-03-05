import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
])

// const App = () => {
//   const [materialQuantityData, setMaterialQuantityData] = useState<any>([])

//   const appService = new AppService()
//   const getAllData = async () => {
//     const response = await appService.getMaterialQuantityPerPlant()
//     console.log(response)
//   }
//   getAllData()
//   return (
//     <div>
//       <h1>Hi there!</h1>
//     </div>
//   )
// }

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
