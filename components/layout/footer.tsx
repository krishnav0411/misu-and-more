import Link from "next/link"
import { Camera } from "lucide-react"

import { FooterNav } from "./footer-nav"

export function Footer() {
  return (
      <footer
        id="contact"
        className="scroll-mt-16 bg-foreground text-background py-12"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link
                href="/"
                className="font-serif text-xl font-medium tracking-tight"
              >
                misu&more.
              </Link>
              <p className="mt-2 text-sm text-background/70">
                Premium handcrafted desserts made to order.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Quick Links</h3>
              <FooterNav />
            </div>

            <div>
              <h3 className="font-medium mb-3">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@misuandmore.in"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  hello@misuandmore.in
                </a>
                <a
                  href="https://instagram.com/misuandmore.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Camera className="size-4" />
                  @misuandmore.in
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
