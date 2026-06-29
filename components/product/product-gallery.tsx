"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { ProductImagePlaceholder } from "@/components/products/product-image-placeholder"

export function ProductGallery({
  image,
  name,
}: {
  image?: string
  name: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-muted shadow-lg shadow-foreground/5">
        {image ? (
          <Image
            src={image}
            alt={`${name} by Misu & More`}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        ) : (
          <ProductImagePlaceholder iconClassName="size-14" />
        )}
      </div>

      {/* Thumbnail strip — static placeholders for now. */}
      <div className="grid grid-cols-4 gap-3" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "relative aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10",
              index === 0 && "ring-2 ring-primary"
            )}
          >
            {index === 0 && image ? (
              <Image
                src={image}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            ) : (
              <ProductImagePlaceholder iconClassName="size-5" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
