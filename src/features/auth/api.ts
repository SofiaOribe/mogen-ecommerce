import { supabase } from "@/lib/supabaseClient"

const redirectUrl = import.meta.env.PROD ? import.meta.env.VITE_APP_URL : import.meta.env.VITE_LOCAL_URL
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

  if (error) {
    throw error
  }

  return data
}

export const userLogout = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const sendPasswordResetEmail = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${redirectUrl}/auth/reset-password`,
  })

  return { data, error }
}

export const updatePassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password,
  })

  return { data, error }
}
