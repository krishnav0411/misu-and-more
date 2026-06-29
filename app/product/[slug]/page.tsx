import fs from "node:fs/promises"
import path from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getProductBySlug, products } from "@/lib/products"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"

const PUBLIC_DIR = path.join(process.cwd(), "public")

// Resolve the image at build time so the gallery only renders <Image> when the
// file exists — otherwise it falls back to the same placeholder used in the Shop.
async function fileExists(publicPath: string): Promise<boolean> {
  try {
    await fs.access(path.join(PUBLIC_DIR, publicPath))
    return true
  } catch {
    return false
  }
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: "Product not found · Misu & More" }
  }

  return {
    title: `${product.name} · Misu & More`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const image = (await fileExists(product.image)) ? product.image : undefined

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery image={image} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  )
}
