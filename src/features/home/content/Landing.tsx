import skin_1 from "../../../assets/images/landing/skin_1.png"
import flower from "../../../assets/images/landing/flower_1.png"
import moisturizers from "../../../assets/images/landing/moisturizers.png"
import serumSkin from "../../../assets/images/landing/serum.png"
import cleaners from "../../../assets/images/landing/cleaners.png"
import { MoveDown, MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

const Landing = () => {
  const generalClass = "w-[13em] h-[13em]"
  const imageClass = "object-contain bg-center bg-no-repeat bg-cover"
  return (
    <div className="w-full flex flex-col items-center px-4 pb-[8em] gap-4">
      <h1 className="font-honeypirls-x4-400-black pb-4">MÖGEN</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className={`${generalClass} flex items-end bg-light-peach`}>
          <span className="font-x125-400-black p-4">Pure essentials for radiant skin.</span>
        </div>
        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${skin_1})` }} />
        <div className={`${generalClass} flex items-center justify-center bg-transparent`}></div>
        <Link to={""} className={`group [perspective:1000px] ${generalClass}`}>
          <div className="relative w-full h-full transition-transform duration-600 [transform-style:preserve-3d] group-hover:rotate-y-180">
            <div
              className={`${generalClass} ${imageClass} absolute inset-0 bg-cover bg-center backface-hidden`}
              style={{ backgroundImage: `url(${moisturizers})` }}
            />

            <div
              className={`${generalClass} ${imageClass} absolute inset-0 bg-cover bg-center rotate-y-180 backface-hidden bg-coral flex items-center justify-center `}
            >
              <div className="font-x125-700-black uppercase">Moisturizers</div>
            </div>
          </div>
        </Link>
        <Link
          to={""}
          className={`${generalClass} flex items-center justify-center bg-green group relative transition-shadow duration-300 `}
        >
          <span className="font-x125-700-black p-4">SCRUBS</span>
          <div className="absolute top-18 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-4 transition-all duration-300 !rounded-none !p-0 shadow-none !h-fit">
            <p className="font-x0875-700-black uppercase flex flex-row gap-1">
              se all in
              <MoveDown className="w-3 h-3 stroke-2" />
            </p>
          </div>
        </Link>

        <Link to={""} className={`${generalClass} ${imageClass} group relative overflow-hidden`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:translate-y-full z-0"
            style={{ backgroundImage: `url(${serumSkin})` }}
          />
          <div className="absolute inset-0 bg-light-cream flex flex-row items-center justify-center transition-transform duration-500 -translate-y-full group-hover:translate-y-0 z-10 gap-2">
            <div className=" flex flex-row gap-1">
              <span className="font-x125-700-black uppercase transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                serums
              </span>
            </div>
          </div>
        </Link>

        <div className={`${generalClass} ${imageClass}`} style={{ backgroundImage: `url(${flower})` }} />

        <Link to={""} className={`${generalClass} ${imageClass} group relative overflow-hidden`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:translate-x-full z-0"
            style={{ backgroundImage: `url(${cleaners})` }}
          />
          <div className="absolute inset-0 bg-light-cream flex items-center justify-center transition-transform duration-500 -translate-x-full group-hover:translate-x-0 z-10">
            <span className="font-x125-700-black uppercase ">Cleaners</span>
          </div>
        </Link>

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
