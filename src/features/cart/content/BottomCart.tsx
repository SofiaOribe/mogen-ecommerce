import { useAppDispatch, useAppSelector } from "@/app/hooks"
/* import BadgeCustom from "@/components/badges/BadgeCustom" */
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
/* import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, PlusIcon } from "lucide-react"
*/
import { useState } from "react"
import { createCheckout } from "../api"
import { selectCart, setShowCart } from "../slice"
import { useAuth } from "@/providers/AuthProvider"
import { useNavigate } from "react-router-dom"
import { selectProfile } from "@/features/profile/slice"
import AlertComponentAction from "@/components/alerts/AlertComponentAction"

const BottomCart = () => {
  /*   const [discountCode, setDiscountCode] = useState(false)
  const [discountCodeValue, setDiscountCodeValue] = useState("")
  const validCodes = ["APOLOGIA"] */
  const [showAlertLogin, setShowAlertLogin] = useState(false)
  const [showAlertInformation, setShowAlertInformation] = useState(false)
  const cart = useAppSelector(selectCart)
  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  const { session } = useAuth()
  const navigate = useNavigate()
  const profile = useAppSelector(selectProfile)
  const user = profile.account
  const dispatch = useAppDispatch()

  /*   const handleDiscountCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCodeValue(e.target.value)
  }

  const handleValidateDiscountCode = () => {
    if (discountCodeValue.length === validCodes[0].length && validCodes.includes(discountCodeValue.toUpperCase())) {
      setIsZipCodeValid(true)
    }
  }
 */
  const handleCheckout = async () => {
    if (!session?.user.id) {
      return setShowAlertLogin(true)
    } else if (cart.items.length !== 0) {
      if (!user.address || !user.postal_code || !user.province || !user.city) {
        return setShowAlertInformation(true)
      } else {
        const { data, error } = await createCheckout(cart.items)

        if (error || !data?.url) return

        window.location.href = data.url
      }
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {showAlertLogin && (
        <AlertComponentAction
          title={"You need to know that..."}
          description={"To make a payment, you must log in."}
          textButton={"Log in"}
          onClick={() => {
            navigate("/auth/login")
            dispatch(setShowCart(false))
          }}
          onClose={() => {
            setShowAlertLogin(false)
          }}
        />
      )}
      {showAlertInformation && (
        <AlertComponentAction
          title={"Complete the steps"}
          description={"To complete your purchase, you must finish filling out your information."}
          textButton={"Edit profile"}
          onClick={() => {
            navigate("/profile/account")
            dispatch(setShowCart(false))
          }}
          onClose={() => {
            setShowAlertInformation(false)
          }}
        />
      )}
      {/*      <div className="flex flex-col gap-2">
        <p className="font-x0875-600-black">Shipping methods</p>
      </div> */}

      <div className="flex flex-col gap-4 w-full">
        {/* <Button
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
        )} */}

        <div className="flex flex-col gap-2">
          <p className="font-x1-600-black">Total (no shipping): ${total}</p>
          {/* <p className="font-x075-400-black">
            or up to 3 installments of: ${(Number.parseFloat(total) / 3).toFixed(2)}
          </p> */}
        </div>
        <ButtonPrimary
          text={`Start shopping $${total}`}
          variant="secondary"
          disabled={false}
          classes={{ sizeClass: "w-full h-12", textClass: "font-x1-600-black" }}
          onClick={async () => {
            handleCheckout()
          }}
        />
      </div>
    </div>
  )
}

export default BottomCart
