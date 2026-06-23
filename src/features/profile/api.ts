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
