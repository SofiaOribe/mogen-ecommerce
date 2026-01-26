import ButtonPrimary from "./ButtonPrimary"
import { Minus, Plus, Trash2 } from "lucide-react"

const ButtonCounter = ({
  value,
  onIncrease,
  onDecrease,
  cartArticle,
}: {
  value: number
  onIncrease: () => void
  onDecrease: () => void
  cartArticle?: boolean
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <ButtonPrimary
        icon={cartArticle && value === 1 ? Trash2 : Minus}
        onClick={onDecrease}
        classes={{
          borderClass: "border-none shadow-md",
          sizeClass: cartArticle ? "!h-7 !w-4" : "!w-10 !h-10",
          roundedClass: "!rounded-sm",
        }}
        style={{ minWidth: "2em" }}
      />
      <p className="font-x08125-500-black">{value}</p>
      <ButtonPrimary
        icon={Plus}
        onClick={onIncrease}
        variant="secondary"
        classes={{
          borderClass: "border-none shadow-md",
          sizeClass: cartArticle ? "!h-7 !w-4" : "!w-10 !h-10",
          roundedClass: "!rounded-sm",
        }}
        style={{ minWidth: "2em" }}
      />
    </div>
  )
}

export default ButtonCounter
