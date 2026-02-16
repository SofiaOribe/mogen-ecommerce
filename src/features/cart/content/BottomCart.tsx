import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X } from "lucide-react"
import { useState } from "react"

const BottomCart = () => {
  const [openInput, setOpenInput] = useState(false)
  const [discountCode, setDiscountCode] = useState(false)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-x0875-600-black">Shipping methods</p>
        <div className="flex flex-row gap-3">
          <Input placeholder="Zip code" className="h-10 rounded-md" />
          <ButtonPrimary
            icon={Plus}
            variant="green"
            classes={{
              borderClass: "border-none",
              sizeClass: "!h-10 !w-10",
            }}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          {!openInput && (
            <button
              onClick={() => {
                setOpenInput(true)
              }}
              className="border-none bg-none font-x075-500-black flex max-w-fit underline cursor-pointer"
            >
              I don't know my zip code
            </button>
          )}
          {openInput && (
            <div className="flex flex-col gap-1 w-full">
              <p className="font-x075-500-black">Search by city oder state</p>
              <ButtonGroup className="w-full">
                <Input id="input-button-group" placeholder="City, State" className="h-10 rounded-md" />
                <Button
                  variant="outline"
                  className="!h-10 cursor-pointer"
                  onClick={() => {
                    setOpenInput(false)
                  }}
                >
                  <X className="w-4" />
                </Button>
              </ButtonGroup>
            </div>
          )}
        </div>
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
        <Input placeholder="Zip code" className="h-10 rounded-md" />
      </div>
    </div>
  )
}

export default BottomCart
