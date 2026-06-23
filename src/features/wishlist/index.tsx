/* import data from "../shop/data.json" */
/* import ShopCard from "@/components/cards/ShopCard" */
const Wishlist = () => {
  /*   const temporary = data as {
    id: string
    name: string
    image: string
    price: string
    description: string
    category: string
    subcategory: string
    stock: number
    updated: string
  }[] */
  /*   const total = temporary.length
  const singleLastRowMobile = total % 2 === 1
  const singleLastRowDesktop = total % 3 === 1 */
  return (
    <div className="w-full  px-4 flex justify-center pb-[16em] pt-40">
      <div className="lg:p-4 w-full 2xl:max-w-[56em] flex flex-col gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 border border-color-black divide-y  divide-black">
          {/* {temporary.map((item, index) => {
            const isLastItem = index === total - 1

            const isEndRowMobile = (index + 1) % 2 === 0
            const showBorderMobile =
              !isEndRowMobile && !(isLastItem && !singleLastRowMobile) ? true : isLastItem && singleLastRowMobile

            const isEndRowDesktop = (index + 1) % 3 === 0
            const showBorderDesktop =
              !isEndRowDesktop && !(isLastItem && !singleLastRowDesktop) ? true : isLastItem && singleLastRowDesktop
            return (
              <div
                key={item.id}
                className={`
                ${showBorderMobile ? "border-r border-black" : ""}
                ${showBorderDesktop ? "sm:border-r sm:border-black" : "sm:border-r-0"}
              `}
              >
                <ShopCard
                  title={item.name}
                  image={item.image}
                  price={item.price}
                  link={`/shop/product/${item.id}`}
                  onAddToCart={() => {}}
                  onSave={() => {}}
                  wishlist
                />
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
