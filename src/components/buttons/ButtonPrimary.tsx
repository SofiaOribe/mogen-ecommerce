import React from "react"
import { Button } from "../ui/button"
import { LucideIcon } from "lucide-react"

export type TVariantSquare = "primary" | "secondary" | "green" | "coral" | "lightCream" | "lightGrey" | "yellow"

export const variantSquare = {
  primary: {
    backgroundClass: "bg-white",
    colorClass: "color-black",
    textClass: "font-x0875-500",
    iconClassName: "color-black w-4 h-4",
    borderClass: "border border-color-black",
  },
  secondary: {
    backgroundClass: "bg-black",
    colorClass: "color-white",
    textClass: "font-x0875-500",
    iconClassName: "color-white w-4 h-4",
    borderClass: "border border-color-black",
  },
  green: {
    backgroundClass: "bg-green",
    colorClass: "color-white",
    textClass: "font-x0875-500",
    iconClassName: "w-4 h-4 color-black",
    borderClass: "border border-color-black",
  },
  coral: {
    backgroundClass: "bg-coral",
    colorClass: "color-black",
    textClass: "font-x0875-500",
    iconClassName: "w-4 h-4 color-black",
    borderClass: "border border-color-black",
  },
  lightCream: {
    backgroundClass: "bg-light-cream",
    colorClass: "color-black",
    textClass: "font-x0875-500",
    iconClassName: "w-4 h-4 color-black",
    borderClass: "border border-color-black",
  },
  lightGrey: {
    backgroundClass: "bg-light-gray",
    colorClass: "color-black",
    textClass: "font-x0875-500",
    iconClassName: "w-4 h-4 color-black",
    borderClass: "border-none",
  },
  yellow: {
    backgroundClass: "bg-light-gray",
    colorClass: "color-black",
    textClass: "font-x0875-500",
    iconClassName: "w-4 h-4 color-black",
    borderClass: "border-none",
  },
}

type TButtonPrimaryProps = {
  variant?: TVariantSquare
  classes?: {
    backgroundClass?: string
    colorClass?: string
    textClass?: string
    iconClassName?: string
    borderClass?: string
    paddingClass?: string
    roundedClass?: string
    sizeClass?: string
  }
  style?: {
    minWidth?: string
  }
  disabled?: boolean
  text?: string
  icon?: LucideIcon
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

const ButtonPrimary = ({
  variant = "primary",
  classes,
  style,
  disabled,
  text,
  icon,
  onClick,
  type = "button",
}: TButtonPrimaryProps) => {
  const currentVariant = variantSquare[variant]

  return (
    <Button
      className={`cursor-pointer gap-2 flex-row justify-center items-center w-fit h-fit  ${
        classes?.backgroundClass ?? currentVariant.backgroundClass
      } ${classes?.borderClass ?? currentVariant.borderClass} ${classes?.paddingClass ?? "py-[0.375em] px-4"} ${classes?.roundedClass ?? "rounded-lg"} ${classes?.sizeClass ?? ""}`}
      style={{ minWidth: style?.minWidth ?? "0em" }}
      disabled={disabled}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
        onClick?.()
      }}
      type={type}
    >
      {icon &&
        React.createElement(icon, {
          style: { strokeWidth: 2.25 },
          className: classes?.iconClassName ?? currentVariant.iconClassName,
        })}
      {text && (
        <p
          className={`${classes?.colorClass ?? currentVariant.colorClass} ${classes?.textClass ?? currentVariant.textClass}`}
        >
          {text}
        </p>
      )}
    </Button>
  )
}

export default ButtonPrimary
