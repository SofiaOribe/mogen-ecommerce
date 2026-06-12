import FilterContainer from "./filters/FilterContainer"
import { SlidersHorizontal } from "lucide-react"

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const Filters = () => {
  return (
    <>
      <div className="border border-color-black py-6 px-4 w-[17em] h-fit bg-white top-[16.7em] hidden lg:block lg:sticky self-start">
        <FilterContainer />
      </div>
      <div className="lg:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button className=" cursor-pointer gap-2 flex-row rounded-full bg-green border border-color-black">
              <SlidersHorizontal className="w-4 h-4 color-black" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"bottom"}
            className="data-[side=bottom]:max-h-[100%] data-[side=top]:max-h-[100%] rounded-t-3xl  py-7"
          >
            <SheetHeader>
              <SheetTitle className="text-left font-x125-600-black px-6">Filter</SheetTitle>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto w-full  py-5 px-6">
              <FilterContainer />
            </div>
            <SheetFooter>
              {/*   <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Reset</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default Filters
