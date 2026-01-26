import { Input } from "@/components/ui/input"

const BottomCart = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-x0875-600-black">Shipping methods</p>
        <Input placeholder="Zip code" className="h-10 rounded-md" />
      </div>
    </div>
  )
}

export default BottomCart
