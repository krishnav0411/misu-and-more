"use client"

import { motion, type Variants } from "framer-motion"
import {
  CakeSlice,
  ClipboardList,
  ChefHat,
  Truck,
  type LucideIcon,
} from "lucide-react"

type Step = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: Step[] = [
  {
    number: "01",
    title: "Choose Your Dessert",
    description:
      "Browse our handcrafted collection and select your favourite dessert.",
    icon: CakeSlice,
  },
  {
    number: "02",
    title: "Place Your Order",
    description:
      "Choose your flavour, quantity and preferred pickup or delivery date.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Freshly Handcrafted",
    description:
      "We prepare everything fresh using premium ingredients after your order is confirmed.",
    icon: ChefHat,
  },
  {
    number: "04",
    title: "Pickup or Delivery",
    description: "Collect your order or receive it on your selected date.",
    icon: Truck,
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

function StepCard({ step }: { step: Step }) {
  const { number, title, description, icon: Icon } = step

  return (
    <motion.div variants={cardVariants} className="relative">
      <div className="flex h-full flex-col gap-5 rounded-2xl bg-card p-7 shadow-sm shadow-foreground/5 ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-md hover:shadow-foreground/10">
        <div className="flex items-center justify-between">
          <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span
            className="font-serif text-4xl font-medium text-foreground/15"
            aria-hidden="true"
          >
            {number}
          </span>
        </div>

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

export function HowOrderingWorks() {
  return (
    <section className="bg-secondary/60 py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="max-w-2xl"
        >
          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            How Ordering Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every dessert is handcrafted only after your order is confirmed.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
          className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {/* Subtle horizontal timeline connector — desktop only */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-13 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
