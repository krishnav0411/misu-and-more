import Link from "next/link"
import { Camera } from "lucide-react"

const quickLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="font-serif text-xl font-medium tracking-tight">
                misu&more.
              </Link>
              <p className="mt-2 text-sm text-background/70">
                Premium handcrafted desserts made to order.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@misuandmore.com"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  hello@misuandmore.com
                </a>
                <a
                  href="https://instagram.com/misuandmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                <Camera className="size-4" />                @misuandmore
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-background/10 text-center text-sm text-background/50">
            © {new Date().getFullYear()} Misu & More. All rights reserved.
          </div>
        </div>
      </footer>
  );
}
