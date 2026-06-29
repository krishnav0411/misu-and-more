"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"

// Carries the intended homepage section across a client navigation without
// putting a hash in the URL.
const SCROLL_TARGET_KEY = "misu:scroll-target"

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
}

/**
 * Returns a handler that scrolls to a homepage section. When already on the
 * homepage it scrolls in place; otherwise it navigates home first and lets
 * <HomeScrollOnNavigate /> finish the scroll once the page mounts.
 */
export function useHomeSectionNav() {
  const pathname = usePathname()
  const router = useRouter()

  return React.useCallback(
    (sectionId: string, options?: { delay?: number }) => {
      if (pathname === "/") {
        if (options?.delay) {
          window.setTimeout(() => scrollToSection(sectionId), options.delay)
        } else {
          scrollToSection(sectionId)
        }
        return
      }

      try {
        sessionStorage.setItem(SCROLL_TARGET_KEY, sectionId)
      } catch {
        // sessionStorage unavailable — fall back to navigating home.
      }
      router.push("/")
    },
    [pathname, router]
  )
}

/** Mounted on the homepage: completes a pending cross-page section scroll. */
export function HomeScrollOnNavigate() {
  React.useEffect(() => {
    let target: string | null = null
    try {
      target = sessionStorage.getItem(SCROLL_TARGET_KEY)
    } catch {
      target = null
    }
    if (!target) return

    try {
      sessionStorage.removeItem(SCROLL_TARGET_KEY)
    } catch {
      // ignore
    }

    const raf = window.requestAnimationFrame(() => scrollToSection(target!))
    return () => window.cancelAnimationFrame(raf)
  }, [])

  return null
}
