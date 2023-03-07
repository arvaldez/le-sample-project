import React, { useEffect } from "react"

interface IDashboardCard11Props {
  tableName: string
  data: any[]
  //   firstname: string
  //   lastname: string
}

const DashboardCard11: React.FC<IDashboardCard11Props> = ({
  tableName,
  data,
}: IDashboardCard11Props) => {
  console.log(data)
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
                  <div className="font-semibold text-left">Facility</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Material Type</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">KG Per Plant</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {data.slice(0, 5).map((material, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            {material["facility_id"]}
                          </div>
                        </td>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        {material["material_type_id"]}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        {material["kg_per_plant"]}
                      </div>
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

export default DashboardCard11
