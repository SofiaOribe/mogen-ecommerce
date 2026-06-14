import { supabase } from "@/lib/supabaseClient"

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*")

  console.log("DATA:", data)
  console.log("ERROR:", error)
  console.log(import.meta.env.VITE_SUPABASE_URL)
  return { data, error }
}
