import BadgeCustom from "@/components/badges/BadgeCustom"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, PlusIcon } from "lucide-react"
import { useState } from "react"

const BottomCart = () => {
  const [discountCode, setDiscountCode] = useState(false)
  const [discountCodeValue, setDiscountCodeValue] = useState("")
  const [isZipCodeValid, setIsZipCodeValid] = useState(false)
  const validCodes = ["APOLOGIA"]

  const handleDiscountCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCodeValue(e.target.value)
  }
  const handleValidateDiscountCode = () => {
    if (discountCodeValue.length === validCodes[0].length && validCodes.includes(discountCodeValue.toUpperCase())) {
      setIsZipCodeValid(true)
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-x0875-600-black">Shipping methods</p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Button
          variant="outline"
          className="!h-auto cursor-pointer !p-0 border-none bg-none flex max-w-fit shadow-none hover:bg-transparent"
          onClick={() => {
            setDiscountCode(!discountCode)
          }}
        >
          <p className="font-x0875-400-black">Discount code?</p>

          <Plus className={`w-4 transition-transform duration-300 ${discountCode ? "rotate-45" : "rotate-0"}`} />
        </Button>

        <div
          className={`${discountCode ? "slide-down-inputs" : "slide-down-inputs-hidden"} flex flex-row gap-2 items-center`}
        >
          <Input
            placeholder="Zip code"
            className="h-10 rounded-md"
            onChange={e => {
              handleDiscountCodeChange(e)
            }}
          />
          <ButtonPrimary
            variant="green"
            icon={PlusIcon}
            classes={{
              borderClass: "border-none",
              sizeClass: "!h-9.5 !w-9.5",
            }}
            onClick={() => {
              handleValidateDiscountCode()
            }}
          />
        </div>
        {discountCodeValue && isZipCodeValid && (
          <BadgeCustom text={discountCodeValue} variant="coral" onDelete={() => {}} />
        )}

        <div className="flex flex-col gap-2">
          <p className="font-x0875-500-black">Subtotal (no shipping): $211.65</p>
          <p className="font-x075-400-black">or up to 3 installments of: $85.65</p>
        </div>
        <ButtonPrimary
          text={`Start shopping $${211.65}`}
          variant="secondary"
          classes={{ sizeClass: "w-full h-12", textClass: "font-x1-600-black" }}
        />
      </div>
    </div>
  )
}

export default BottomCart
