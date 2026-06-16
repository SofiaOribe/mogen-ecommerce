import { /* useAppDispatch, */ useAppSelector } from "@/app/hooks"
import React, { useState } from "react"
import { selectAuth } from "../slice"
import InputCustom from "@/components/inputs/InputCustom"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { Link } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuthHook } from "../useAuthHook"

const Login = () => {
  const auth = useAppSelector(selectAuth)
/*   const dispatch = useAppDispatch() */
  const [rememberMe, setRememberMe] = useState(false)
  const { handlePassword, handleEmailChange } = useAuthHook()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form action="" onSubmit={handleSubmit} className="w-full h-full relative box-border">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        <h3 className="font-x5-600-black">Log in</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full sm:items-start items-center">
          <div className="flex flex-col gap-3">
            <InputCustom
              value={auth.login.email.value}
              label="Email"
              placeholder="email@example.com"
              type="email"
              error={!auth.login.email.firstLoad && !auth.login.email.valid ? "Invalid email, please try again" : ""}
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleEmailChange}
            />
            <div className="flex flex-row gap-2">
              <Checkbox
                checked={rememberMe}
                onChange={() => {
                  setRememberMe(prev => !prev)
                }}
                className="border-black"
              />
              <p className="font-x075-400">Remember me?</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <InputCustom
              value={auth.login.password.value}
              label="Password"
              placeholder="Enter your password"
              type="password"
              password={true}
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handlePassword}
            />
            <Link to="" className="font-x075-500">
              Forgot password?
            </Link>
          </div>
        </div>
        <Link to={"/auth/register"} className="font-x0875-400 text-zinc-600">
          Don't have an account? - <span className="font-semibold hover:underline color-black">Sign Up</span>
        </Link>

        <div className="w-full flex justify-center ">
          <ButtonPrimary
            variant="secondary"
            text="Sign In"
            classes={{
              sizeClass: "h-[3em] w-full max-w-[320px] ",
              borderClass: "border-none shadow-md ",
              roundedClass: "rounded-full",
            }}
          />
        </div>
      </div>
    </form>
  )
}

export default Login
