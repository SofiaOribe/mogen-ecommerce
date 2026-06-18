import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { auth_initial_state, TLogin, TRegister } from "./types"
import { TStatus } from "../common/types"
import { getUserProfile, IRegister, userLogin, userRegister } from "./api"

const initialState = auth_initial_state
export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
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
      console.log(state.login, "login")
    }),
    setRegister: create.reducer((state, action: PayloadAction<TRegister>) => {
      state.register = action.payload
      console.log(state.register, "register")
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
            console.log(action.payload.data.user)
          }

          if (action.payload.error) {
            state.error = action.payload.error.message
            console.log(action.payload.error)
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

          const user = action.payload.data?.user

          if (user) {
            state.user = user
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
    getUserProfileAsync: create.asyncThunk(
      async ({ userId }: { userId: string }) => {
        const response = await getUserProfile(userId)
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },

        fulfilled: (state, action) => {
          state.status = "FULFILLED"

          const user = action.payload
          console.log("user")
          /* if (user) {
            state.user = user
          }

          if (action.payload.error) {
            state.error = action.payload.error.message
          } */
        },

        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
  }),
})

export const {
  setAuthError,
  setAuthStatus,
  setLogin,
  setRegister,
  setResetErrorAuth,
  userRegisterAsync,
  userLoginAsync,
  getUserProfileAsync,
} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
