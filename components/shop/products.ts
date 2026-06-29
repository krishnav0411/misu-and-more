// The catalogue now lives in a shared source of truth so the Shop grid and the
// Product Detail page stay in sync. Re-exported here to preserve existing imports.
export { products as shopProducts } from "@/lib/products"
export type { CatalogProduct as ShopProduct } from "@/lib/products"
