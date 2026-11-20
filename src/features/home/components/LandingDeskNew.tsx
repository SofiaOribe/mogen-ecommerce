import { Link } from "react-router-dom"
import landingImage from "../../../assets/images/landing/landing_image.png"
import cleaners_image from "../../../assets/images/landing/cleaners_image.png"
import moisturizers_image from "../../../assets/images/landing/moisturizers_image.png"
import serums_image from "../../../assets/images/landing/serums_image.png"
import exfoliant_image from "../../../assets/images/landing/exfoliant_image.png"

const LandingDeskNew = () => {
  return (
    <div className="w-dvw md:h-dvh relative">
      <div className=" w-full h-full flex flex-col items-center justify-center md:absolute z-[-1]">
        <div className="relative">
          <img
            src={landingImage}
            alt="Landing"
            className="max-w-[800px] w-full h-dvh md:h-auto object-cover border border-color-black "
          />
          <h1 className="font-honeypirls-x4-400-white pb-4 [-webkit-text-stroke:1px_#000] absolute top-[50%] md:top-35  w-full text-center ">
            MÖGEN
          </h1>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full gap-5  py-20 p-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <Link to={`/shop/categories/facial-line/moisturizers`} className={`max-w-[15em] w-full h-auto`}>
            <div className="bg-white border border-color-black">
              <div className="h-[13em] md:h-[20em] w-full">
                <img src={moisturizers_image} alt="Landing" className="h-full w-full object-center object-fill" />
              </div>
              <div className="font-kapakana-x25-700-black border-t border-color-black text-center p-2">
                Moisturizers
              </div>
            </div>
          </Link>

          <Link to={`/shop/categories/facial-line/cleaners`} className={`max-w-[15em] w-full h-auto`}>
            <div className="bg-white border border-color-black">
              <div className="h-[13em] md:h-[20em] w-full">
                <img src={cleaners_image} alt="Landing" className="h-full w-full object-center object-fill" />
              </div>
              <div className="font-kapakana-x25-700-black border-t border-color-black text-center p-2">Cleaners</div>
            </div>
          </Link>
        </div>
        <div className="w-[800px] hidden md:block"></div>
        <div className="flex flex-col items-center justify-center gap-4  ">
          <Link to={`/shop/categories/facial-line/serum`} className={`max-w-[15em] w-full h-auto`}>
            <div className="bg-white border border-color-black">
              <div className="h-[13em] md:h-[20em] w-full">
                <img src={serums_image} alt="Landing" className="h-full w-full object-center object-fill" />
              </div>
              <div className="font-kapakana-x25-700-black border-t border-color-black text-center p-2">Serums</div>
            </div>
          </Link>
          <Link to={`/shop/categories/body-line/exfoliator`} className={`max-w-[15em] w-full h-content`}>
            <div className="bg-white border border-color-black">
              <div className="h-[13em] md:h-[20em] w-full">
                <img src={exfoliant_image} alt="Landing" className="h-full w-full object-center object-fill" />
              </div>
              <div className="font-kapakana-x25-700-black border-t border-color-black text-center p-2">Scrums</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingDeskNew
