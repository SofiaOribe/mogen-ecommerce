import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "cmdk"
import { ChevronsUpDown, Command, Check } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

type TSelect = { countries: { value: string; label: string }[] }

const SelectZipCode = ({ countries }: TSelect) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox">
          {value ? countries.find(c => c.value === value)?.label : "Select country"}

          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>

            <CommandGroup>
              {countries.map(c => (
                <CommandItem
                  key={c.value}
                  value={c.value}
                  onSelect={() => {
                    setValue(c.value)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === c.value ? "opacity-100" : "opacity-0")} />
                  {c.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default SelectZipCode
