import { supabase } from "@/lib/supabaseClient"

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*")
  return { data, error }
}

export const getProductById = async (id: string) => {
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single()

  return { data, error }
}
