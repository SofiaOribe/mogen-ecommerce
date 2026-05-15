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

export const validEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
