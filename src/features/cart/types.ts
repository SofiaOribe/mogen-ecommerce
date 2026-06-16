import { TStatus } from "../common/types"

export type TCart = {
  showCart: boolean
  error: string
  status: TStatus
}
export const cart_initial_state: TCart = {
  error: "",
  status: "FULFILLED",
  showCart: false,
}
