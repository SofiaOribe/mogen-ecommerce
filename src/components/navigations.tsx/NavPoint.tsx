import { Dot } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

type TNavPointProps = {
  items: {
    _id: string
    name: string
    link: string
  }[]
}

const NavPoint = ({ items }: TNavPointProps) => {
  const location = useLocation()

  return (
    <div className="flex flex-row w-full items-center">
      {items.map(item => {
        const isActive = location.pathname.includes(item._id)
        return (
          <Link to={`${item.link}`} key={item._id} className="w-full flex flex-col gap-2.5 justify-center items-center">
            <p
              className={`
          font-x0875-500-black
          transition-transform duration-500 ease-out
          ${isActive ? "-translate-y-2" : "translate-y-0"}
        `}
            >
              <span className="sm:hidden">{item.name.split(" ")[0]}</span>
              <span className="hidden sm:inline">{item.name}</span>
            </p>
            {location.pathname.includes(item._id) && (
              <Dot
                className={`
          w-8 h-8
          transition-all duration-500 ease-out
          ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
              />
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default NavPoint
