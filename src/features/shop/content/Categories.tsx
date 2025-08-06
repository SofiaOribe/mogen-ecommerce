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
      <div className="grid grid-cols-3 border border-black">
        {temporary.map((item, index) => {
          const isLastCol = (index + 1) % 3 === 0
          const isLastRow = index >= data.length - (data.length % 3 || 3)

          return (
            <div
              key={item._id}
              className={`border-black
          ${!isLastCol ? "border-r" : ""}
          ${!isLastRow ? "border-b" : ""}
        `}
            >
              <ShopCard
                title={item.name}
                image={item.image}
                price={item.price}
                onClick={() => {}}
                onSave={() => {}}
                onAddToCart={() => {}}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
