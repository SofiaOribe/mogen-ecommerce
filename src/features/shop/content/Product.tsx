import ProductDetails from "../components/ProductDetails"
import ProductImage from "../components/ProductImage"
import Recommended from "../components/Recommended"

const Product = () => {
  return (
    <div className="flex flex-col h-full w-full pt-[6em]">
      <div className="flex flex-col-reverse 2xl:flex-row w-full gap-10 lg:gap-4">
        <ProductDetails />
        <ProductImage />
      </div>
      <Recommended />
    </div>
  )
}

export default Product
