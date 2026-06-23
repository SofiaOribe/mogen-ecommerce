import { useAppDispatch } from "@/app/hooks"
import React, { useState } from "react"
import { sendPasswordResetEmailAsync } from "../slice"
import { toast } from "sonner"
import InputCustom from "@/components/inputs/InputCustom"
import { validEmailRegex } from "@/features/common/types"
import { StyleToaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { capitalizeFirstLetter } from "@/features/common/functions"

const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<boolean>(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    const valid = value.length >= 3 && !!validEmailRegex.exec(value)
    if (valid) setError(false)
    else setError(true)
    setEmail(value)
  }

  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(sendPasswordResetEmailAsync(email)).then((res: any) => {
      /*   console.log(res.payload) */
      if (res.payload?.error.message) {
        toast.error(capitalizeFirstLetter(res.payload?.error.message), {
          position: "bottom-center",
          style: StyleToaster.error,
        })
      } else {
        toast.success("Check your email for password reset link", {
          position: "bottom-center",
          style: StyleToaster.success,
        })
      }
    })
  }

  return (
    <form action="" onSubmit={handleForgotPassword} className="w-full h-full relative box-border">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        <div className="flex flex-col gap-4">
          <h3 className="font-x4-600-black">Forgot your password?</h3>
          <p className="font-x1-400-black">We will send you a link to your email so you can recover your password.</p>
        </div>
        <div className="w-full flex flex-col items-center gap-6">
          <div className="max-w-[25em] w-full">
            <InputCustom
              value={email}
              label="Email"
              placeholder="email@example.com"
              type="email"
              error={error ? "Invalid email, please try again" : ""}
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleEmailChange}
            />
          </div>

          <Button
            type="submit"
            className="h-[3em] w-full max-w-[320px] border-none shadow-md rounded-full bg-black font-x0875-500-white "
          >
            Send request
          </Button>
        </div>
      </div>
    </form>
  )
}

export default ForgotPassword
