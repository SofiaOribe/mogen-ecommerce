import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"
import { selectProfile, getOrdersAsync } from "../slice"
import DetailOrder from "./DetailOrder"
import { Link } from "react-router-dom"
import { MoveUpRight } from "lucide-react"

const Orders = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(selectProfile)
  const orders = profile.orders

  useEffect(() => {
    if (profile.account.id) {
      dispatch(getOrdersAsync({ userId: profile.account.id }))
    }
  }, [profile.account.id])

  return (
    <div className="w-full h-full border-t-1 border-color-black flex flex-col gap-4 pt-4">
      {orders.length !== 0 ? (
        orders.map(order => <DetailOrder key={order.id} details={order} />)
      ) : (
        <div className="w-full h-full justify-center items-center flex flex-col gap-9">
          <div className="flex flex-col items-center gap-4">
            <p className="font-x125-400-black">You haven't made any purchases so far.</p>
          </div>

          <Link
            to="/shop"
            className="font-x0875-600-black bg-black border-none rounded-full px-4 py-4 flex justify-center items-center gap-2 shadow-sm color-white"
          >
            Go to the store
            <MoveUpRight className="w-4 h-4 stroke-2" />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Orders
