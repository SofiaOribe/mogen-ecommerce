import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { TStatus } from "../common/types"
import { shop_initial_state } from "./types"
import { getProducts } from "./api"

const initialState = shop_initial_state
export const shopSlice = createAppSlice({
  name: "shop",
  initialState,
  reducers: create => ({
    setShopError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload
    }),
    setShopStatus: create.reducer((state, action: PayloadAction<TStatus>) => {
      state.status = action.payload
    }),
    getProductsAsync: create.asyncThunk(
      async () => {
        const response = await getProducts()
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },

        fulfilled: (state, action) => {
          const list = action.payload

          state.status = "FULFILLED"
          console.log("products", list)

          if (list.data) {
            state.products = list.data
          }

          if (list.error) {
            state.error = list.error?.message || "An error occurred"
          }
        },

        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
  }),
})

export const { setShopError, setShopStatus, getProductsAsync } = shopSlice.actions

export const selectShop = (state: RootState) => state.shop
export default shopSlice.reducer
