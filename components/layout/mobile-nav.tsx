"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MobileNavProps {
  links: { href: string; label: string }[]
}

export function MobileNav({ links }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <div className="flex flex-col gap-6 mt-8">
          {links.map((link) => (
            <SheetClose asChild key={link.href}>
              <a
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-foreground/70 transition-colors"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full mt-4">
              <a href="#shop">Order Now</a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
