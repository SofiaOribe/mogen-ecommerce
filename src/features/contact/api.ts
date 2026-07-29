import { supabase } from "@/lib/supabaseClient"

type ContactMessage = {
  name: string
  email: string
  subject: string
  message: string
}

export const createContactMessage = async (message: ContactMessage) => {
  const { data, error } = await supabase.from("contact_messages").insert(message)

  return { data, error }
}
