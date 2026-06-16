import EmblaCarousel from "@/components/carousel/embla/EmblaCarousel"
import { selectShop } from "../slice"
import { useAppSelector } from "@/app/hooks"

const Recommended = () => {
  const { products, article } = useAppSelector(selectShop)
  const recommendedProducts = products.filter(product => {
    const matchesCategory = product.subcategories?.some(sub => article.subcategories?.includes(sub))

    return product.recommended && matchesCategory
  })

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-[12em]">
      <h2 className="font-x2-700-black p-4 w-full text-left">Recommended</h2>
      <div className=" w-full">
        <EmblaCarousel slides={recommendedProducts} />
      </div>
    </div>
  )
}

export default Recommended
