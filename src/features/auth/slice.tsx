import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { auth_initial_state, TLogin, TRegister } from "./types"
import { TStatus } from "../common/types"

const initialState = auth_initial_state
export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    setAuthError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload
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
  }),
})

export const { setAuthError, setAuthStatus, setLogin, setRegister } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
