import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { cart_initial_state } from "./types"

const initialState = cart_initial_state
export const cartSlice = createAppSlice({
  name: "cart",
  initialState,
  reducers: create => ({
    setCartError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload
    }),
    setShowCart: create.reducer((state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload
    }),
  }),
})

export const { setCartError, setShowCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer
