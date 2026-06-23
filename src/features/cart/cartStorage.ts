import { TCartItem } from "./types"

const CART_KEY = "cart"

export const saveCart = (items: TCartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const loadCart = (): TCartItem[] => {
  const data = localStorage.getItem(CART_KEY)

  return data ? JSON.parse(data) : []
}
