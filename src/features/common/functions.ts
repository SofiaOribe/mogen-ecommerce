import { Product } from "./types"

export const increaseQuantity = (products: Product[], id: string): Product[] => {
  return products.map(product => (product._id === id ? { ...product, quantity: (product.quantity ?? 0) + 1 } : product))
}

export const decreaseQuantity = (products: Product[], id: string): Product[] => {
  return products
    .map(product => (product._id === id ? { ...product, quantity: (product.quantity ?? 0) - 1 } : product))
    .filter(product => (product.quantity ?? 0) > 0)
}

