import { /* useAppDispatch, */ useAppSelector } from "@/app/hooks"
import React from "react"
import { selectAuth } from "../slice"
import InputCustom from "@/components/inputs/InputCustom"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { Link } from "react-router-dom"
import { useAuthHook } from "../useAuthHook"

const Register = () => {
  const auth = useAppSelector(selectAuth)
  /*   const dispatch = useAppDispatch() */
  const { handlePassword, handleEmailChange, handleChangeData } = useAuthHook()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form action="" onSubmit={handleSubmit} className="w-full h-full relative box-border ">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        <h3 className="font-x5-600-black">Sign up</h3>
        <div className="flex flex-col gap-6 w-full sm:items-start items-center">
          <div className="flex sm:flex-row flex-col gap-6 w-full sm:items-start items-center">
            <InputCustom
              name="firstName"
              value={auth.register.firstName.value}
              label="First name"
              placeholder="Francisco"
              type="text"
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleChangeData}
            />
            <InputCustom
              name="lastName"
              value={auth.register.lastName.value}
              label="Last name"
              placeholder="Wilson"
              type="text"
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleChangeData}
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-6 w-full sm:items-start items-center">
            <InputCustom
              value={auth.register.email.value}
              label="Email"
              placeholder="email@example.com"
              type="email"
              error={
                !auth.register.email.firstLoad && !auth.register.email.valid ? "Invalid email, please try again" : ""
              }
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleEmailChange}
            />
            <InputCustom
              value={auth.register.password.value}
              label="Password"
              placeholder="Enter your password"
              type="password"
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
          <ButtonPrimary
            variant="secondary"
            text="Sign Up"
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

export default Register
