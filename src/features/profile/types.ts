import { TInputData, TStatus } from "../common/types"

export type TAccount = {
  image: string
  email: TInputData
  status: TStatus
  firstName: TInputData
  lastName: TInputData
  country: string
  province: string
  city: string
  address: string
  postalCode: string
  phoneNumber: string
}
export type TOrders = {
  _id: string
  date: string
  total: string
  address: string
  zipCode: string
  city: string
  status: string
  country: string
  product: {
    _id: string
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
    firstName: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    lastName: {
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
