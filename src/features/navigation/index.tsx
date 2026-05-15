import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { Bookmark, Menu, ShoppingBag, UserRound, X } from "lucide-react"
import NavDesktop from "./content/NavDesktop"
import NavMobile from "./content/NavMobile"
import { useState } from "react"
import { useAppDispatch } from "@/app/hooks"
import { setShowCart } from "../cart/slice"
import { Link } from "react-router-dom"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useAppDispatch()
  const isUser = false

  return (
    <header className="fixed w-full top-0 left-0 z-8 bg-transparent flex justify-center ">
      <div className="py-2 px-2 mx-4 sm:py-4 sm:px-8 max-w-[58.75em] w-full my-4 rounded-[1em]  bg-white/20 backdrop-blur-[2px] border border-white/30 navShadow flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <NavDesktop />

          <div className="sm:hidden block">
            <ButtonPrimary
              icon={isMenuOpen ? X : Menu}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              classes={{
                paddingClass: "!p-1.5",
                borderClass: "border-none !shadow-none ",
                roundedClass: "rounded-full",
                iconClassName: "!w-5.5 !h-5.5 !stroke-[2px]",
                backgroundClass: "!bg-transparent",
              }}
            />
          </div>
          <div className="flex flex-row gap-4 ">
            <ButtonPrimary
              variant="green"
              icon={ShoppingBag}
              classes={{
                paddingClass: "!p-1.5",
                borderClass: "rounded-full border border-color-black",
                roundedClass: "rounded-full",
              }}
              onClick={() => {
                dispatch(setShowCart(true))
              }}
            />
            <ButtonPrimary
              variant="coral"
              icon={Bookmark}
              classes={{
                paddingClass: "!p-1.5",
                borderClass: "border border-color-black",
                roundedClass: "rounded-full",
              }}
            />
            {isUser && (
              <ButtonPrimary
                variant="lightCream"
                icon={UserRound}
                classes={{
                  paddingClass: "!p-1.5",
                  borderClass: "rounded-full border border-color-black",
                  roundedClass: "rounded-full",
                }}
              />
            )}

            <Link
              to=""
              className="bg-white rounded-full border border-color-black hidden sm:block w-fit- h-fit py-[0.375em] px-4py-[0.375em] px-4 min-w-[5.25em]"
            >
              <p className="font-x08125-500 color-black text-center">Sign up</p>
            </Link>
            <Link
              to="/auth/login"
              className="bg-black rounded-full border border-color-black hidden sm:block w-fit- h-fit py-[0.375em] px-4py-[0.375em] px-4 min-w-[5.25em]"
            >
              <p className="font-x08125-500 color-white text-center">Log in</p>
            </Link>
          </div>
        </div>
        {isMenuOpen && <NavMobile />}
      </div>
    </header>
  )
}

export default Navigation
