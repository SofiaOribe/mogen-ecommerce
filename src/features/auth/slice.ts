import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { auth_initial_state, TLogin, TRegister } from "./types"
import { TStatus } from "../common/types"
import { IRegister, sendPasswordResetEmail, updatePassword, userLogin, userLogout, userRegister } from "./api"

const initialState = auth_initial_state
export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    setResetUser: create.reducer(state => {
      state.user = auth_initial_state.user
    }),
    setAuthError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload
    }),
    setResetErrorAuth: create.reducer(state => {
      state.error = ""
    }),
    setAuthStatus: create.reducer((state, action: PayloadAction<TStatus>) => {
      state.status = action.payload
    }),
    setLogin: create.reducer((state, action: PayloadAction<TLogin>) => {
      state.login = action.payload
    }),
    setRegister: create.reducer((state, action: PayloadAction<TRegister>) => {
      state.register = action.payload
    }),
    userRegisterAsync: create.asyncThunk(
      async (registerData: IRegister) => {
        const response = await userRegister(registerData)

        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },

        fulfilled: (state, action) => {
          state.status = "FULFILLED"

          if (action.payload.data.user) {
            state.user = action.payload.data.user
          }

          if (action.payload.error) {
            state.error = action.payload.error.message
          }
        },

        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
    userLoginAsync: create.asyncThunk(
      async ({ email, password }: { email: string; password: string }) => {
        const response = await userLogin(email, password)
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },

        fulfilled: (state, action) => {
          state.status = "FULFILLED"

          if (action.payload.data?.user) {
            state.user = action.payload.data?.user
          }

          if (action.payload.error) {
            state.error = action.payload.error.message
          }
        },

        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
    logoutAsync: create.asyncThunk(
      async () => {
        const response = await userLogout()
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },
        fulfilled: state => {
          state.user = auth_initial_state.user

          state.status = "FULFILLED"
        },
        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
    sendPasswordResetEmailAsync: create.asyncThunk(
      async (email: string) => {
        const response = await sendPasswordResetEmail(email)
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },
        fulfilled: state => {
          state.status = "FULFILLED"
        },
        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
    updatePasswordAsync: create.asyncThunk(
      async (password: string) => {
        const response = await updatePassword(password)
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },
        fulfilled: (state, action) => {
          state.status = "FULFILLED"
          console.log(action)
        },
        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
  }),
})

export const {
  setResetUser,
  setAuthError,
  setAuthStatus,
  setLogin,
  setRegister,
  setResetErrorAuth,
  userRegisterAsync,
  userLoginAsync,
  logoutAsync,
  sendPasswordResetEmailAsync,
  updatePasswordAsync,
} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
