import ButtonCounter from "@/components/buttons/ButtonCounter"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { CircleQuestionMark } from "lucide-react"

const ProductDetails = () => {
  return (
    <div className="p-4 md:px-[6.875em] md:py-[3.75em] w-full flex flex-col justify-center gap-8 ">
      <div className="flex flex-col gap-5 w-full">
        <h1 className="font-x2-700-black">Vital Power Serum Matcha</h1>
        <div className="flex flex-row justify-between items-center">
          <p itemProp="price" content="12" className="font-x15-400-black">
            $12.00
          </p>
          <p className="font-x1-400-black">3 interest-free installments $3.99</p>
        </div>
        <h2 className="font-x0875-400-black text-justify leading-[1.3em]">
          This Veganis Hyaluronic Acid Facial Serum has the ability to attract and retain water molecules. This
          increases the hydration of our skin cells, making them firmer. It's also involved in the regeneration and
          repair of various tissues. It also combats sagging skin and boosts skin firmness. This is because hyaluronic
          acid facilitates collagen synthesis. This compound has powerful anti-aging properties. It adds volume to the
          skin and fills in wrinkles and fine lines. This helps our skin stay younger for longer.
        </h2>
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
          <ButtonCounter />
        </div>
        <ButtonPrimary
          variant="coral"
          text="Add to card"
          classes={{
            sizeClass: "max-w-[33em] w-full h-12",
            textClass: "font-x1-500-black",
            borderClass: "border-none shadow-sm",
          }}
        />
      </div>
    </div>
  )
}

export default ProductDetails
