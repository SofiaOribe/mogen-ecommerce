import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

const products = [
  {
    _id: "moisturizers",
    name: "Moisturizers",
  },
]
const Filters = () => {
  const [filteredProducts, setFilteredProducts] = useState<string[]>([])
  console.log("filteredProducts", filteredProducts)
  return (
    <div className="border border-color-black py-6 px-4 w-[17em] h-fit bg-white top-[14.7em] lg:sticky self-start">
      <div className="flex flex-col gap-3">
        <p className="font-x0875-500">Products</p>
        {products.map(product => (
          <div key={product._id} className="flex flex-row items-center gap-2">
            <Checkbox
              checked={filteredProducts.includes(product._id)}
              onChange={() => {
                console.log("Checkbox clicked", product._id)
                if (filteredProducts.includes(product._id)) {
                  setFilteredProducts(filteredProducts.filter(id => id !== product._id))
                } else {
                  setFilteredProducts([...filteredProducts, product._id])
                }
              }}
            />
            <p className="font-x075-500">{product.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3"></div>
      <div className="flex flex-col gap-3"></div>
    </div>
  )
}

export default Filters
