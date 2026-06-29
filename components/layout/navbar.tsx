"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import { navItems, isRouteActive } from "./navigation"
import { useHomeSectionNav } from "./section-scroll"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const goToSection = useHomeSectionNav()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-tight"
        >
          misu&more.
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.kind === "route" ? (
              <Link
                key={item.label}
                href={item.href}
                aria-current={
                  isRouteActive(item.href, pathname) ? "page" : undefined
                }
                className={cn(
                  "text-sm font-medium transition-colors",
                  isRouteActive(item.href, pathname)
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => goToSection(item.sectionId)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/shop">Order Now</Link>
          </Button>
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  )
}
