"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SECTION_IDS } from "@/components/layout/navigation"
import { useHomeSectionNav } from "@/components/layout/section-scroll"

const trustIndicators = ["Made Fresh", "Premium Ingredients", "Made to Order"]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Hero() {
  const goToSection = useHomeSectionNav()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 lg:pt-16">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — editorial copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            className="flex flex-col items-start"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground"
            >
              Handcrafted &bull; Made to Order
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Crafted
              <br />
              for those
              <br />
              who crave
              <br />
              something more.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Premium handcrafted desserts prepared fresh only after you place
              your order. Thoughtfully created for birthdays, celebrations and
              everyday indulgence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="h-12 px-7 text-base">
                <Link href="/shop">Browse Desserts</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 text-base"
                onClick={() => goToSection(SECTION_IDS.featured)}
              >
                View Collection
              </Button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              {trustIndicators.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                >
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — dessert photography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-muted shadow-2xl shadow-foreground/10">
              <Image
                src="/images/hero.jpg"
                alt="A handcrafted Misu & More dessert, freshly prepared to order"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
