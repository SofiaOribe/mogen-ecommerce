import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { Menu, ShoppingBag, UserRound, X } from "lucide-react"
import NavDesktop from "./content/NavDesktop"
import NavMobile from "./content/NavMobile"
import { useEffect, useState } from "react"
import { useAppDispatch } from "@/app/hooks"
import { setShowCart } from "../cart/slice"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/providers/AuthProvider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useAuthHook } from "../auth/useAuthHook"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { session } = useAuth()
  const isUser = session?.user.id
  const location = useLocation()
  const navigate = useNavigate()
  const { handleLogout } = useAuthHook()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className="fixed w-full top-0 left-0 z-8 bg-transparent flex justify-center box-border ">
      <div className="py-2 px-0 mx-4 md:py-4 md:px-8 max-w-[58.75em] w-full my-4 rounded-[1em]  bg-white/20 backdrop-blur-[2px] border border-white/30 navShadow flex flex-col ">
        <div className="flex flex-row items-center justify-between px-2">
          <NavDesktop />

          <div className="md:hidden block">
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
            {/*    <ButtonPrimary
              variant="coral"
              icon={Bookmark}
              classes={{
                paddingClass: "!p-1.5",
                borderClass: "border border-color-black",
                roundedClass: "rounded-full",
              }}
            /> */}
            {isUser && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full border border-color-black !p-1.5 bg-light-gray w-fit h-fit cursor-pointer"
                  >
                    <UserRound className="w-4 h-4 color-black stroke-[2.25]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="font-x075-500-dark-gray">My Account</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => {
                        navigate("/profile/account")
                      }}
                    >
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        navigate("/profile/orders")
                      }}
                    >
                      Orders
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      handleLogout()
                    }}
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {!isUser && (
              <>
                <Link
                  to="/auth/register"
                  className="bg-white rounded-full border border-color-black hidden md:block w-fit h-fit py-[0.375em] px-4py-[0.375em] px-4 min-w-[5.25em]"
                >
                  <p className="font-x08125-500 color-black text-center">Sign up</p>
                </Link>
                <Link
                  to="/auth/login"
                  className="bg-black rounded-full border border-color-black hidden md:block w-fit h-fit py-[0.375em] px-4py-[0.375em] px-4 min-w-[5.25em]"
                >
                  <p className="font-x08125-500 color-white text-center">Log in</p>
                </Link>
              </>
            )}
          </div>
        </div>
        {isMenuOpen && <NavMobile />}
      </div>
    </header>
  )
}

export default Navigation
