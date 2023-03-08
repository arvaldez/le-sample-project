import React, { useState } from "react"

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = () => {
  const [bannerOpen, setBannerOpen] = useState(true)
  //   const query = new URLSearchParams(location.search)
  //   const template = query.get("template")
  //   const liteLink =
  //     template === "laravel"
  //       ? "https://github.com/cruip/laravel-tailwindcss-admin-dashboard-template"
  //       : "https://github.com/cruip/tailwind-dashboard-template"

  return (
    <>
      {bannerOpen && (
        <div className="fixed top-4 right-0 w-half md:bottom-8 md:right-12 md:w-auto z-60">
          <div className="bg-white text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-slate-600">
              <h1 className="text-lg text-slate-800 font-bold">
                To access with admin rights, use:{" "}
              </h1>
              <div>
                <span className="font-bold">Email Address:</span>{" "}
                admin@example.com{" "}
              </div>
              <div>
                <span className="font-bold">Password:</span> password{" "}
              </div>
            </div>
            <button
              className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
