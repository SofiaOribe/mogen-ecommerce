import { useAppDispatch, useAppSelector } from "@/app/hooks"
import ShopCard from "@/components/cards/ShopCard"
import { getProductsAsync, selectShop } from "../slice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { addToCartAsync } from "@/features/cart/slice"
import { toast } from "sonner"
import { StyleToaster } from "@/components/ui/sonner"
import { useAuth } from "@/providers/AuthProvider"

const Categories = () => {
  const dispatch = useAppDispatch()
  const { categoryId, subcategoryId } = useParams()
  const { products, status, sortBy } = useAppSelector(selectShop)
  const { session } = useAuth()
  useEffect(() => {
    if (!products.length) {
      dispatch(getProductsAsync())
    }
  }, [])

  const filteredProducts = products
    .filter(product => {
      if (!categoryId || categoryId === "all") return true
      if (categoryId === "best-seller") {
        return product.subcategories?.includes("best-seller")
      }
      const categoryMatch = product.category === categoryId

      const subcategoryMatch = !subcategoryId || product.subcategories?.includes(subcategoryId)

      return categoryMatch && subcategoryMatch
    })
    .sort((a, b) => {
      if (sortBy === "lowest_price") {
        return a.price - b.price
      }

      if (sortBy === "higher_price") {
        return b.price - a.price
      }

      return 0
    })

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 border-l border-black">
        {status === "FULFILLED" &&
          filteredProducts.map((item, index) => {
            const borderTopDesktop = index < 3
            const borderTopMobile = index < 2
            return (
              <div
                key={item.id}
                className={`border-r border-b border-black ${borderTopDesktop ? "sm:border-t" : ""} ${borderTopMobile ? "border-t" : ""} h-[24em] md:h-[28em] `}
              >
                <ShopCard
                  title={item.name}
                  image={item.images[0]}
                  price={item.price}
                  link={`/shop/product/${item.id}`}
                  onAddToCart={() => {
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
                  }}
                  onSave={() => {}}
                />
              </div>
            )
          })}
        {status === "PENDING" && <></>}
      </div>
    </div>
  )
}

export default Categories
