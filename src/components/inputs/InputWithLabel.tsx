import { Label } from "@radix-ui/react-select"
import React from "react"
import { Input } from "../ui/input"

const InputWithLabel = ({
  placeholder,
  type,
  password,
}: {
  placeholder: string
  type: "email" | "password" | "text"
  password: boolean
}) => {
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label>Input with label</Label>
      <div>
        <Input type={type} placeholder={placeholder} />
        {/*   {password && (

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(prevState => !prevState)}
          className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
        >
          {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          <span className="sr-only">{isVisible ? "Hide password" : "Show password"}</span>
        </Button>
        )} */}
      </div>
    </div>
  )
}

export default InputWithLabel
