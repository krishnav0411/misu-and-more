// Shared navigation model used by the navbar, mobile nav and footer so routes
// and homepage-section targets stay in sync across the multi-page site.

export const SECTION_IDS = {
  featured: "featured",
  whyChooseUs: "why-choose-us",
  contact: "contact",
} as const

export type NavItem =
  | { kind: "route"; label: string; href: string }
  | { kind: "section"; label: string; sectionId: string }

export const navItems: NavItem[] = [
  { kind: "route", label: "Home", href: "/" },
  { kind: "route", label: "Shop", href: "/shop" },
  { kind: "section", label: "About", sectionId: SECTION_IDS.whyChooseUs },
  { kind: "section", label: "Contact", sectionId: SECTION_IDS.contact },
]

/** A route is active for its exact page; Shop also owns the product pages. */
export function isRouteActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/"
  if (href === "/shop") return pathname === "/shop" || pathname.startsWith("/product")
  return pathname === href || pathname.startsWith(`${href}/`)
}
