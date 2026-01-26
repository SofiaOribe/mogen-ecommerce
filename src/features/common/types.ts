export type TStatus = "PENDING" | "FULFILLED" | "REJECTED" | ""

export type TSingleValue = {
  id: string
  name: string
}

export type TInputData = {
  value: string
  valid: boolean
  firstLoad: boolean
}

export type Product = {
  _id: string
  name: string
  image: string
  price: string
  category: string
  subcategory: string
  description: string
  updated: string
  stock: number
  quantity?: number
}
