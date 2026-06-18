import { TInputData, TStatus } from "../common/types"

export type TAccount = {
  image: string
  email: TInputData
  status: TStatus
  first_name: TInputData
  last_name: TInputData
  country: string
  province: string
  city: string
  address: string
  postalCode: string
  phoneNumber: string
}
export type TOrders = {
  id: string
  date: string
  total: string
  address: string
  zipCode: string
  city: string
  status: string
  country: string
  product: {
    id: string
    name: string
    image: string
    price: string
    quantity: number
  }[]
}

export type TProfile = {
  error: string
  status: TStatus
  account: TAccount
  orders: TOrders[]
}

export const profile_initial_state: TProfile = {
  error: "",
  status: "FULFILLED",

  account: {
    image: "",
    email: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    first_name: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    last_name: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    country: "",
    city: "",
    province: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
    status: "FULFILLED",
  },
  orders: [],
}
