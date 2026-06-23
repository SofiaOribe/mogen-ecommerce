import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { TStatus } from "../common/types"
import { profile_initial_state, TAccount } from "./types"
import { getUserProfile, updateUserProfile } from "./api"

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
          if (action.payload.data) {
            state.account = action.payload.data
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
    updateUserProfileAsync: create.asyncThunk(
      async ({ userId, form }: { userId: string; form: Partial<TAccount> }) => {
        const response = await updateUserProfile(userId, form)
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },

        fulfilled: (state, action) => {
          state.status = "FULFILLED"

          if (action.payload.error) {
            state.error = action.payload.error.message
          }
        },

        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
  }),
})

export const { setProfileError, setProfileStatus, setAccount, getUserProfileAsync, updateUserProfileAsync } =
  profileSlice.actions

export const selectProfile = (state: RootState) => state.profile
export default profileSlice.reducer
