import { Product } from "./types"

export const increaseQuantity = (products: Product[], id: string): Product[] => {
  return products.map(product => (product.id === id ? { ...product, quantity: (product.quantity ?? 0) + 1 } : product))
}

export const decreaseQuantity = (products: Product[], id: string): Product[] => {
  return products
    .map(product => (product.id === id ? { ...product, quantity: (product.quantity ?? 0) - 1 } : product))
    .filter(product => (product.quantity ?? 0) > 0)
}

export const formatString = (value: string) => {
  return value.replace(/-/g, " ")
}

export const capitalizeFirstLetter = (input: string | string[]) => {
  if (typeof input === "string") {
    const strings = [input]
    return strings.map(temp => {
      const cleanedString = temp
      return cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1).toLowerCase()
    })
  } else if (Array.isArray(input)) {
    return input.map(temp => {
      const cleanedString = temp
      return cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1).toLowerCase()
    })
  } else {
    return []
  }
}
