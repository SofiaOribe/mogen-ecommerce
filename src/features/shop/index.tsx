import NavPoint from "@/components/navigations.tsx/NavPoint"
import { Navigate, Outlet } from "react-router-dom"
import { navShop } from "./itemsNav"
import Filters from "./content/Filters"

const Shop = () => {
  return (
    <>
      {(location.pathname === "/shop" || location.pathname === "/shop/") && <Navigate to="./categories/all" replace />}
      <div className="w-full flex pb-[16em]">
        <div className="flex flex-row">
          <div className="lg:pl-[6.5em]">
            <Filters />
          </div>
          <div className="p-4 w-full max-w-[56em] flex flex-col gap-8">
            <NavPoint items={navShop} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
