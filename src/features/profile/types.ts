import { TStatus } from "../common/types"

const EmptyAccount = {
  id: "",
  first_name: "",
  last_name: "",
  image: "",
  email: "",
  country: "",
  province: "",
  city: "",
  address: "",
  postal_code: "",
  phone_number: "",
  created_at: "",
}

/* export type TAccount = {
  image: string
  email: TInputData
  first_name: TInputData
  last_name: TInputData
  country: string
  province: string
  city: string
  address: string
  postalCode: string
  phoneNumber: string
} */
export type TOrders = {
  id: string
  date: string
  total: string
  address: string
  zip_code: string
  city: string
  status: string
  country: string
  order_number: string
  order_items: {
    id: string
    name: string
    image: string
    price: string
    quantity: number
  }[]
}

export type TAccount = {
  id: string
  first_name: string
  last_name: string
  image: string
  email: string
  country: string
  province: string
  city: string
  address: string
  postal_code: string
  phone_number: string
  created_at: string
}

export type TProfile = {
  error: string
  status: TStatus
  orders: TOrders[]
  account: TAccount
  updateStatus: "SUCCESS" | "DECLINED" | ""
}

export const profile_initial_state: TProfile = {
  error: "",
  status: "FULFILLED",
  account: EmptyAccount,
  orders: [],
  updateStatus: "",
}
