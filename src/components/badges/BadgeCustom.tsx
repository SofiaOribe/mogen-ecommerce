import { LucideIcon, X } from "lucide-react"
import { TVariantSquare } from "../buttons/ButtonPrimary"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import React from "react"

export const variantSquare = {
  primary: {
    backgroundClass: "bg-white",
    colorClass: "color-black",
    iconClassName: "color-black w-4 h-4",
  },
  secondary: {
    backgroundClass: "bg-black",
    colorClass: "color-white",
    iconClassName: "color-white w-4 h-4",
  },
  green: {
    backgroundClass: "bg-green",
    colorClass: "color-black",
    iconClassName: "w-4 h-4 color-black",
  },
  coral: {
    backgroundClass: "bg-coral",
    colorClass: "color-black",
    iconClassName: "w-4 h-4 color-black",
  },
  yellow: {
    backgroundClass: "bg-yellow",
    colorClass: "color-black",
    iconClassName: "w-4 h-4 color-black",
  },
  lightCream: {
    backgroundClass: "bg-light-cream",
    colorClass: "color-black",
    iconClassName: "w-4 h-4 color-black",
  },
  lightGrey: {
    backgroundClass: "bg-light-gray",
    colorClass: "color-black",
    iconClassName: "w-4 h-4 color-black",
  },
  ghost: {
    backgroundClass: "bg-transparent",
    colorClass: "color-black",
    iconClassName: "w-4 h-4 color-black",
  },
}

const BadgeCustom = ({
  text,
  variant,
  onDelete,
  icon,
  iconPosition = "right",
  classes,
}: {
  text: string
  variant: TVariantSquare
  icon?: LucideIcon
  iconPosition?: "right" | "left"
  onDelete?: () => void
  classes?: {
    borderColor?: string
  }
}) => {
  const currentVariant = variantSquare[variant]

  return (
    <Badge
      variant="outline"
      className={`${currentVariant.backgroundClass} ${currentVariant.colorClass} ${classes?.borderColor ?? "border-none"} w-fit h-6 font-x09-400 rounded-sm capitalize`}
    >
      {iconPosition === "right" &&
        icon &&
        icon &&
        React.createElement(icon, {
          style: { strokeWidth: 2.25 },
          className: currentVariant.iconClassName,
        })}
      {text}
      {iconPosition === "left" &&
        icon &&
        icon &&
        React.createElement(icon, {
          style: { strokeWidth: 2.25 },
          className: currentVariant.iconClassName,
        })}
      {onDelete && (
        <Button className="!border-none !bg-transparent !p-0 !m-0 cursor-pointer h-4" onClick={() => onDelete()}>
          <X className={` ${currentVariant.colorClass} !h-3 !w-3`} />
        </Button>
      )}
    </Badge>
  )
}

export default BadgeCustom
