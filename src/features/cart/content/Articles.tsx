import ArticleCart from "@/components/cards/ArticleCart"
import { decreaseQuantity, increaseQuantity } from "@/features/common/functions"
import { Product } from "@/features/common/types"
import { useEffect, useState } from "react"

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
    category: "facial-line",
    subcategory: "serum",
    description:
      "This Veganis Hyaluronic Acid Facial Serum has the ability to attract and retain water molecules. This increases the hydration of our skin cells, making them firmer. It's also involved in the regeneration and repair of various tissues. It also combats sagging skin and boosts skin firmness. This is because hyaluronic acid facilitates collagen synthesis. This compound has powerful anti-aging properties. It adds volume to the skin and fills in wrinkles and fine lines. This helps our skin stay younger for longer.",
    updated: "2023-10-01T12:00:00Z",
    stock: 25,
    quantity: 2,
  },
  {
    id: "2",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
    category: "facial-line",
    subcategory: "serum",
    description:
      "This Veganis Hyaluronic Acid Facial Serum has the ability to attract and retain water molecules. This increases the hydration of our skin cells, making them firmer. It's also involved in the regeneration and repair of various tissues. It also combats sagging skin and boosts skin firmness. This is because hyaluronic acid facilitates collagen synthesis. This compound has powerful anti-aging properties. It adds volume to the skin and fills in wrinkles and fine lines. This helps our skin stay younger for longer.",
    updated: "2023-10-01T12:00:00Z",
    stock: 25,
    quantity: 2,
  },
  {
    id: "3",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
    category: "facial-line",
    subcategory: "serum",
    description:
      "This Veganis Hyaluronic Acid Facial Serum has the ability to attract and retain water molecules. This increases the hydration of our skin cells, making them firmer. It's also involved in the regeneration and repair of various tissues. It also combats sagging skin and boosts skin firmness. This is because hyaluronic acid facilitates collagen synthesis. This compound has powerful anti-aging properties. It adds volume to the skin and fills in wrinkles and fine lines. This helps our skin stay younger for longer.",
    updated: "2023-10-01T12:00:00Z",
    stock: 25,
    quantity: 2,
  },
]
const Articles = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const handleIncrease = (id: string) => {
    setProducts(prev => increaseQuantity(prev, id))
  }

  const handleDecrease = (id: string) => {
    setProducts(prev => decreaseQuantity(prev, id))
  }

  useEffect(() => {
    setProducts(initialProducts)
  }, [])

  return (
    <div className="pt-4  overflow-hidden h-full">
      <div className="flex flex-col h-full overflow-auto">
        {products.map(product => {
          return (
            <ArticleCart key={product.id} article={product} onIncrease={handleIncrease} onDecrease={handleDecrease} />
          )
        })}
      </div>
    </div>
  )
}

export default Articles
