import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationItems } from "../nav"
import { Link } from "react-router-dom"

const NavDesktop = () => {
  return (
    <NavigationMenu className="hidden sm:block">
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
                              <Link
                                to={`${nav.link + "/categories" + item.link}`}
                                className="w-full hover-dropdown px-2 py-1  rounded-sm"
                              >
                                {item.title}
                              </Link>
                              <div className="flex flex-col gap-1 border-l border-color-light-gray ml-3">
                                {item.categories.map(category => {
                                  return (
                                    <span
                                      key={category.title}
                                      /*   to={`/shop/categories${category.link}`} */
                                      className="px-2 py-1 hover-dropdown ml-1 rounded-sm"
                                    >
                                      {category.title}
                                    </span>
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
                <NavigationMenuLink key={nav.title} asChild className="font-x0875-400 color-black !p-2 hover-dropdown">
                  <Link to={nav.link}>{nav.title}</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavDesktop
