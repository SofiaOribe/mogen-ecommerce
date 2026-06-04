import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { navigationItems } from "../nav"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"
import { Link } from "react-router-dom"

const NavMobile = () => {
  /* font-honeypirls-x1875-400 */
  return (
    <div className="w-full mobileContainer">
      <div className="flex flex-col h-full w-full pt-8">
        {navigationItems.map(fileItem => {
          return (
            <ul key={fileItem.title} className="w-full flex flex-col">
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
                                <span
                                  /*   to={`/shop/categories${category.id}`} */
                                  key={category.id}
                                  className="w-full py-2 font-x1-400"
                                >
                                  {category.title}
                                </span>
                              )
                            })}
                            <span
                              /*   to={`/shop/categories${category.id}`} */
                              className="w-full py-2 font-x1-400"
                            >
                              View all
                            </span>
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
      </div>
    </div>
  )
}

export default NavMobile
