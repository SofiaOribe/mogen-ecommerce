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

export const clearCart = async (userId: string) => {
  const { data, error } = await supabase.from("cart_items").delete().eq("user_id", userId)

  return { data, error }
}

export const createOrder = async (
  userId: string,
  items: TCartItem[],
  total: number,
  address: string,
  zipCode: string,
  city: string,
  country: string,
) => {
  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      total,
      address,
      zip_code: zipCode,
      city,
      country,
      status: "paid",
    })
    .select()
    .single()

  if (error) {
    return {
      data: null,
      error,
    }
  }

  const orderItems = items.map(item => ({
    order_id: order.id,
    product_id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    quantity: item.quantity,
  }))
  const { data, error: itemError } = await supabase.from("order_items").insert(orderItems).select()

  if (itemError) {
    return {
      data: null,
      error: itemError,
    }
  }

  return {
    data: {
      order,
      items: data,
    },
    error: null,
  }
}

export const createCheckout = async (items: TCartItem[]) => {
  const { data, error } = await supabase.functions.invoke("create-checkout", {
    body: {
      items,
    },
  })

  return { data, error }
}
