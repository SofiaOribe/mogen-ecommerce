import { Button } from "@/components/ui/button"
import apple from "../../../assets/images/icons/apple.svg"

const AppPresentation = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-16 px-16 pt-[8em] pb-[16em]">
      <h4 className="font-x1625-400-black">Real Design. Real Code. Real Impact.</h4>
      <p className="font-x1125-400-black text-center">
        A sleek and intuitive mobile <br />
        experience—designed and developed from scratch.
      </p>
      <Button className="p-4 py-6 max-w-[22.18em] w-full bg-black gap-2.5 rounded-[1em] flex-row justify-center items-center cursor-pointer shadowBtnCustom ">
        <img src={apple} alt="Download for iOS" className="w-4 h-4" />
        <p className="font-x1125-500-white">Download for iOS</p>
      </Button>
      <div className="backgroundBlur top-[6em] left-[35%] w-[12em] h-[12em] filter-[blur(60px)]" />
      <div className="backgroundBlur bottom-[12em] right-[28%] w-[12.75em] h-[12em] filter-[blur(80px)]" />
    </div>
  )
}

export default AppPresentation
