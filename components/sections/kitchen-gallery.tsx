"use client"

import * as React from "react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Camera, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Repeating asymmetrical rhythm: every sixth tile becomes a large feature.
// Tiles the initial five images cleanly and extends gracefully as more are added.
function tileSpanClass(index: number) {
  return index % 6 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
}

export function KitchenGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="max-w-2xl"
        >
          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            From Our Kitchen
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every dessert is handcrafted with care and made to celebrate life&apos;s
            sweetest moments.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
          className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[14rem]"
        >
          {images.map((src, index) => (
            <motion.div
              key={src}
              variants={tileVariants}
              className={cn(tileSpanClass(index))}
            >
              <button
                type="button"
                onClick={() => setSelected(src)}
                aria-label="Open dessert preview"
                className="group relative block aspect-square w-full overflow-hidden rounded-[24px] bg-muted shadow-md shadow-foreground/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:aspect-auto lg:h-full"
              >
                <Image
                  src={src}
                  alt="A handcrafted dessert from the Misu & More kitchen"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="mt-12 flex justify-center"
        >
          <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base">
            <a
              href="https://instagram.com/misuandmore.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Camera aria-hidden="true" />
              Follow us on Instagram
            </a>
          </Button>
        </motion.div>
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="overflow-hidden rounded-[24px] border-0 bg-foreground p-0 text-background ring-0 sm:max-w-5xl"
        >
          <DialogTitle className="sr-only">Dessert preview</DialogTitle>
          {selected && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selected}
                alt="Enlarged dessert preview"
                fill
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="object-contain"
              />
            </div>
          )}
          <DialogClose asChild>
            <button
              type="button"
              aria-label="Close preview"
              className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20"
            >
              <XIcon className="size-5" />
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  )
}
