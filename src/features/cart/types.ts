import { TStatus } from "../common/types"
import { loadCart } from "./cartStorage"

export type TCartItem = {
  id: string
  name: string
  image: string
  price: number
  stock: number
  quantity: number
}

export type TCart = {
  showCart: boolean
  error: string
  status: TStatus
  items: TCartItem[]
}

export const cart_initial_state: TCart = {
  error: "",
  status: "FULFILLED",
  showCart: false,
  items: loadCart(),
}
