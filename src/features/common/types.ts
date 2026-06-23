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

export const validEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validPasswordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,}$/

export const validNameRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]+$/
