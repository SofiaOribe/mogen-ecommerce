import { Button } from "@/components/ui/button"
import { useState } from "react"

const ProductImage = () => {
  const arrayImage = [
    "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    "https://www.naturalveganis.cl/wp-content/uploads/2024/07/veganis_catalogo_200225_43369-1-801cb76b69e8193ad517418758164003-1024-1024.webp",
    "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    "https://www.naturalveganis.cl/wp-content/uploads/2024/07/veganis_catalogo_200225_43369-1-801cb76b69e8193ad517418758164003-1024-1024.webp",
  ]
  const [imageSelected, setImageSelected] = useState<string>(arrayImage[0])

  return (
    <div className="w-full flex flex-col md:flex-row h-full md:max-h-[100dvh_-_10em]">
      <img src={imageSelected} alt="Product selected" className="w-full h-full" />

      <div className="w-full max-w-[15em] overflow-hidden">
        <div className="flex flex-col overflow-auto h-full scrollbar-none">
          {arrayImage.map((image, index) => (
            <Button
              key={index + 1}
              onClick={() => setImageSelected(image)}
              className="!h-full max-h-[23.75em] cursor-pointer shadow-none image-hover-zoom border-0"
            >
              <img src={image} alt={`kez ${index + 1}`} className="h-full w-full object-contain" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductImage
