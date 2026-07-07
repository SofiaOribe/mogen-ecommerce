import { Navigate, Outlet, useLocation } from "react-router-dom"
import bgAuth from "../../assets/images/landing/bgAuth.png"
import { useAuth } from "@/providers/AuthProvider"
const Auth = () => {
  const { session } = useAuth()
  const location = useLocation()
  if (session?.user.id && !location.pathname.includes("/reset-password")) {
    return <Navigate to="/profile/account" replace />
  }

  return (
    <div className="w-[100dvw] flex justify-center items-center h-[calc(100dvh_+_8em)] lg:h-dvh relative overflow-hidden">
      <img
        src={bgAuth}
        alt=""
        className=" bg-center bg-no-repeat bg-cover sm:rotate-90 absolute h-full sm:h-full top-0"
      />
      <div className="max-w-[50em] w-full px-6 md:p-0 h-full ">
        <Outlet />
      </div>
    </div>
  )
}

export default Auth
