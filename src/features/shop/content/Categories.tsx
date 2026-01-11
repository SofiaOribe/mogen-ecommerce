import ShopCard from "@/components/cards/ShopCard"
import data from "../data.json"

const Categories = () => {
  const temporary = data as {
    _id: string
    name: string
    image: string
    price: string
    description: string
    category: string
    subcategory: string
    stock: number
    updated: string
  }[]
  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 ">
        {temporary.map((item, index) => {
          const isLastColMobile = (index + 1) % 2 === 0
          const isLastRowMobile = index >= temporary.length - (temporary.length % 2 || 2)

          const isLastColSm = (index + 1) % 3 === 0
          const isLastRowSm = index >= temporary.length - (temporary.length % 3 || 3)

          return (
            <div
              key={item._id}
           
            >
              <ShopCard title={item.name} image={item.image} price={item.price} link={`/shop/product/${item._id}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
