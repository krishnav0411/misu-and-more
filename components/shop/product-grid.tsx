"use client"

import { motion, type Variants } from "framer-motion"

import { ProductCard, type Product } from "@/components/products/product-card"

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export function ProductGrid({
  products,
}: {
  products: (Product & { slug: string })[]
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={gridVariants}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          href={`/product/${product.slug}`}
          ctaLabel="View Product"
          ctaVariant="default"
        />
      ))}
    </motion.div>
  )
}
