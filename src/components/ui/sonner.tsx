import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

export const StyleToaster = {
  warning: {
    "--normal-bg":
      "color-mix(in oklab, light-dark(var(--color-amber-600), var(--color-amber-400)) 10%, var(--background))",
    "--normal-text": "light-dark(var(--color-amber-600), var(--color-amber-400))",
    "--normal-border": "light-dark(var(--color-amber-600), var(--color-amber-400))",
  } as React.CSSProperties,
  error: {
    "--normal-bg": "color-mix(in oklab, var(--destructive) 10%, var(--background))",
    "--normal-text": "var(--destructive)",
    "--normal-border": "var(--destructive)",
  } as React.CSSProperties,
  success: {
    "--normal-bg":
      "color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background))",
    "--normal-text": "light-dark(var(--color-green-600), var(--color-green-400))",
    "--normal-border": "light-dark(var(--color-green-600), var(--color-green-400))",
  } as React.CSSProperties,
  info: {
    "--normal-bg": "color-mix(in oklab, light-dark(var(--color-sky-600), var(--color-sky-400)) 10%, var(--background))",
    "--normal-text": "light-dark(var(--color-sky-600), var(--color-sky-400))",
    "--normal-border": "light-dark(var(--color-sky-600), var(--color-sky-400))",
  } as React.CSSProperties,
}

