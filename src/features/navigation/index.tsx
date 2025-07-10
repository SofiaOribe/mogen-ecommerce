import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu"
import { navigationItems } from "./nav"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { Bookmark, ShoppingBag, UserRound } from "lucide-react"

const Navigation = () => {
  const isUser = false

  return (
    <header className="fixed w-full top-0 left-0 z-8 bg-transparent flex justify-center ">
      <div className="py-4 px-8 max-w-[58.75em] w-full bg-header-nav my-4 rounded-[1em] flex flex-row items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map(nav => {
              return (
                <NavigationMenuItem key={nav.title}>
                  {nav.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent font-x0875-400 color-black !p-2 hover-dropdown">
                        <Link to={nav.link}>{nav.title}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[25em] grid grid-cols-3 gap-2">
                          {nav.items.map(item => {
                            return (
                              <NavigationMenuLink
                                key={item.title}
                                asChild
                                className="hover:bg-transparent font-x0875-400 color-black"
                              >
                                <div className="flex flex-col">
                                  <Link to={item.link} className="w-full hover-dropdown px-2 py-1  rounded-sm">
                                    {item.title}
                                  </Link>
                                  <div className="flex flex-col gap-1 border-l border-color-light-gray ml-3">
                                    {item.categories.map(category => {
                                      return (
                                        <Link
                                          key={category.title}
                                          to={category.link}
                                          className="px-2 py-1 hover-dropdown ml-1 rounded-sm"
                                        >
                                          {category.title}
                                        </Link>
                                      )
                                    })}
                                  </div>
                                </div>
                              </NavigationMenuLink>
                            )
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      key={nav.title}
                      asChild
                      className="font-x0875-400 color-black !p-2 hover-dropdown"
                    >
                      <Link to={nav.link}>{nav.title}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-row gap-4">
          <ButtonPrimary
            variant="green"
            icon={ShoppingBag}
            classes={{ paddingClass: "!p-1.5", borderClass: "rounded-full border border-color-black" }}
          />
          <ButtonPrimary
            variant="coral"
            icon={Bookmark}
            classes={{ paddingClass: "!p-1.5", borderClass: "rounded-full border border-color-black" }}
          />
          {isUser && (
            <ButtonPrimary
              variant="lightCream"
              icon={UserRound}
              classes={{ paddingClass: "!p-1.5", borderClass: "rounded-full border border-color-black" }}
            />
          )}
          <ButtonPrimary
            variant="primary"
            text={"Sign up"}
            classes={{ borderClass: "rounded-full border border-color-black" }}
            style={{
              minWidth: "5.25em",
            }}
          />
          <ButtonPrimary
            variant="secondary"
            text={"Log in"}
            classes={{ borderClass: "rounded-full border border-color-black" }}
            style={{
              minWidth: "5.25em",
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default Navigation
