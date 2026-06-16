import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { TStatus } from "../common/types"
import { profile_initial_state, TAccount } from "./types"

const initialState = profile_initial_state
export const profileSlice = createAppSlice({
  name: "profile",
  initialState,
  reducers: create => ({
    setProfileError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload
    }),
    setProfileStatus: create.reducer((state, action: PayloadAction<TStatus>) => {
      state.status = action.payload
    }),
    setAccount: create.reducer((state, action: PayloadAction<TAccount>) => {
      state.account = action.payload
    }),
  }),
})

export const { setProfileError, setProfileStatus } = profileSlice.actions

export const selectProfile = (state: RootState) => state.profile
export default profileSlice.reducer
