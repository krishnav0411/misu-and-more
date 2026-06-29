"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems, isRouteActive } from "./navigation"
import { useHomeSectionNav } from "./section-scroll"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const goToSection = useHomeSectionNav()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <div className="flex flex-col gap-6 mt-8">
          {navItems.map((item) =>
            item.kind === "route" ? (
              <SheetClose asChild key={item.label}>
                <Link
                  href={item.href}
                  aria-current={
                    isRouteActive(item.href, pathname) ? "page" : undefined
                  }
                  className={cn(
                    "text-lg font-medium transition-colors",
                    isRouteActive(item.href, pathname)
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setOpen(false)
                  goToSection(item.sectionId, { delay: 300 })
                }}
                className="text-left text-lg font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            )
          )}
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full mt-4">
              <Link href="/shop">Order Now</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
