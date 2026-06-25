import { useAppDispatch } from "@/app/hooks"
import { useAuth } from "@/providers/AuthProvider"
import { addToCartAsync } from "../cart/slice"
import { TProduct } from "./types"
import { toast } from "sonner"
import { StyleToaster } from "@/components/ui/sonner"

const useAddItemHook = () => {
  const { session } = useAuth()
  const dispatch = useAppDispatch()
  

  const handleAddToCart = (item: TProduct) => {
    if (item.id)
      dispatch(
        addToCartAsync({
          userId: session?.user.id,
          product: {
            id: item.id,
            name: item.name,
            image: item.images[0],
            price: item.price,
            stock: item.stock,
            quantity: 1,
          },
        }),
      ).then(res => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success(item.name + "has been successfully added", {
            position: "bottom-center",
            style: StyleToaster.success,
            closeButton: true,
          })
        } else {
          toast.warning("Oops, an error has occurred", {
            position: "bottom-center",
            style: StyleToaster.warning,
          })
        }
      })
  }

  return { handleAddToCart }
}

export default useAddItemHook
