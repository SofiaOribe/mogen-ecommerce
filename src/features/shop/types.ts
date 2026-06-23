import { TStatus } from "../common/types"

export type TProduct = {
  id: string
  name: string
  images: string[]
  price: number
  description: string
  category: string
  subcategories: string[]
  stock: number
  created_at: string
  updated_at: string
  recommended: boolean
}

export type TShop = {
  error: string | null
  status: TStatus
  products: TProduct[]
  article: TProduct
  sortBy: string
}

export const shop_initial_state: TShop = {
  error: null,
  status: "FULFILLED",
  products: [],
  sortBy: "",
  article: {
    id: "",
    name: "",
    images: [],
    price: 0,
    description: "",
    category: "",
    subcategories: [],
    stock: 0,
    created_at: "",
    updated_at: "",
    recommended: false,
  },
}
