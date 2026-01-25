import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import { selectCart, setShowCart } from "./slice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

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
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent
        className={cn(
          "fixed m-4 bottom-0 top-0 right-0 z-50 flex h-[100dvh_-_1em] flex-col rounded-2xl w-[430px] shadowDrawer",
        )}
      >
        <div className="w-full flex justify-end">
          <ButtonPrimary
            icon={X}
            classes={{
              borderClass: "border-none shadow-none !p-4",
            }}
          />
        </div>
        <DrawerHeader>
          <DrawerTitle className="font-x125-700-general">Cart Shop</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export default CartShop
