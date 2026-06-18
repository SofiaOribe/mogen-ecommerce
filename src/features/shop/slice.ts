import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { TStatus } from "../common/types"
import { shop_initial_state } from "./types"
import { getProductById, getProducts } from "./api"

const initialState = shop_initial_state
export const shopSlice = createAppSlice({
  name: "shop",
  initialState,
  reducers: create => ({
    resetShop: create.reducer(() => {
      return shop_initial_state
    }),
    resetArticle: create.reducer(state => {
      state.article = shop_initial_state.article
    }),
    setShopError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload
    }),
    setShopStatus: create.reducer((state, action: PayloadAction<TStatus>) => {
      state.status = action.payload
    }),
    setSortBy: create.reducer((state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
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
    getProductByIdAsync: create.asyncThunk(
      async (id: string) => {
        const response = await getProductById(id)
        return response
      },
      {
        pending: state => {
          state.status = "PENDING"
        },

        fulfilled: (state, action) => {
          const article = action.payload

          state.status = "FULFILLED"
          if (article.data) {
            state.article = article.data
          }

          if (article.error) {
            state.error = article.error?.message || "An error occurred"
          }
        },

        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
  }),
})

export const {
  resetShop,
  resetArticle,
  setShopError,
  setShopStatus,
  setSortBy,
  getProductsAsync,
  getProductByIdAsync,
} = shopSlice.actions

export const selectShop = (state: RootState) => state.shop
export default shopSlice.reducer
