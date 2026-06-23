import { useState } from "react"
import { Input } from "../ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Button } from "../ui/button"

const InputCustom = ({
  placeholder,
  label,
  type,
  name,
  password = false,
  error,
  value,
  classes,
  borderClass,
  onChangeValue,
  disabled,
}: {
  placeholder: string
  label?: string
  name?: string
  type: "email" | "password" | "text"
  password?: boolean
  error?: string | null
  borderClass?: string
  classes?: string
  value?: string
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}) => {
  const [isVisible, setIsVisible] = useState(false)

  let inputType = type
  if (password) {
    inputType = isVisible ? "text" : "password"
  }

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label
          htmlFor="input-field"
          className={`font-x075-500  placeholder:opacity-50 ${error ? "color-error" : "color-black"}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Input
          value={value}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className={`${classes ?? ""} ${borderClass ?? ""} ${error ? "color-error placeholder:color-error border-color-error" : "color-black"}`}
          onChange={onChangeValue}
          disabled={disabled}
        />
        {password && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(prevState => !prevState)}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent cursor-pointer"
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">{isVisible ? "Hide password" : "Show password"}</span>
          </Button>
        )}
        {error && <p className="font-x075-400 color-error pl-1 pt-1">{error}</p>}
      </div>
    </div>
  )
}

export default InputCustom
