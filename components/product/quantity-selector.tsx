"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

type QuantitySelectorProps = {
  min?: number
  max?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

export function QuantitySelector({
  min = 1,
  max = 20,
  defaultValue = 1,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = React.useState(defaultValue)

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next))
    setQuantity(clamped)
    onChange?.(clamped)
  }

  return (
    <div className="inline-flex h-11 items-center rounded-lg border border-input">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-full rounded-r-none"
        onClick={() => update(quantity - 1)}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus />
      </Button>
      <span
        className="w-12 text-center text-sm font-medium tabular-nums"
        aria-live="polite"
      >
        {quantity}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-full rounded-l-none"
        onClick={() => update(quantity + 1)}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus />
      </Button>
    </div>
  )
}
