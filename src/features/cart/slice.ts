import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"
import { cart_initial_state, TCartItem } from "./types"
import { addToCart, removeCartItem, updateCartItem } from "./api"

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
    setClearCart: create.reducer(state => {
      state.items = []
    }),
    setIncreaseQuantity: create.reducer((state, action: PayloadAction<string>) => {
      const product = state.items.find(item => item.id === action.payload)

      if (product && product.quantity < product.stock) {
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

        const { error } = await addToCart(userId, product)

        if (error) {
          throw error
        }

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
            existing.quantity += product.quantity
          } else {
            state.items.push(product)
          }

          state.status = "FULFILLED"
        },
        rejected: state => {
          state.status = "REJECTED"
        },
      },
    ),
    updateQuantityAsync: create.asyncThunk(
      async (args: { userId: string; productId: string; quantity: number }) => {
        await updateCartItem(args.userId, args.productId, args.quantity)

        return args
      },
      {
        fulfilled: (state, action) => {
          const item = state.items.find(item => item.id === action.payload.productId)

          if (item) {
            item.quantity = action.payload.quantity
          }
        },
      },
    ),
    removeCartItemAsync: create.asyncThunk(
      async (args: { userId: string; productId: string }) => {
        await removeCartItem(args.userId, args.productId)

        return args.productId
      },
      {
        fulfilled: (state, action) => {
          state.items = state.items.filter(item => item.id !== action.payload)
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
  setClearCart,
  updateQuantityAsync,
  removeCartItemAsync,
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer
