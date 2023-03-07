import React, { useState, useEffect } from "react"
import { AppService } from "../services/app.service"
import { useContext } from "react"
import { AuthContext } from "../context/auth-context"
import Header from "../partials/Header"
import WelcomeBanner from "../partials/dashboard/WelcomeBanner"
import DashboardCard10 from "../partials/dashboard/DashboardCard10"
import DashboardCard11 from "../partials/dashboard/DashboardCard11"
export interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const { currentUserRole } = useContext(AuthContext)

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [personData, setPersonData] = useState([])
  const [materialData, setMaterialData] = useState([])

  const appService = new AppService()

  useEffect(() => {
    const getAllData = async () => {
      const responsePersons = await appService.persons()
      const responseMaterials = await appService.getMaterialQuantityPerPlant()
      setPersonData(responsePersons)
      setMaterialData(responseMaterials)
    }
    getAllData()
  }, [])

  return (
    <div>
      <div className="flex h-screen  overflow-hidden">
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="grid grid-cols-12 gap-6">
              {currentUserRole === "Admin" && (
                <DashboardCard10 tableName="Customers" data={personData} />
              )}

              <DashboardCard11 tableName="Materials" data={materialData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
