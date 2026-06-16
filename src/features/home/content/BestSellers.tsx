import { useAppSelector } from "@/app/hooks"
import EmblaCarousel from "@/components/carousel/embla/EmblaCarousel"
import { selectShop } from "@/features/shop/slice"

const BestSellers = () => {
  const { products } = useAppSelector(selectShop)
  const recommendedProducts = products.filter(p => p.recommended)

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-[12em]">
      <h2 className="font-x2-700-black p-4 w-full text-center">Best Sellers</h2>
      <div className="box-border w-full">
        <EmblaCarousel slides={recommendedProducts} />
      </div>
    </div>
  )
}

export default BestSellers
