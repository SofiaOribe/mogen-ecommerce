import { useAppDispatch } from "@/app/hooks"
import React, { useEffect, useState } from "react"
import { sendPasswordResetEmailAsync } from "../slice"
import { toast } from "sonner"
import InputCustom from "@/components/inputs/InputCustom"
import { validEmailRegex } from "@/features/common/types"
import { StyleToaster } from "@/components/ui/sonner"
import { capitalizeFirstLetter } from "@/features/common/functions"
import { ArrowLeft, MailCheck, RotateCw } from "lucide-react"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"

const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    if (secondsLeft <= 0) return

    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [secondsLeft])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    const valid = value.length >= 3 && !!validEmailRegex.exec(value)
    if (valid) setError(false)
    else setError(true)
    setEmail(value)
  }

  const handleForgotPassword = () => {
    dispatch(sendPasswordResetEmailAsync(email)).then((res: any) => {
      console.log("res pauload", res.payload)
      if (res.payload?.error?.message) {
        toast.error(capitalizeFirstLetter(res.payload?.error.message), {
          position: "bottom-center",
          style: StyleToaster.error,
        })
        return
      }
      toast.success(
        "If there is an account associated with this email, you will receive a link to reset your password.",
        {
          position: "bottom-center",
          style: StyleToaster.success,
        },
      )
      setEmailSent(true)
      setSecondsLeft(60)
    })
  }

  return (
    <div className="w-full h-full relative box-border">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        {emailSent && (
          <ButtonPrimary
            type="button"
            variant="ghost"
            icon={ArrowLeft}
            classes={{
              borderClass: "border border-black shadow-sm",
              paddingClass: "!p-1",
            }}
            onClick={() => {
              setEmailSent(false)
            }}
          />
        )}
        <div className={`flex flex-col gap-4 ${emailSent ? "w-full items-center" : ""}`}>
          {emailSent ? (
            <div className="flex flex-row items-center gap-4">
              <MailCheck className="h-10 w-10" />
              <h3 className="font-x4-600-black">Check your email</h3>
            </div>
          ) : (
            <h3 className="font-x4-600-black">Forgot your password?</h3>
          )}

          <p className="font-x1-400-black">
            {emailSent
              ? `We'll send you an email to ${email}. It will expire soon, so be sure to check it quickly`
              : "We will send you a link to your email so you can recover your password."}
          </p>
        </div>
        {emailSent ? (
          <div className="flex justify-center w-full ">
            <ButtonPrimary
              type="button"
              variant="ghost"
              icon={RotateCw}
              disabled={secondsLeft > 0}
              classes={{
                borderClass: "border border-black shadow-sm",
                paddingClass: "px-8 py-3",
              }}
              text={secondsLeft > 0 ? `Resend in ${secondsLeft}s` : "Resend email"}
              onClick={() => {
                handleForgotPassword()
              }}
            />
          </div>
        ) : (
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
            <ButtonPrimary
              type="button"
              variant="secondary"
              classes={{
                roundedClass: "shadow-md rounded-full",
                paddingClass: "px-8 py-3",
              }}
              text="Send instructions"
              onClick={handleForgotPassword}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
