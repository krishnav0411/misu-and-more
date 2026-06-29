"use client"

import { motion, type Variants } from "framer-motion"
import { Gem, Croissant, PartyPopper, Gift, type LucideIcon } from "lucide-react"

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: "Premium Ingredients",
    description:
      "We use carefully selected ingredients to ensure every bite tastes exceptional.",
    icon: Gem,
  },
  {
    title: "Made Fresh",
    description:
      "Every order is handcrafted only after confirmation. No mass production.",
    icon: Croissant,
  },
  {
    title: "Custom for Every Occasion",
    description:
      "Birthdays, anniversaries, celebrations and gifting. Made just the way you want.",
    icon: PartyPopper,
  },
  {
    title: "Beautiful Presentation",
    description:
      "Every dessert is packaged beautifully for gifting and memorable celebrations.",
    icon: Gift,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { title, description, icon: Icon } = feature

  return (
    <motion.div variants={cardVariants}>
      <div className="flex h-full items-start gap-5 rounded-2xl bg-card p-8 shadow-sm shadow-foreground/5 ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl font-medium leading-snug text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function WhyChooseUs() {
  return (
    <section id="about" className="scroll-mt-16 bg-background py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="max-w-2xl"
        >
          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Why Choose Misu &amp; More
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every dessert is crafted with care, quality and attention to detail.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
