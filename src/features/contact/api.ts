import { supabase } from "@/lib/supabaseClient"

export const createContactMessage = async (payload: {
  name: string
  email: string
  subject?: string
  message: string
}) => {
  const { data, error } = await supabase.from("contact_messages").insert(payload)

  return { data, error }
}
