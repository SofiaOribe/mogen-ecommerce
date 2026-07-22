import ArticleCart from "@/components/cards/ArticleCart"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {
  setIncreaseQuantity,
  selectCart,
  setDecreaseQuantity,
  updateQuantityAsync,
  removeCartItemAsync,
} from "../slice"
import { TCartItem } from "../types"
import { useAuth } from "@/providers/AuthProvider"

const Articles = () => {
  const cart = useAppSelector(selectCart)
  const { session } = useAuth()
  const dispatch = useAppDispatch()

  const handleIncrease = (product: TCartItem) => {
    const newQuantity = product.quantity + 1

    if (session?.user.id) {
      dispatch(
        updateQuantityAsync({
          userId: session.user.id,
          productId: product.id,
          quantity: newQuantity,
        }),
      )
    } else {
      dispatch(setIncreaseQuantity(product.id))
    }
  }

  const handleDecrease = (product: TCartItem) => {
    if (product.quantity > 1) {
      dispatch(setDecreaseQuantity(product.id))

      if (session?.user.id) {
        dispatch(
          updateQuantityAsync({
            userId: session.user.id,
            productId: product.id,
            quantity: product.quantity - 1,
          }),
        )
      }
    } else if (session?.user.id) {
      dispatch(
        removeCartItemAsync({
          userId: session.user.id,
          productId: product.id,
        }),
      )
    } else {
      dispatch(setDecreaseQuantity(product.id))
    }
  }

  return (
    <div className="pt-4  overflow-hidden h-full">
      <div className="flex flex-col h-full overflow-auto">
        {cart.items.map(product => {
          return (
            <ArticleCart
              key={product.id}
              article={product}
              onIncrease={() => handleIncrease(product)}
              onDecrease={() => handleDecrease(product)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Articles
