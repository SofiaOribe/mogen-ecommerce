import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { cart_initial_state, TCartItem } from "./types"
import { addToCart } from "./api"

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
    setCartFromServer: create.reducer((state, action: PayloadAction<TCartItem[]>) => {
      state.items = action.payload
    }),
    setIncreaseQuantity: create.reducer((state, action: PayloadAction<string>) => {
      const product = state.items.find(item => item.id === action.payload)

      if (product) {
        product.quantity += 1
      }
    }),
    setDecreaseQuantity: create.reducer((state, action: PayloadAction<string>) => {
      const product = state.items.find(item => item.id === action.payload)

      if (!product) return

      if (product.quantity > 1) {
        product.quantity -= 1
      } else {
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    }),

    addToCartAsync: create.asyncThunk(
      async (args: { product: TCartItem; userId?: string }) => {
        const { product, userId } = args

        if (!userId) {
          return { product, userId: undefined }
        }
        await addToCart(userId, product)

        return { product, userId }
      },
      {
        pending: state => {
          state.status = "PENDING"
        },
        fulfilled: (state, action) => {
          const { product } = action.payload

          const existing = state.items.find(item => item.id === product.id)

          if (existing) {
            existing.quantity += 1
          } else {
            state.items.push({ ...product, quantity: 1 })
          }

          state.status = "FULFILLED"
        },
        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
  }),
})

export const {
  setCartError,
  setShowCart,
  setCartFromServer,
  setIncreaseQuantity,
  setDecreaseQuantity,
  addToCartAsync,
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer
