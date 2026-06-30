"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ProductImagePlaceholder } from "./product-image-placeholder"

export type Product = {
  name: string
  description: string
  price: string
  image?: string
  slug?: string
}

type ProductCardProps = {
  product: Product
  /** Route the whole card links to, e.g. `/product/chocolate-cake`. */
  href: string
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ProductCard({ product, href }: ProductCardProps) {
  const { name, description, price, image } = product

  return (
    <motion.div variants={cardVariants}>
      <Link
        href={href}
        className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Card className="group/card h-full gap-0 overflow-hidden rounded-2xl py-0 shadow-sm shadow-foreground/5 ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-foreground/10">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            {image ? (
              <Image
                src={image}
                alt={`${name} by Misu & More`}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
              />
            ) : (
              <ProductImagePlaceholder />
            )}
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

            <div className="mt-auto pt-2">
              <p className="text-sm text-muted-foreground">
                From{" "}
                <span className="font-medium text-foreground">{price}</span>
              </p>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
