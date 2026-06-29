import fs from "node:fs/promises"
import path from "node:path"

import { KitchenGallery } from "./kitchen-gallery"

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery")
const IMAGE_PATTERN = /\.(jpe?g|png|webp|avif)$/i

// Read the gallery folder at build time so new images are picked up automatically.
async function getGalleryImages(): Promise<string[]> {
  try {
    const files = await fs.readdir(GALLERY_DIR)
    return files
      .filter((file) => IMAGE_PATTERN.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/images/gallery/${file}`)
  } catch {
    return []
  }
}

export async function FromOurKitchen() {
  const images = await getGalleryImages()

  if (images.length === 0) {
    return null
  }

  return <KitchenGallery images={images} />
}
