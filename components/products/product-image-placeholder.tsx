import { CakeSlice } from "lucide-react"

import { cn } from "@/lib/utils"

/** Elegant fallback shown when a product photo isn't available yet. */
export function ProductImagePlaceholder({
  className,
  iconClassName,
}: {
  className?: string
  iconClassName?: string
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-muted",
        className
      )}
      aria-hidden="true"
    >
      <CakeSlice
        className={cn("size-10 text-muted-foreground/30", iconClassName)}
      />
    </div>
  )
}
