"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"

import type { CatalogProduct } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { QuantitySelector } from "./quantity-selector"

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
    </div>
  )
}

export function ProductInfo({ product }: { product: CatalogProduct }) {
  const { name, slug, price, description, flavors, sizes, prepTime } = product

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="flex flex-col"
    >
      <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {name}
      </h1>

      <div className="mt-4 flex items-center gap-4">
        <Badge className="bg-secondary text-secondary-foreground">
          Made to Order
        </Badge>
        <p className="text-lg text-muted-foreground">
          From <span className="font-medium text-foreground">{price}</span>
        </p>
      </div>

      <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-8 flex flex-col gap-6">
        <Field label="Flavour">
          <Select defaultValue={flavors[0]}>
            <SelectTrigger className="h-11 w-full" aria-label="Select flavour">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {flavors.map((flavor) => (
                <SelectItem key={flavor} value={flavor}>
                  {flavor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field label="Size">
          <Select defaultValue={sizes[0]}>
            <SelectTrigger className="h-11 w-full" aria-label="Select size">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field label="Quantity">
          <QuantitySelector />
        </Field>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="size-4" aria-hidden="true" />
        <span>
          Estimated preparation time:{" "}
          <span className="font-medium text-foreground">{prepTime}</span>
        </span>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <Button asChild size="lg" className="h-12 px-7 text-base">
          <Link href={`/order?product=${slug}`}>Place Order</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 px-7 text-base"
        >
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    </motion.div>
  )
}
