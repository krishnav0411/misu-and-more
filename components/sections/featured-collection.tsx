"use client"

import { motion, type Variants } from "framer-motion"

import { ProductCard, type Product } from "@/components/products/product-card"

const products: Product[] = [
  {
    name: "Chocolate Cake",
    description:
      "Rich, layered chocolate sponge with a velvet ganache finish.",
    price: "₹899",
    image: "/images/products/ChocolateCake.jpg",
  },
  {
    name: "Tiramisu Tub",
    description:
      "Espresso-soaked layers and mascarpone cream in a scoopable tub.",
    price: "₹449",
    image: "/images/products/tiramisu.jpg",
  },
  {
    name: "Cookie Tin",
    description:
      "An assortment of fresh-baked cookies, boxed for gifting.",
    price: "₹599",
    image: "/images/products/CookieTin.jpg",
  },
]

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
    <section id="shop" className="scroll-mt-16 py-24 sm:py-32">
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
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
