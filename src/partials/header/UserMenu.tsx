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
  const { signOut, currentUserName } = useContext(AuthContext)

  const [dropdownOpen, setDropdownOpen] = useState(true)

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
              {currentUserName}
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
    </div>
  )
}

export default UserMenu
