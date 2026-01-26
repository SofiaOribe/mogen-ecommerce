import ProductDetails from "../components/ProductDetails"
import ProductImage from "../components/ProductImage"
import Recommended from "../components/Recommended"

const Product = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col-reverse md:flex-row w-full heightCustomProductView h-full ">
        <ProductDetails />
        <ProductImage />
      </div>
      <Recommended />
    </div>
  )
}

export default Product
