import { useAppDispatch } from "@/app/hooks"
import { MoveUpRight, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { setShowCart } from "../slice"

const EmptyContent = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="w-full h-full justify-center items-center flex flex-col gap-9">
      <div className="flex flex-col items-center gap-4">
        <ShoppingCart className="w-8 h-8 stroke-2" />
        <p className="font-x125-400-black">The shopping cart is empty</p>
      </div>

      <Link
        to="/shop"
        className="font-x125-600-black bg-green border-none rounded-md px-4 py-4 flex justify-center items-center gap-2 w-full shadow-sm"
        onClick={() => {
          dispatch(setShowCart(false))
        }}
      >
        Go to the store
        <MoveUpRight className="w-6 h-6 stroke-2" />
      </Link>
    </div>
  )
}

export default EmptyContent
