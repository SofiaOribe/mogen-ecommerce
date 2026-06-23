import BadgeCustom from "@/components/badges/BadgeCustom"
import { TOrders } from "../types"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { RefreshCw } from "lucide-react"
import { Link } from "react-router-dom"

const DetailOrder = ({ details }: { details: TOrders }) => {
  const statusLowerCase = details.status.toLowerCase()
  const variantStatusBadge = () => {
    switch (statusLowerCase) {
      case "paid":
        return "green"
      case "pending":
        return "yellow"
      case "declined":
        return "coral"
      default:
        return "lightGrey"
    }
  }
  const variantBadge = variantStatusBadge()

  return (
    <div className="w-full flex flex-col gap-4 border-b border-color-black pb-4">
      <div className="flex flex-row justify-between items-center">
        <p className="font-x1-600-brown">#{details.id}</p>
        <div className="flex flex-row w-full justify-end gap-4 items-center">
          <p className="font-x1-600-black">${details.total}</p>
          <BadgeCustom text={details.status} variant={variantBadge} />
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-4">
        <p className="font-x0875-600-brown">
          {details.address + ", " + details.city + " " + details.zipCode + " - " + details.country}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {details.product.map(article => (
          <div key={article.id} className="flex flex-row gap-4 bg-light-gray rounded-md px-2.5 py-2 h-[90px]">
            <div className="h-full w-[4em] rounded-sm overflow-hidden">
              <img src={article.image} alt="" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="flex flex-col justify-between ">
              <Link to={""} className="font-x0875-500-black hover:underline">
                {article.name}
              </Link>
              <div>
                <p className="font-x0875-500-black">Quantity: {article.quantity}</p>
                <p className="font-x0875-600-black">Total: {Number.parseFloat(article.price) * article.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {statusLowerCase === "paid" && (
        <ButtonPrimary
          text="Repeat purchase"
          onClick={() => {}}
          icon={RefreshCw}
          classes={{
            backgroundClass: "bg-purchaseColor",
            roundedClass: "rounded-sm",
            textClass: "font-x0875-600-brown",
            iconClassName: "color-brown",
            borderClass: "border border-color-brown",
          }}
        />
      )}
    </div>
  )
}

export default DetailOrder
