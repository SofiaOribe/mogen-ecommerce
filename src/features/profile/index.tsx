import NavPoint from "@/components/navigations.tsx/NavPoint"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "@/providers/AuthProvider"

type TProfileProps = {
  id: string
  name: string
  link: string
}

const navProfile: TProfileProps[] = [
  {
    id: "account",
    name: "Account",
    link: "./account",
  },
  {
    id: "orders",
    name: "Orders",
    link: "./orders",
  },
]

const Profile = () => {
  const location = useLocation()
  const { session } = useAuth()

  if (!session?.user.id) {
    return <Navigate to="/auth/login" replace />
  }

  return (
    <>
      {(location.pathname === "/profile" || location.pathname === "/profile/") && <Navigate to="./account" replace />}
      <div className="w-full px-4 flex justify-center pb-[16em] pt-40">
        <div className="lg:p-4 w-full 2xl:max-w-[56em] flex flex-col gap-2  ">
          <NavPoint items={navProfile} />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Profile
