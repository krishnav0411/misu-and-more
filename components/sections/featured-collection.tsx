"use client"

import { motion, type Variants } from "framer-motion"

import { ProductCard } from "@/components/products/product-card"
import { SECTION_IDS } from "@/components/layout/navigation"
import { products } from "@/lib/products"

// Preview the first few catalogue items; the full list lives on /shop.
const featured = products.slice(0, 3)

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export function FeaturedCollection() {
  return (
    <section id={SECTION_IDS.featured} className="scroll-mt-16 py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="max-w-2xl"
        >
          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Featured Collection
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Handcrafted desserts made fresh for every celebration.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              href={`/product/${product.slug}`}
              ctaLabel="View Product"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
