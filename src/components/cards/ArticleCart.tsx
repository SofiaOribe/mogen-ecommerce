import ButtonCounter from "../buttons/ButtonCounter"
import { TCartItem } from "@/features/cart/types"

const ArticleCart = ({
  article,
  onIncrease,
  onDecrease,
}: {
  article: TCartItem
  onIncrease: (id: string) => void
  onDecrease: (id: string) => void
}) => {
  return (
    <div className="p-2 rounded-sm bg-light-gray h-[5em] flex  flex-row gap-3 items-center mb-4">
      <div className="h-16 w-[5em] rounded-sm overflow-hidden">
        <img src={article.image} alt="" className="w-full h-full object-cover object-bottom" />
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <p className="font-x0875-600-black line-clamp-2">{article.name}</p>
        <div className="flex flex-row justify-between items-end">
          <ButtonCounter
            value={article?.quantity ?? 0}
            onIncrease={() => onIncrease(article.id)}
            onDecrease={() => onDecrease(article.id)}
            cartArticle={true}
          />
          <p className="font-x0875-600-black">${article.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleCart
