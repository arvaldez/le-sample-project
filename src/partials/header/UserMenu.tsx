import React, { useState, useRef, useEffect, useContext } from "react"
import { AuthContext } from "../../context/auth-context"
import { Link } from "react-router-dom"
// import Transition from "../../utils/Transition"

import UserAvatar from "../../images/user-avatar-32.png"
import { Menu } from "@headlessui/react"

const links = [
  { href: "/dashboard", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
]

export interface IUserMenuProps {}

const UserMenu: React.FC<IUserMenuProps> = () => {
  const { signOut } = useContext(AuthContext)

  const [dropdownOpen, setDropdownOpen] = useState(true)
  const { currentUser } = useContext(AuthContext)
  const trigger = React.useRef<HTMLButtonElement>(null)
  const dropdown = React.useRef<HTMLDivElement>(null)

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = (event: MouseEvent) => {
  //     if (
  //       !dropdownOpen ||
  //       dropdown.current?.contains(event.target as Node) ||
  //       trigger.current?.contains(event.target as Node)
  //     )
  //       setDropdownOpen(false)
  //   }
  //   document.addEventListener("click", clickHandler)
  //   return () => document.removeEventListener("click", clickHandler)
  // })

  // close if the esc key is pressed
  //   useEffect(() => {
  //     const keyHandler = ({ keyCode }) => {
  //       if (!dropdownOpen || keyCode !== 27) return
  //       setDropdownOpen(false)
  //     }
  //     document.addEventListener("keydown", keyHandler)
  //     return () => document.removeEventListener("keydown", keyHandler)
  //   })
  console.log("dropdown user ", dropdownOpen)
  return (
    <div>
      <Menu>
        <Menu.Button className="inline-flex hover:text-purple-600 justify-center items-center group">
          {" "}
          <img
            className="w-8 h-8 rounded-full"
            src={UserAvatar}
            width="32"
            height="32"
            alt="User"
          />
          <div className="flex items-center truncate">
            <span className="truncate ml-2 text-sm text-slate-50 font-medium  group-hover:text-purple-600	">
              {currentUser?.email}
            </span>
            <svg
              className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-50"
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </Menu.Button>
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item
            as="button"
            onClick={signOut}
            className="ufont-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
          >
            Sign Out
          </Menu.Item>
        </Menu.Items>
      </Menu>
      {/* <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={UserAvatar}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">
            Acme Inc.
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          //   onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800">Acme Inc.</div>
            <div className="text-xs text-slate-500 italic">Administrator</div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Transition> */}
    </div>
  )
}

export default UserMenu
