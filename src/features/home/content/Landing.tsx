import skin_1 from "../../../assets/images/landing/skin_1.png"
import flower from "../../../assets/images/landing/flower_1.png"
import moisturizers from "../../../assets/images/landing/moisturizers.png"
import serumSkin from "../../../assets/images/landing/serum.png"
import cleaners from "../../../assets/images/landing/cleaners.png"
import { Button } from "@/components/ui/button"
import { MoveDown, MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

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
        <div className="group [perspective:1000px] w-[14em] h-[14em]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
            {/* Cara frontal */}
            <div
              className={`${generalClass} ${imageClass} absolute inset-0 bg-cover bg-center backface-hidden`}
              style={{ backgroundImage: `url(${moisturizers})` }}
            />

            {/* Cara trasera */}
            <Link
              to={""}
              className={`${generalClass} ${imageClass} absolute inset-0 bg-cover bg-center rotate-y-180 backface-hidden bg-coral `}
               // reemplaza alternateImage con tu segunda imagen
            >
              <div className="font-x125-600-black capitalize-first">Moisturizers</div>
            </Link>
          </div>
        </div>
        <div
          className={`${generalClass} flex items-center justify-center bg-green group relative transition-shadow duration-300 `}
        >
          <span className="font-x125-700-black p-4">SCRUBS</span>
          <Button className="absolute top-18 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-4 transition-all duration-300 !rounded-none !p-0 shadow-none !h-fit">
            <p className="font-x0875-700-black uppercase flex flex-row gap-1">
              se all in
              <MoveDown className="w-3 h-3 stroke-2" />
            </p>
          </Button>
        </div>
        <Link
          to={""}
          className={`${generalClass} ${imageClass} group relative bg-cover bg-center`}
          style={{ backgroundImage: `url(${serumSkin})` }}
        >
          <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="font-x125-600-black capitalize-first">serums</span>
          </div>
        </Link>
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${flower})` }} />
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${cleaners})` }} />
        <Link
          to={""}
          className={`${generalClass} flex items-center justify-center text-center bg-coral group relative transition-shadow duration-300 hover:shadow-[-3px_3px_0_#000]`}
        >
          <span className="font-x125-700-black p-4 uppercase transform transition-transform duration-300 group-hover:-translate-y-2">
            skincare <br /> rituals made for you.
          </span>
          <p className="absolute bottom-14 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 !rounded-none !p-0 shadow-none border-b border-color-black !h-fit">
            <span className="font-x0875-700-black uppercase flex flex-row gap-1">
              go to shop
              <MoveRight className="w-3 h-3 stroke-2" />
            </span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Landing
