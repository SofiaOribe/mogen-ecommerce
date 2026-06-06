import { Bookmark, ShoppingBag } from "lucide-react"
import ButtonPrimary from "../buttons/ButtonPrimary"
import { Link } from "react-router-dom"

type TCardProps = {
  onSave?: () => void
  onAddToCart?: () => void
  onClick?: () => void
  image: string
  title: string
  price: string
  link: string
  wishlist?: boolean
}

const ShopCard = ({ onSave, onAddToCart, onClick, image, title, price, link, wishlist }: TCardProps) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="relative w-full h-full flex flex-col bg-white p-0 overflow-hidden shadow-none rounded-none"
    >
      {onSave && (
        <div className="absolute top-2 left-2">
          <ButtonPrimary
            variant={wishlist ? "coral" : "primary"}
            icon={Bookmark}
            onClick={onSave}
            classes={{
              paddingClass: "!p-1.5",
              borderClass: "border border-color-black",
              roundedClass: "rounded-full",
              /*     iconClassName: wishlist ? "fill-[#ffc3b7] stroke-[#ffc3b7]" : "", */
              backgroundClass: wishlist ? "" : "hover:bg-[#ffc3b7]",
            }}
          />
        </div>
      )}
      {onAddToCart && (
        <div className="absolute top-2 right-2">
          <ButtonPrimary
            variant="green"
            icon={ShoppingBag}
            onClick={onAddToCart}
            classes={{
              paddingClass: "!p-1.5",
              borderClass: "border border-color-black",
              roundedClass: "rounded-full",
              backgroundClass: "hover:bg-[#c9e7cb]",
            }}
          />
        </div>
      )}
      <div className="max-h-[32.375em] h-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full " />
      </div>
      <div className="p-3 flex flex-col gap-2 justify-center w-full h-16.5">
        <p className="font-x0875-500-black text-center">{title}</p>
        <p className="font-x0875-500-black text-center">${price}</p>
      </div>
    </Link>
  )
}

export default ShopCard
