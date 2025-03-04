import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full">
      <div className="py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 container">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Access Web Limited</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>11 Gorseway</p>
              <p>Fleet, England</p>
              <p>GU52 7NA</p>
            </address>
            <p className="text-sm text-muted-foreground">Company No: 15694988</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/saas-development"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/accessibility-audits"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accessibility Audits
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-hosting"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-integration"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="tel:07478885247" className="hover:text-foreground transition-colors">
                  07478 885 247
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="mailto:info@access-web.co.uk" className="hover:text-foreground transition-colors">
                  info@access-web.co.uk
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <Link href="/contact" className="text-sm font-medium text-primary hover:underline">
                Send us a proposal
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Access Web Limited. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/accessibility"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

