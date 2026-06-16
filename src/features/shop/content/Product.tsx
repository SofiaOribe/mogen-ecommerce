import { useParams } from "react-router-dom"
import ProductDetails from "../components/ProductDetails"
import ProductImage from "../components/ProductImage"
import Recommended from "../components/Recommended"
import { useEffect } from "react"
import { useAppDispatch } from "@/app/hooks"
import { getProductByIdAsync } from "../slice"

const Product = () => {
  const { productId } = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (productId) {
      dispatch(getProductByIdAsync(productId))
    }
  }, [productId])

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
