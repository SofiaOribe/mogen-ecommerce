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
        email,
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

export const sendPasswordResetEmail = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:400/reset-password",
  })

  return { data, error }
}
