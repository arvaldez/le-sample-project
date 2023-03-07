import React, { useEffect } from "react"


interface IDashboardCard10Props {
  tableName: string
  data: any[]
  //   firstname: string
  //   lastname: string
}

const DashboardCard10: React.FC<IDashboardCard10Props> = ({
  tableName,
  data,
}: IDashboardCard10Props) => {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">{tableName}</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Phone</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {data.slice(0, 5).map((person) => {
                return (
                  <tr key={person["id"]}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={person["image"]}
                            width="40"
                            height="40"
                            alt={person["firstname"]}
                          />
                        </div>
                        <div className="font-medium text-slate-800">
                          {`${person["firstname"]} ${person["lastname"]}`}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{person["email"]}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{person["phone"]}</div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard10
