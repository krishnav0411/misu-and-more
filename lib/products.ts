import type { Product } from "@/components/products/product-card"

/**
 * Shared product catalogue — the single source of truth used by both the
 * Shop grid and the Product Detail page. A catalogue entry always has a slug,
 * an intended image path, and the options needed to configure an order.
 */
export type CatalogProduct = Product & {
  slug: string
  image: string
  flavors: string[]
  sizes: string[]
  prepTime: string
}

export const products: CatalogProduct[] = [
  {
    name: "Chocolate Cake",
    slug: "chocolate-cake",
    price: "₹899",
    description: "Rich, layered chocolate sponge with a velvet ganache finish.",
    image: "/images/products/ChocolateCake.jpg",
    flavors: ["Classic Belgian", "Dark Truffle", "Hazelnut Praline"],
    sizes: ["500 g", "1 kg", "2 kg"],
    prepTime: "24–48 hours",
  },
  {
    name: "Tiramisu Tub",
    slug: "tiramisu-tub",
    price: "₹449",
    description:
      "Espresso-soaked layers and mascarpone cream in a scoopable tub.",
    image: "/images/products/tiramisu.jpg",
    flavors: ["Classic Coffee", "Biscoff", "Hazelnut"],
    sizes: ["Single · 250 g", "Sharing · 500 g"],
    prepTime: "24 hours",
  },
  {
    name: "Cookie Tin",
    slug: "cookie-tin",
    price: "₹599",
    description: "An assortment of fresh-baked cookies, boxed for gifting.",
    image: "/images/products/CookieTin.jpg",
    flavors: ["Assorted", "Chocolate Chip", "Double Chocolate"],
    sizes: ["Tin of 12", "Tin of 24"],
    prepTime: "24–48 hours",
  },
  {
    name: "Bento Cake",
    slug: "bento-cake",
    price: "₹699",
    description:
      "A petite, hand-piped cake for two — personalised for the moment.",
    image: "/images/products/bento-cake.jpg",
    flavors: ["Vanilla Bean", "Chocolate", "Red Velvet"],
    sizes: ["Bento · 350 g"],
    prepTime: "48 hours",
  },
  {
    name: "Brownie Box",
    slug: "brownie-box",
    price: "₹499",
    description: "Fudgy, slow-baked brownies with a delicate crackle top.",
    image: "/images/products/brownie-box.jpg",
    flavors: ["Classic Fudge", "Walnut", "Sea Salt"],
    sizes: ["Box of 6", "Box of 9", "Box of 12"],
    prepTime: "24 hours",
  },
  {
    name: "Dessert Box",
    slug: "dessert-box",
    price: "₹749",
    description:
      "A curated tasting box of our signature handcrafted desserts.",
    image: "/images/products/dessert-box.jpg",
    flavors: ["Chef's Selection"],
    sizes: ["Box of 6", "Box of 9"],
    prepTime: "48–72 hours",
  },
]

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return products.find((product) => product.slug === slug)
}
