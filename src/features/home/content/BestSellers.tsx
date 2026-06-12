import EmblaCarousel from "@/components/carousel/embla/EmblaCarousel"

const temporaryBestSellers = [
  {
    _id: "1",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
  },
  {
    _id: "2",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
  },
  {
    _id: "3",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
  },
  {
    _id: "4",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
  },
  {
    _id: "5",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
  },
  {
    _id: "6",
    name: "Serum Double Trouble",
    image:
      "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
    price: "14.149",
  },
]

const BestSellers = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-[12em]">
      <h2 className="font-x2-700-black p-4 w-full text-center">Best Sellers</h2>
      <div className="box-border w-full">
        <EmblaCarousel slides={temporaryBestSellers} />
      </div>
    </div>
  )
}

export default BestSellers
