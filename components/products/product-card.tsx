"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export type Product = {
  name: string
  description: string
  price: string
  image: string
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ProductCard({ product }: { product: Product }) {
  const { name, description, price, image } = product

  return (
    <motion.div variants={cardVariants}>
      <Card className="group/card h-full gap-0 overflow-hidden rounded-2xl py-0 shadow-sm shadow-foreground/5 ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-foreground/10">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={`${name} by Misu & More`}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
          />
          <Badge className="absolute left-3 top-3 bg-background/85 text-foreground backdrop-blur-sm">
            Made to Order
          </Badge>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-serif text-xl font-medium leading-snug text-foreground">
            {name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="mt-auto flex flex-col gap-4 pt-2">
            <p className="text-sm text-muted-foreground">
              From{" "}
              <span className="font-medium text-foreground">{price}</span>
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                toast("Detailed product pages will be available in the final website.")
              }
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
