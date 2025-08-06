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
      {items.map(item => (
        <Link
          to={`${item.link}`}
          key={item._id}
          className="w-full flex flex-col gap-2.5 justify-center items-center"
        >
          <p className="font-x0875-500-black">{item.name}</p>
          {location.pathname.includes(item._id) && <Dot className="w-8 h-8 color-black" />}
        </Link>
      ))}
    </div>
  )
}

export default NavPoint
