import { supabase } from "@/lib/supabaseClient"
import { TAccount } from "./types"

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  return { data, error }
}

export const updateUserProfile = async (userId: string, form: Partial<TAccount>) => {
  const { data, error } = await supabase.from("profiles").update(form).eq("id", userId).select().single()

  return { data, error }
}

export const getOrders = async (userId: string) => {
  const { data, error } = await supabase
    .from("orders")
    .select(
      `
      id,
      date,
      total,
      address,
      zip_code,
      city,
      country,
      status,
      order_number,
      order_items (
        id,
        name,
        image,
        price,
        quantity
      )
    `,
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  return { data, error }
}
