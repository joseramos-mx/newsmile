import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding font-medium whitespace-nowrap tracking-wide transition-all duration-200 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-ring/60 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/85 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25",
        outline:
          "border-border bg-transparent text-foreground hover:bg-muted hover:border-primary/40",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70",
        ghost:
          "text-foreground hover:bg-muted",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        solar:
          "bg-accent text-accent-foreground hover:bg-accent/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30",
        "outline-light":
          "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm:      "h-8  px-4 text-xs",
        lg:      "h-12 px-7 text-base",
        xl:      "h-14 px-8 text-base",
        icon:    "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
