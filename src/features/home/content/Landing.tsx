import LandingDesk from "../components/LandingDesk"
import LandingMobile from "../components/LandingMobile"

const Landing = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 gap-4 h-dvh justify-center">
      <h1 className="font-honeypirls-x4-400-black pb-4">MÖGEN</h1>
      <div className="hidden md:block">
        <LandingDesk />
      </div>
      <div className="block md:hidden">
        <LandingMobile />
      </div>
    </div>
  )
}

export default Landing
