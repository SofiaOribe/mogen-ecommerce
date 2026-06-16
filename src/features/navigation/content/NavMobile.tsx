import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { navigationItems } from "../nav"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"
import { Link } from "react-router-dom"

const NavMobile = () => {
  /* font-honeypirls-x1875-400 */
  return (
    <div className="w-full mobileContainer ">
      <div className="flex flex-col h-full w-full pt-8 ">
        {navigationItems.map(fileItem => {
          return (
            <ul key={fileItem.title} className="w-full flex flex-col px-2">
              {fileItem.items ? (
                <>
                  {fileItem.items.map(item => {
                    return (
                      <Collapsible key={item.title}>
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="group w-full justify-between !p-2 !h-auto font-honeypirls-x1875-400"
                          >
                            {item.title}
                            <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90 !h-6 !w-6" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
                          <div className="flex flex-col gap-2">
                            {item.categories.map(category => {
                              return (
                                <Link
                                  to={`/shop/categories${item.link}/${category.id}`}
                                  key={category.id}
                                  className="w-full py-2 font-x1-400"
                                >
                                  {category.title}
                                </Link>
                              )
                            })}
                            <Link to={`/shop/categories${item.link}`} className="w-full py-2 font-x1-400">
                              View all
                            </Link>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    )
                  })}
                </>
              ) : (
                <Link to={fileItem.link} className="font-honeypirls-x1875-400 p-2 w-full">
                  {fileItem.title}
                </Link>
              )}
            </ul>
          )
        })}
        <div className="flex flex-col items-center gap-2 border-t mt-8 py-8 px-2">
          <span className="p-2 font-honeypirls-x1875-400">Account</span>
          <div className="flex flex-col gap-4 px-2 w-full">
            <Link to="/auth/register" className="bg-white rounded-full border  w-full h-fit py-4 ">
              <p className="font-x08125-500 color-black text-center">Sign up</p>
            </Link>
            <Link to="/auth/login" className="bg-black rounded-full border border-color-black w-full h-fit py-4 ">
              <p className="font-x08125-500 color-white text-center">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavMobile
