import { createContext, useContext, useEffect, useRef, useState } from "react"
import type { Session } from "@supabase/supabase-js"

import { useAppDispatch } from "../app/hooks"
import { getUserProfileAsync } from "../features/profile/slice"
import { supabase } from "@/lib/supabaseClient"
import { getCart } from "@/features/cart/api"
import { setCartFromServer } from "@/features/cart/slice"

type AuthContextType = {
  session: Session | null
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const dispatch = useAppDispatch()
  const hasLoadedCart = useRef(false)
  const loadCart = async (userId: string) => {
    if (hasLoadedCart.current) return

    hasLoadedCart.current = true

    const { data } = await getCart(userId)

    if (data) {
      const formatted = data.map(item => ({
        id: item.product_id,
        name: item.name,
        image: item.image,
        price: item.price,
        stock: item.stock,
        quantity: item.quantity,
      }))
      dispatch(setCartFromServer(formatted))
    }
  }
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)

      if (data.session?.user) {
        dispatch(getUserProfileAsync({ userId: data.session.user.id }))
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
  
      if (session?.user) {
        dispatch(getUserProfileAsync({ userId: session.user.id }))
        if (_event === "SIGNED_IN") {
          localStorage.removeItem("cart")
          loadCart(session.user.id)
        }
        if (_event === "SIGNED_OUT") {
          hasLoadedCart.current = false
        }
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  return <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }

  return context
}
