import fs from "node:fs/promises"
import path from "node:path"
import type { Metadata } from "next"

import type { Product } from "@/components/products/product-card"
import { ProductGrid } from "@/components/shop/product-grid"
import { shopProducts } from "@/components/shop/products"

export const metadata: Metadata = {
  title: "Shop · Misu & More",
  description:
    "Browse the Misu & More collection of handcrafted, made-to-order desserts.",
}

const PUBLIC_DIR = path.join(process.cwd(), "public")

// Resolve the image at build time so a card only renders <Image> when the file
// exists — missing products fall back to an elegant placeholder and light up
// automatically once their photo is added.
async function fileExists(publicPath: string): Promise<boolean> {
  try {
    await fs.access(path.join(PUBLIC_DIR, publicPath))
    return true
  } catch {
    return false
  }
}

async function getProducts(): Promise<(Product & { slug: string })[]> {
  return Promise.all(
    shopProducts.map(async (product) => ({
      ...product,
      image: (await fileExists(product.image)) ? product.image : undefined,
    }))
  )
}

export default async function ShopPage() {
  const products = await getProducts()

  return (
  <div className="pt-20 pb-24 sm:pt-20 sm:pb-32">
      <div className="container">
        <header className="max-w-2xl">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
            Our Collection
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every dessert is handcrafted after you place your order.
          </p>
        </header>

        <div className="mt-16">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}
