import { TInputData, TStatus } from "../common/types"

/*    
TInputData =
    value: string;
    valid: boolean;
    firstLoad: boolean; */

export type TRegister = {
  email: TInputData
  status: TStatus
  firstName: TInputData
  lastName: TInputData
  password: TInputData
}

export type TLogin = {
  email: TInputData
  password: TInputData
  status: TStatus
}

export type TAuth = {
  error: string
  status: TStatus
  login: TLogin
  register: TRegister
}

export const auth_initial_state: TAuth = {
  error: "",
  status: "FULFILLED",
  login: {
    email: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    password: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    status: "FULFILLED",
  },
  register: {
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
    password: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    status: "FULFILLED",
  },
}
