import { useAppSelector } from "@/app/hooks"
import ButtonCounter from "@/components/buttons/ButtonCounter"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { CircleQuestionMark } from "lucide-react"
import { useState } from "react"
import { selectShop } from "../slice"

const ProductDetails = () => {
  const { article } = useAppSelector(selectShop)
  const [valueQuantity, setValueQuantity] = useState(0)
  const [messageQuantity, setMessageQuantity] = useState("")

  const handleIncrease = () => {
    if (valueQuantity < article.stock) {
      setValueQuantity(prev => prev + 1)
    } else {
      setMessageQuantity("No more stock available")
    }
  }

  const handleDecrease = () => {
    if (valueQuantity !== 0) {
      setValueQuantity(prev => prev + 1)
    }
  }

  return (
    <div className="pt-15 p-4 md:p-8 2xl:pl-16 flex 2xl:justify-center items-center w-full">
      <div className=" w-full flex flex-col justify-center gap-8 2xl:max-w-[800px] box-border">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="font-x2-700-black">{article.name}</h1>
          <div className="flex flex-row justify-between items-center">
            <p itemProp="price" content="12" className="font-x15-400-black">
              ${article.price}
            </p>
            <p className="font-x1-400-black">3 interest-free installments ${(article.price / 3).toFixed(2)} each</p>
          </div>
          <h2 className="font-x0875-400-black text-justify leading-[1.3em]">{article.description}</h2>
          <div className="items-center flex gap-3">
            <span className="font-x1-500-black">Payment Methods</span>
            <ButtonPrimary
              icon={CircleQuestionMark}
              classes={{
                borderClass: "border-none shadow-none",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12 justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-x075-600-black">Quantity</span>
            <ButtonCounter
              value={valueQuantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              disabledDecrease={valueQuantity === 0}
              disabledIncrease={!!messageQuantity}
            />
          </div>
          <ButtonPrimary
            variant="coral"
            text="Add to card"
            classes={{
              sizeClass: "max-w-[33em] w-full h-12",
              textClass: "font-x1-500-black",
              borderClass: "border-none shadow-sm",
            }}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
