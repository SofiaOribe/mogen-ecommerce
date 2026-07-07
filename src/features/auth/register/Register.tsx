import { useAppDispatch, useAppSelector } from "@/app/hooks"
import React from "react"
import { selectAuth, userRegisterAsync } from "../slice"
import InputCustom from "@/components/inputs/InputCustom"
import { Link } from "react-router-dom"
import { useAuthHook } from "../useAuthHook"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { StyleToaster } from "@/components/ui/sonner"

const Register = () => {
  const auth = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const { handlePassword, handleEmailChange, handleChangeData } = useAuthHook()

  const user = auth.register

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (user.first_name.valid && user.last_name.valid && user.email.valid && user.password.valid) {
      dispatch(
        userRegisterAsync({
          email: user.email.value,
          password: user.password.value,
          first_name: user.first_name.value,
          last_name: user.last_name.value,
        }),
      ).then((data: any) => {
        if (data.payload) {
          const dataPayload = data.payload
          if (dataPayload.data?.user && !dataPayload.data?.session) {
            toast.success("Account created! Please check your email to confirm your account.", {
              position: "bottom-center",
              style: StyleToaster.success,
            })
            return
          }
          if (dataPayload.error) {
            if (dataPayload.error.code === "identity_already_exists") {
              toast.warning("Try a different email address.", {
                position: "bottom-center",
                style: StyleToaster.warning,
              })
              return
            } else {
              toast.warning(dataPayload.message || "Oops, an error has occurred", {
                position: "bottom-center",
                style: StyleToaster.warning,
              })
              return
            }
          }
        }
      })
    } else {
      toast.warning("Warning: Please review the form fields before continuing.", {
        position: "bottom-center",
        style: StyleToaster.warning,
      })
    }
  }

  return (
    <form action="" onSubmit={handleSubmit} className="w-full h-full relative box-border ">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        <h3 className="font-x5-600-black">Sign up</h3>
        <div className="flex flex-col gap-6 w-full sm:items-start items-center">
          <div className="flex sm:flex-row flex-col gap-6 w-full sm:items-start items-center">
            <InputCustom
              name="first_name"
              value={user.first_name.value}
              label="First name"
              placeholder="Francisco"
              type="text"
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleChangeData}
              error={
                !user.first_name.valid && !user.first_name.firstLoad
                  ? "First name contains invalid characters. Only letters are allowed."
                  : ""
              }
            />
            <InputCustom
              name="last_name"
              value={user.last_name.value}
              label="Last name"
              placeholder="Wilson"
              type="text"
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleChangeData}
              error={
                !user.last_name.valid && !user.last_name.firstLoad
                  ? "Last name contains invalid characters. Only letters are allowed."
                  : ""
              }
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-6 w-full sm:items-start items-center">
            <InputCustom
              value={user.email.value}
              label="Email"
              placeholder="email@example.com"
              type="email"
              error={!user.email.firstLoad && !user.email.valid ? "Invalid email, please try again" : ""}
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleEmailChange}
            />
            <InputCustom
              value={user.password.value}
              label="Password"
              placeholder="Enter your password"
              type="password"
              error={
                !user.password.firstLoad && !user.password.valid
                  ? "Password must be at least 8 characters and include uppercase and lowercase letters, numbers, and a special character. Please try again."
                  : ""
              }
              password={true}
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handlePassword}
            />
          </div>
          <Link to={"/auth/login"} className="font-x0875-400 text-zinc-600">
            Already have an account? - <span className="font-semibold hover:underline color-black">Sign In</span>
          </Link>
        </div>

        <div className="w-full flex justify-center ">
          <Button
            type="submit"
            className="h-[3em] w-full max-w-[320px] border-none shadow-md rounded-full bg-black font-x0875-500-white cursor-pointer"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Register
