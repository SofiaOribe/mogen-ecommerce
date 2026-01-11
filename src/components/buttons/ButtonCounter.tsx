import ButtonPrimary from "./ButtonPrimary"
import { Minus, Plus } from "lucide-react"

const ButtonCounter = () => {
  const value = 1

  return (
    <div className="flex flex-row items-center gap-4">
      <ButtonPrimary
        icon={Minus}
        classes={{
          borderClass: "border-none shadow-md",
          sizeClass: "!w-10 !h-10",
          roundedClass: "!rounded-sm",
        }}
        style={{ minWidth: "2em" }}
      />
      <p className="font-x08125-500-black">{value}</p>
      <ButtonPrimary
        icon={Plus}
        variant="secondary"
        classes={{
          borderClass: "border-none shadow-md",
          sizeClass: "!w-10 !h-10",
          roundedClass: "!rounded-sm",
        }}
        style={{ minWidth: "2em" }}
      />
    </div>
  )
}

export default ButtonCounter
