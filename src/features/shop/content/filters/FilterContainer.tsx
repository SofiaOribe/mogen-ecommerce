import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { selectShop, setSortBy } from "../../slice"
import { Link, useParams } from "react-router-dom"
import { formatString } from "@/features/common/functions"

const filterByOr = [
  {
    id: "default",
    name: "Default",
  },
  {
    id: "lowest_price",
    name: "Lowest price",
  },
  {
    id: "higher_price",
    name: "Higher price",
  },
]

const FilterContainer = () => {
  const dispatch = useAppDispatch()
  const { categoryId, subcategoryId } = useParams()
  const { products, sortBy } = useAppSelector(selectShop)

  const subcategories = Array.from(
    new Set(products.filter(p => p.category === categoryId).flatMap(p => p.subcategories || [])),
  ).filter(sub => sub !== "best-seller")

  return (
    <div className="flex flex-col gap-5">
      {categoryId !== "best-seller" && categoryId !== "all" && (
        <div className="flex flex-col gap-3">
          <Label className="font-x095-500">Products</Label>
          <div className="flex flex-col items-start gap-2 border-l ml-1">
            <Link
              to={`/shop/categories/${categoryId}`}
              className={`font-x0875-300 ${!subcategoryId && "font-x0875-500"} pl-3`}
            >
              All
            </Link>
            {subcategories.map(sub => (
              <div key={sub} className="flex flex-row items-center gap-2 pl-3">
                <Link
                  key={sub}
                  to={`/shop/categories/${categoryId}/${sub}`}
                  className={`font-x0875-300 ${subcategoryId === sub ? "font-x0875-600 " : ""} capitalize  `}
                >
                  {formatString(sub)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/*   <div className="flex flex-col gap-3">
        <Label htmlFor="slider-demo-temperature" className="font-x095-500">
          Price
        </Label>
        <div className="flex items-center justify-between gap-2">
          <span className="font-x0875-500-black">${priceRange[0]}</span>
          <span className="font-x0875-500-black">${priceRange[1]}</span>
        </div>
        <Slider
          defaultValue={[0, 500]}
          value={priceRange}
          onValueChange={value => {
            const tuple: [number, number] = [value[0] ?? 0, value[1] ?? 0]
            dispatch(setPriceRange(tuple))
          }}
          min={0}
          max={50}
          step={2}
        />
      </div> */}
      <div className="flex flex-col gap-3">
        <Label className="font-x095-500">Sorted by</Label>
        <Select value={sortBy} onValueChange={value => dispatch(setSortBy(value))}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by">
              <span className="capitalize-first">{sortBy.replace(/_/g, " ")}</span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filterByOr.map(filter => {
                return (
                  <SelectItem key={filter.id} value={filter.id}>
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
