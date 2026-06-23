import ArticleCart from "@/components/cards/ArticleCart"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { setIncreaseQuantity, selectCart, setDecreaseQuantity } from "../slice"

const Articles = () => {
  const cart = useAppSelector(selectCart)

  const dispatch = useAppDispatch()

  const handleIncrease = (id: string) => {

    dispatch(setIncreaseQuantity(id))
  }

  const handleDecrease = (id: string) => {
    dispatch(setDecreaseQuantity(id))
  }

  return (
    <div className="pt-4  overflow-hidden h-full">
      <div className="flex flex-col h-full overflow-auto">
        {cart.items.map(product => {
          return (
            <ArticleCart
              key={product.id}
              article={product}
              onIncrease={() => handleIncrease(product.id)}
              onDecrease={() => handleDecrease(product.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Articles
