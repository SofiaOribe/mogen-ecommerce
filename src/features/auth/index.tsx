import { Outlet } from "react-router-dom"
import bgAuth from "../../assets/images/landing/bgAuth.png"
const Auth = () => {
  return (
    <div className="w-[100dvw] flex justify-center items-center heightCustomProductView relative overflow-hidden">
      <img
        src={bgAuth}
        alt=""
        className=" bg-center bg-no-repeat bg-cover sm:rotate-90 absolute h-[100dvh] sm:h-full top-0"
      />
      <div className="max-w-[50em] w-full p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default Auth
