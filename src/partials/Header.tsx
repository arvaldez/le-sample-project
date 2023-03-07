import React, { useState } from "react"
// import SearchModal from "./header/SearchModal"
// import Notifications from "./header/Notifications"
// import Help from "./header/Help"
import UserMenu from "./header/UserMenu"

export interface IHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IHeaderProps> = ({
  sidebarOpen,
  setSidebarOpen,
}: IHeaderProps) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-slate-900 border-b  z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex"></div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
