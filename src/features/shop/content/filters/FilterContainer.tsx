import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const products = [
  {
    _id: "moisturizers",
    name: "Moisturizers",
  },
]

const filterByOr = [
  {
    _id: "lowest_price",
    name: "Lowest price",
  },
  {
    _id: "higher_price",
    name: "Higher price",
  },
  {
    _id: "new_releases",
    name: "New releases",
  },
  {
    _id: "sale",
    name: "Sale",
  },
]

const FilterContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState<string[]>([])
  const [valuePrice, setPriceValue] = useState([0, 500])
  const [selectedFilter, setSelectedFilter] = useState("new_releases")

  const handleProductCheckboxChange = (productId: string, checked: boolean | "indeterminate" | undefined) => {
    setFilteredProducts(prev => (checked === true ? [...prev, productId] : prev.filter(id => id !== productId)))
  }

  console.log("filteredProducts", filteredProducts)
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <Label className="font-x095-500">Products</Label>
        {products.map(product => (
          <div key={product._id} className="flex flex-row items-center gap-2">
            <Checkbox
              checked={filteredProducts.includes(product._id)}
              onCheckedChange={checked => handleProductCheckboxChange(product._id, checked)}
            />
            <p className="font-x0875-500">{product.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="slider-demo-temperature" className="font-x095-500">
          Price
        </Label>
        <div className="flex items-center justify-between gap-2">
          <span className="font-x0875-500-black">${valuePrice[0]}</span>
          <span className="font-x0875-500-black">${valuePrice[1]}</span>
        </div>
        <Slider defaultValue={[0, 500]} value={valuePrice} onValueChange={setPriceValue} min={0} max={500} step={2} />
      </div>
      <div className="flex flex-col gap-3">
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filterByOr.map(filter => {
                return (
                  <SelectItem key={filter._id} value={filter._id}>
                    {filter.name}
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default FilterContainer
