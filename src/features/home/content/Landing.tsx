import skin_1 from "../../../assets/images/landing/skin_1.png"
import flower from "../../../assets/images/landing/flower_1.png"
import moisturizers from "../../../assets/images/landing/moisturizers.png"
import serumSkin from "../../../assets/images/landing/serum.png"
import cleaners from "../../../assets/images/landing/cleaners.png"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

const Landing = () => {
  const generalClass = "w-[14em] h-[14em]"
  const imageClass = "object-contain bg-center bg-no-repeat bg-cover"
  return (
    <div className="w-full flex flex-col items-center px-4 py-[8em] gap-8">
      <h1 className="font-honeypirls-x4-400-black">MÖGEN</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className={`${generalClass} flex items-end bg-light-peach`}>
          <span className="font-x125-400-black p-4">Pure essentials for radiant skin.</span>
        </div>
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${skin_1})` }} />
        <div className={`${generalClass} flex items-center justify-center bg-transparent`}></div>
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${moisturizers})` }} />
        <div className={`${generalClass} flex items-center justify-center bg-green`}>
          <span className="font-x125-700-black p-4">SCRUBS</span>
        </div>
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${serumSkin})` }} />
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${flower})` }} />
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${cleaners})` }} />
        <div
          className={`${generalClass} flex items-center justify-center text-center bg-coral group transition-shadow duration-300 hover:shadow-[-3px_3px_0_#000]`}
        >
          <span className="font-x125-700-black p-4 uppercase transform transition-transform duration-300 group-hover:-translate-y-2">
            skincare <br /> rituals made for you.
          </span>
          <Button className="absolute bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 !rounded-none !p-0 shadow-none border-b border-color-black !h-fit">
            <p className="font-x0875-700-black uppercase flex flex-row gap-1">
              go to shop
              <MoveRight className="w-3 h-3 stroke-2" />
            </p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Landing
