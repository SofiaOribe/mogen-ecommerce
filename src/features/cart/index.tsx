import { selectCart, setShowCart } from "./slice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Articles from "./content/Articles"
import BottomCart from "./content/BottomCart"

const CartShop = () => {
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()

  return (
    <Drawer
      direction="right"
      open={cart.showCart}
      onOpenChange={() => {
        dispatch(setShowCart(false))
      }}
    >
      {/*  <DrawerTrigger asChild></DrawerTrigger> */}
      <DrawerContent className={cn("m-4 h-[100dvh_-_1em] rounded-2xl shadowDrawer bg-background flex flex-col")}>
        <div className="w-full flex justify-end">
          <DrawerClose className="cursor-pointer pt-4 pr-4 ">
            <X className="h-5 w-5 stroke-2" />
          </DrawerClose>
        </div>
        <DrawerHeader>
          <DrawerTitle className="font-x125-700-general">Cart Shop</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col justify-between h-full box-border px-4 pb-8">
          <Articles />
          <BottomCart />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default CartShop
