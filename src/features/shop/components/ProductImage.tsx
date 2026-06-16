import { useAppSelector } from "@/app/hooks"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { selectShop } from "../slice"
import { useParams } from "react-router-dom"

const ProductImage = () => {
  const { productId } = useParams()
  const { article } = useAppSelector(selectShop)
  const [imageSelected, setImageSelected] = useState<string>("")

  useEffect(() => {
    if (article.images?.length) {
      setImageSelected(article.images[0])
    }
  }, [productId, article])

  return (
    <div className="w-full flex flex-col 2xl:flex-row h-full lg:min-h-[calc(100dvh_-_8em)] box-border px-4 min-[1600px]:px-16">
      <img
        src={imageSelected}
        alt="Product selected"
        className="w-full h-ful max-h-dvh 2xl:max-w-[calc(100%_-_15em)] h-[calc(100dvh_-_8em)] object-contain object-center "
      />

      <div className="w-full 2xl:max-w-[15em] overflow-hidden">
        <div className="flex flex-row 2xl:flex-col overflow-auto h-full scrollbar-none ">
          {article.images.map((image, index) => (
            <Button
              key={index + 1}
              onClick={() => setImageSelected(image)}
              className="!h-full max-h-[10em] w-[10em] 2xl:max-h-[23.75em] 2xl:w-[15em] cursor-pointer shadow-none image-hover-zoom border-0 "
            >
              <img src={image} alt={`kez ${index + 1}`} className="h-full w-full object-contain object-center " />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductImage
