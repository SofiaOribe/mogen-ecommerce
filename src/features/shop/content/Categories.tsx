import { useAppDispatch, useAppSelector } from "@/app/hooks"
import ShopCard from "@/components/cards/ShopCard"
import { getProductsAsync, selectShop } from "../slice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Categories = () => {
  const dispatch = useAppDispatch()
  const { categoryId } = useParams()

  const { products, status } = useAppSelector(selectShop)

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductsAsync())
    }
  }, [])

  const filteredProducts = products.filter(product => {
    if (!categoryId || categoryId === "all") return true

    if (categoryId === "best-seller") {
      return product.subcategories?.includes("best-seller")
    }

    return product.category === categoryId
  })

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-l border-black">
        {filteredProducts.map(item => {
          return (
            <div key={item._id} className="border-b border-r border-black ">
              <ShopCard
                title={item.name}
                image={item.images[0]}
                price={item.price}
                link={`/shop/product/${item._id}`}
                onAddToCart={() => {}}
                onSave={() => {}}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
