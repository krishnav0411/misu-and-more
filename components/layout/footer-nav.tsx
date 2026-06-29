"use client"

import Link from "next/link"

import { navItems } from "./navigation"
import { useHomeSectionNav } from "./section-scroll"

const linkClass =
  "text-sm text-background/70 hover:text-background transition-colors"

export function FooterNav() {
  const goToSection = useHomeSectionNav()
  const items = navItems.filter((item) => item.label !== "Home")

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          {item.kind === "route" ? (
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => goToSection(item.sectionId)}
              className={linkClass}
            >
              {item.label}
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}
