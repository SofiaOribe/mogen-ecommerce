import InputCustom from "@/components/inputs/InputCustom"
import { Button } from "@/components/ui/button"
import { validPasswordRegex } from "@/features/common/types"
import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { updatePasswordAsync } from "../slice"
import { useAppDispatch } from "@/app/hooks"
import { toast } from "sonner"
import { StyleToaster } from "@/components/ui/sonner"
import { CircleCheck } from "lucide-react"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"

const ResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [passwordSuccess, setPasswordSuccess] = useState<boolean>(false)
  const [password, setPassword] = useState({
    value: "",
    valid: false,
    firstLoad: true,
  })
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    valid: false,
    firstLoad: true,
  })

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        navigate("/auth/login")
      }
    }

    checkSession()
  }, [])

  useEffect(() => {
    const success = sessionStorage.getItem("password_reset_success")

    if (success === "true") {
      setPasswordSuccess(true)
    }
  }, [])

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setPassword({
      value,
      firstLoad: false,
      valid: !!value.match(validPasswordRegex) && value.length >= 8,
    })

    setConfirmPassword(prev => ({
      ...prev,
      valid: prev.value === value,
    }))
  }

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setConfirmPassword({
      value,
      firstLoad: false,
      valid: value === password.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!password.valid) {
      return
    }

    if (!confirmPassword.valid) {
      return
    }

    dispatch(updatePasswordAsync(password.value)).then((res: any) => {
      if (res.payload?.data.user) {
        toast.success("The password was successfully changed", {
          position: "bottom-center",
          style: StyleToaster.success,
        })

        sessionStorage.setItem("password_reset_success", "true")
        setPasswordSuccess(true)
      } else if (res.payload?.error.message) {
        console.log(res.payload?.error.message)
        toast.error(res.payload?.error.message, {
          position: "bottom-center",
          style: StyleToaster.error,
        })
      }
    })
  }

  return (
    <div className="w-full h-full relative box-border">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        <div className="flex flex-col w-full items-center gap-4">
          {passwordSuccess ? (
            <div className="flex flex-row items-center gap-4">
              <CircleCheck className="h-10 w-10" />
              <h3 className="font-x4-600-black">Password changed!</h3>
            </div>
          ) : (
            <h3 className="font-x4-600-black">Create new password</h3>
          )}

          <p className="font-x1-400-black">
            {passwordSuccess
              ? "You have successfully created a new password, kindly click below to log in with your new password now."
              : "Your new password must be different from previous used password"}
          </p>
        </div>
        {!passwordSuccess ? (
          <form action="" onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-8">
            <div className="max-w-[25em] w-full flex flex-col gap-6">
              <p className="font-x075-400">
                Password must be at least 8 characters and include uppercase and lowercase letters, numbers, and a
                special character.
              </p>

              <InputCustom
                value={password.value}
                label="Password"
                placeholder="Enter your password"
                type="password"
                error={
                  !password.firstLoad && !password.valid
                    ? "Password must be at least 8 characters and include uppercase and lowercase letters, numbers, and a special character. Please try again."
                    : ""
                }
                password={true}
                borderClass="border-black border-t-0 border-x-0 rounded-none"
                onChangeValue={handlePassword}
              />
              <InputCustom
                value={confirmPassword.value}
                label="Confirm password"
                placeholder="Enter your password"
                type="password"
                error={!confirmPassword.firstLoad && !confirmPassword.valid ? "Passwords do not match" : ""}
                password={true}
                helperText={"Both passwords must match"}
                borderClass="border-black border-t-0 border-x-0 rounded-none"
                onChangeValue={handleConfirmPassword}
              />
            </div>

            <Button
              type="submit"
              className="h-[3em] w-full max-w-[320px] border-none shadow-md rounded-full bg-black font-x0875-500-white px-8 py-3"
              disabled={!password.valid || !confirmPassword.valid}
            >
              Reset password
            </Button>
          </form>
        ) : (
          <div className="w-full flex justify-center">
            <ButtonPrimary
              type="button"
              variant="secondary"
              classes={{
                roundedClass: "shadow-md rounded-full",
                paddingClass: "px-8 py-3",
              }}
              text="Log in now"
              onClick={() => {
                sessionStorage.removeItem("password_reset_success")
                navigate("/auth/login")
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ResetPassword
