import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { TInputData, validEmailRegex, validNameRegex, validPasswordRegex } from "../common/types"
import { getUserProfileAsync, selectAuth, setLogin, setRegister } from "./slice"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"

export const useAuthHook = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(selectAuth)
  const location = useLocation()

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value

    const data: TInputData = {
      value,
      firstLoad: false,
      valid: value && value.match(validPasswordRegex) && value.length >= 8 ? true : false,
    }
    if (location.pathname.includes("/login")) {
      dispatch(
        setLogin({
          ...auth.login,
          password: data,
        }),
      )
    }
    if (location.pathname.includes("/register")) {
      dispatch(
        setRegister({
          ...auth.register,
          password: data,
        }),
      )
    }
    /* else if (location.pathname.includes("/reset"))
      dispatch(
        setResetPass({
          ...auth.reset,
          password: data,
        }),
      ) */
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    const data: TInputData = {
      value,
      firstLoad: false,
      valid: value.length >= 3 && !!validEmailRegex.exec(value),
    }
    if (location.pathname.includes("/login")) {
      dispatch(
        setLogin({
          ...auth.login,
          email: data,
        }),
      )
    }
    if (location.pathname.includes("/register")) {
      dispatch(
        setRegister({
          ...auth.register,
          email: data,
        }),
      )
    }
  }

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    const name: string = e.target.name

    const data: TInputData = {
      value,
      firstLoad: false,
      valid: !!(value && value.match(validNameRegex) && value.length > 0),
    }

    let registerInfo = { ...auth.register }

    registerInfo = { ...registerInfo, [name]: data }

    dispatch(setRegister(registerInfo))
  }

  const useAuthListener = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
      const initSession = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (session?.user) {
          dispatch(getUserProfileAsync({ userId: session.user.id })).then(response => {
            console.log(response)
          })
        }
      }

      initSession()

      const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
        if (session?.user) {
          dispatch(getUserProfileAsync({ userId: session.user.id }))
        }
      })

      return () => {
        listener.subscription.unsubscribe()
      }
    }, [dispatch])
  }

  return {
    handlePassword, 
    handleEmailChange,
    handleChangeData,
    useAuthListener,
  }
}
