import React from "react"
import Navigation from "./features/navigation"
import Footer from "./features/footer/Footer"
import CartShop from "./features/cart"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartShop />
      <Navigation />
      <div className="flex flex-col min-h-[100dvh] justify-between pt-[8em]">
        <div className="h-full w-full">{children}</div>

        <Footer />
      </div>
    </>
  )
}

export default Layout
