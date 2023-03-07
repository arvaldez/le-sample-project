import { ChangeEvent, FormEvent, useState } from "react"

import { signInUser } from "../config/firebase"
import { useNavigate, Link } from "react-router-dom"
import energyImage from "../images/renewable-energy-colored.png"

const defaultFormFields = {
  email: "",
  password: "",
}

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const navigate = useNavigate()

  const resetFormFields = () => {
    return setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // Send the email and password to firebase
      const userCredential = await signInUser(email, password)

      if (userCredential) {
        resetFormFields()
        navigate("/dashboard")
      }
    } catch (error: any) {
      console.log("User Sign In Failed", error.message)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="flex items-center bg-[#050536] min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className=" w-full my-10 bg-white px-6 py-8 rounded shadow-md text-black ">
          <div className="text-center">
            <img
              className="mx-auto h-12 w-auto"
              src={energyImage}
              alt="Your Company"
            ></img>
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign In
            </h1>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Sign In
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  {" "}
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
