import { supabase } from "@/lib/supabaseClient"

export interface IRegister {
  email: string
  password: string
  first_name: string
  last_name: string
}

export const userRegister = async ({ email, password, first_name, last_name }: IRegister) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: first_name,
        last_name: last_name,
      },
    },
  })
  return { data, error }
}

export const userLogin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const userLogout = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single()

  return { data, error }
}