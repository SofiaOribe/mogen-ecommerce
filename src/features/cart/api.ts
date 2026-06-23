import { supabase } from "@/lib/supabaseClient"
import { TCartItem } from "./types"

export const getCart = async (userId: string) => {
  const { data, error } = await supabase.from("cart_items").select("*").eq("user_id", userId)

  return { data, error }
}

export const addToCart = async (userId: string, item: TCartItem) => {
  const { data, error } = await supabase.from("cart_items").upsert({
    user_id: userId,
    product_id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    stock: item.stock,
    quantity: item.quantity,
  })

  return { data, error }
}

export const updateCartItem = async (userId: string, productId: string, quantity: number) => {
  const { data, error } = await supabase
    .from("cart_items")
    .update({ quantity })
    .eq("user_id", userId)
    .eq("product_id", productId)

  return { data, error }
}

export const removeCartItem = async (userId: string, productId: string) => {
  const { data, error } = await supabase.from("cart_items").delete().eq("user_id", userId).eq("product_id", productId)

  return { data, error }
}
