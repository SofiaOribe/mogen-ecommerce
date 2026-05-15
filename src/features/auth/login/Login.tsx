import { useAppDispatch, useAppSelector } from "@/app/hooks"
import React from "react"
import { selectAuth, setLogin } from "../slice"
import { TInputData, validEmailRegex } from "@/features/common/types"

const Login = () => {
  const auth = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!auth.validate.show) {
      /*   triggerEmailLogin({
        email: auth.login.email.value,
      }) */
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    const data: TInputData = {
      value,
      firstLoad: false,
      valid: value.length >= 3 && !!validEmailRegex.exec(value),
    }

    dispatch(
      setLogin({
        ...auth.login,
        email: data,
      }),
    )
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} ></form>
    </div>
  )
}

export default Login
