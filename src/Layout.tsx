import React from "react"
import Navigation from "./features/navigation"
import Footer from "./features/footer/Footer"
import CartShop from "./features/cart"
import { Toaster } from "sonner"
/* import { useAppSelector } from "./app/hooks"
import { selectShop } from "./features/shop/slice"
import Loading from "./components/loading/Loading" */

const Layout = ({ children }: { children: React.ReactNode }) => {
  /*   const { status } = useAppSelector(selectShop) */

  return (
    <>
      {/* {status === "PENDING" && <Loading />} */}
      {/*   {status === "FULFILLED" && ( */}
      <>
        <CartShop />
        <Navigation />
        <div className="flex flex-col min-h-[100dvh] justify-between">
          <div className="h-full w-full">{children}</div>
          <Footer />
        </div>
        <Toaster />
      </>
      {/*     )} */}
    </>
  )
}

export default Layout
