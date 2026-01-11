import { Link } from "react-router-dom"
import github from "../../assets/images/icons/github.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-8 py-8 bg-light-peach">
      <h3 className="font-honeypirls-x4-400-black">MÖGEN</h3>
      <div className="sm:absolute flex sm:flex-col gap-4 top-8 right-8">
        <Link to="https://github.com/SofiaOribe">
          <img src={github} className="w-8 h-8" />
        </Link>
        <Link to="https://www.linkedin.com/in/sofiaoribe/">
          <img src={linkedin} className="w-8 h-8" />
        </Link>
      </div>
      <p className="font-x075-300-black text-center">
        Website created for educational purposes and
        <br />
        does not represent a real entity.
      </p>
      <span className="font-x075-300-black">© Copyright 2025, All Rights Reserved by Sofia Oribe</span>
    </div>
  )
}

export default Footer
