import { useNavigate } from "react-router-dom"
import bgAuth from "../../../assets/images/landing/bgAuth.png"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { MoveUpRight, ShoppingBag } from "lucide-react"
import { useEffect } from "react"
import { selectProfile } from "@/features/profile/slice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { loadCart, saveCart } from "../cartStorage"
import { clearCart, createOrder } from "../api"
import { toast } from "sonner"
import { StyleToaster } from "@/components/ui/sonner"
import { setClearCart } from "../slice"

const Success = () => {
  const navigate = useNavigate()
  const profile = useAppSelector(selectProfile)
  const user = profile.account
  const dispatch = useAppDispatch()

  const saveOrder = async () => {
    const items = loadCart()

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const { data, error } = await createOrder(
      user.id,
      items,
      total,
      user.address,
      user.postal_code,
      user.province,
      user.city,
    )

    if (error) {
      return toast.error(error.message, {
        position: "bottom-center",
        style: StyleToaster.error,
      })
    } else if (data) {
      saveCart([])
      dispatch(setClearCart())
      await clearCart(user.id)
    }
  }

  useEffect(() => {
    if (!user?.id) return

    saveOrder()
  }, [user?.id])

  return (
    <div className="w-[100dvw] flex justify-center items-center h-[calc(100dvh_+_8em)] lg:h-dvh relative overflow-hidden">
      <img
        src={bgAuth}
        alt=""
        className=" bg-center bg-no-repeat bg-cover sm:rotate-90 absolute h-full sm:h-full top-0"
      />
      <div className="max-w-[50em] w-full px-6 md:p-0 h-full ">
        <div className="w-full h-full relative box-border">
          <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
            <div className="flex justify-center items-center bg-green p-4 rounded-full border border-color-black ">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h3 className="font-x2-600-black">The purchase has been completed successfully!</h3>
            <p className="font-x1-400-black">You can now see the status of your purchase</p>
            <ButtonPrimary
              type="button"
              variant="coral"
              classes={{
                roundedClass: "shadow-md rounded-full",
                paddingClass: "px-8 py-3",
              }}
              icon={MoveUpRight}
              text="Go to orders"
              onClick={() => {
                navigate("/profile/orders")
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
