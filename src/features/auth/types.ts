import { User } from "@supabase/supabase-js"
import { TInputData, TStatus } from "../common/types"

/*    
TInputData =
    value: string;
    valid: boolean;
    firstLoad: boolean; */

export type TRegister = {
  email: TInputData
  status: TStatus
  first_name: TInputData
  last_name: TInputData
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
  user: User | null
}

export const auth_initial_state: TAuth = {
  error: "",
  status: "FULFILLED",
  user: null,
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
    password: {
      value: "",
      valid: false,
      firstLoad: true,
    },
    status: "FULFILLED",
  },
}
