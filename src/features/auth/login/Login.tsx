import { useAppDispatch, useAppSelector } from "@/app/hooks"
import React from "react"
import { selectAuth, userLoginAsync } from "../slice"
import InputCustom from "@/components/inputs/InputCustom"
import { Link, useNavigate } from "react-router-dom"
import { useAuthHook } from "../useAuthHook"
import { toast } from "sonner"
import { StyleToaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { getUserProfileAsync, selectProfile } from "@/features/profile/slice"
import { getCart } from "@/features/cart/api"
import { setCartFromServer } from "@/features/cart/slice"

const Login = () => {
  const auth = useAppSelector(selectAuth)
  const user = auth.login
  const dispatch = useAppDispatch()
  const { handlePassword, handleEmailChange } = useAuthHook()
  const navigate = useNavigate()
  const profile = useAppSelector(selectProfile)
  const loadCart = async (userId: string) => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user.email.valid && user.password.valid) {
      dispatch(
        userLoginAsync({
          email: user.email.value,
          password: user.password.value,
        }),
      ).then((data: any) => {
        if (data.payload) {
          const dataPayload = data.payload
          //Redirect
          // Message
          if (dataPayload.error) {
            if (dataPayload?.error.code === "invalid_credentials") {
              toast.error("The password is invalid or the email address you are trying to use does not exist, please try again.", {
                position: "bottom-center",
                style: StyleToaster.error,
              })
            } else if (dataPayload?.error.code === "email_not_confirmed") {
              toast.warning("Info: You must confirm your email address before logging in", {
                position: "bottom-center",
                style: StyleToaster.info,
              })
            } else if (dataPayload?.error.code === "identity_not_found") {
              toast.warning("Warning: Invalid email, try again", {
                position: "bottom-center",
                style: StyleToaster.warning,
              })
            } else {
              toast.warning("Warning: Something else has happened, try again", {
                position: "bottom-center",
                style: StyleToaster.warning,
              })
            }
          } else {
            if (profile.account?.id) {
              dispatch(getUserProfileAsync({ userId: profile.account.id }))
              localStorage.removeItem("cart")
              loadCart(profile.account.id)
            }
            navigate("/profile")
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
    <form action="" onSubmit={handleSubmit} className="w-full h-full relative box-border">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        <h3 className="font-x5-600-black">Log in</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full sm:items-start items-center">
          <InputCustom
            value={auth.login.email.value}
            label="Email"
            placeholder="email@example.com"
            type="email"
            error={!auth.login.email.firstLoad && !auth.login.email.valid ? "Invalid email, please try again" : ""}
            borderClass="border-black border-t-0 border-x-0 rounded-none"
            onChangeValue={handleEmailChange}
          />
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
            <Link to="/auth/forgot-password" className="font-x075-500">
              Forgot password?
            </Link>
          </div>
        </div>
        <Link to={"/auth/register"} className="font-x0875-400 text-zinc-600">
          Don't have an account? - <span className="font-semibold hover:underline color-black">Sign Up</span>
        </Link>

        <div className="w-full flex justify-center ">
          <Button
            type="submit"
            className="h-[3em] w-full max-w-[320px] border-none shadow-md rounded-full bg-black font-x0875-500-white "
          >
            Sign In
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Login
