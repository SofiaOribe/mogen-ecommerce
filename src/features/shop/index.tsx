import NavPoint from "@/components/navigations.tsx/NavPoint"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { navShop } from "./itemsNav"
import Filters from "./content/Filters"

const Shop = () => {
  const location = useLocation()
  const isCategories = location.pathname.includes("categories")
  const isProduct = location.pathname.includes("product")
  return (
    <>
      {(location.pathname === "/shop" || location.pathname === "/shop/") && <Navigate to="./categories/all" replace />}
      {isCategories && (
        <div className="w-full xl:max-w-[calc(100vw-17em)] px-4 flex justify-center pb-[16em]">
          <div className="flex lg:flex-row flex-col gap-8">
            <Filters />
            <div className="lg:p-4 w-full 2xl:max-w-[56em] flex flex-col gap-8">
              <NavPoint items={navShop} />
              <Outlet />
            </div>
          </div>
        </div>
      )}
      {isProduct && (
        <div className="flex lg:flex-row flex-col gap-8">
          <Outlet />
        </div>
      )}
    </>
  )
}

export default Shop
