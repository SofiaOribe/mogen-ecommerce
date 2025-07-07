import React from "react"
import Navigation from "./features/navigation"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  )
}

export default Layout
