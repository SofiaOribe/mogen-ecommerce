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
