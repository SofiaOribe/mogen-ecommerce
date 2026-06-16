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
        <div className="w-full px-4 2xl:max-w-[calc(100vw-_17em)] flex justify-center pb-[16em] pt-30 sm:pt-40 relative">
          <div className="hidden 2xl:block">
            <Filters />
          </div>
          <div className="lg:p-4 w-full sm:max-w-[56em] flex flex-col gap-8">
            <NavPoint items={navShop} />
            <div className="block 2xl:hidden">
              <Filters />
            </div>
            <Outlet />
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
