import BadgeCustom from "@/components/badges/BadgeCustom"
import { TOrders } from "../types"
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
      <div className="flex flex-row justify-between items-center w-full">
        <p className="font-x1-600-brown w-full">#{details.order_number.slice(-4)}</p>
        <div className="flex flex-row w-full justify-end gap-4 items-center">
          <p className="font-x1-600-black">${Number(details.total).toFixed(2)}</p>
          <BadgeCustom text={details.status} variant={variantBadge} />
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-4">
        <p className="font-x0875-600-brown">
          {details.address + ", " + details.city + " " + details.zip_code + " - " + details.country}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {details.order_items.map(article => (
          <div key={article.id} className="flex flex-col md:flex-row gap-4 bg-light-gray rounded-md px-2.5 py-2 md:h-[120px]">
            <div className="max-h-[10em] h-full md:w-[6em] rounded-sm overflow-hidden bg-white">
              <img src={article.image} alt={article.name} className="w-full h-full object-contain object-bottom" />
            </div>
            <div className="flex flex-col justify-between w-full">
              <Link to={""} className="font-x0875-500-black hover:underline line-clamp-2">
                {article.name}
              </Link>
              <div className="w-full">
                <p className="font-x0875-500-black">Quantity: {article.quantity}</p>
                <div className="flex flex-col md:flex-row gap-2 justify-between">
                  <p className="font-x0875-500-black">Price: ${Number(article.price).toFixed(2)}</p>
                  <p className="font-x0875-600-black">Total: ${Number.parseFloat(article.price) * article.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*    {statusLowerCase === "paid" && (
        <ButtonPrimary
          text="Repeat purchase"
          onClick={() => {
            handleCheckout()
          }}
          icon={RefreshCw}
          classes={{
            backgroundClass: "bg-purchaseColor",
            roundedClass: "rounded-sm",
            textClass: "font-x0875-600-brown",
            iconClassName: "color-brown",
            borderClass: "border border-color-brown",
          }}
        />
      )} */}
    </div>
  )
}

export default DetailOrder
