import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          {/* Logo & Social */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
                  <span className="text-white font-bold text-base">N</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg blur opacity-50 -z-10"></div>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                NovaLink
              </span>
            </div>
            <p className="text-[#737373] text-xs mb-4 leading-relaxed">
              High-speed satellite internet connecting the world, one home at a
              time.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-[#737373] hover:text-[#10b981] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-[#737373] hover:text-[#10b981] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-[#737373] hover:text-[#10b981] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-[#737373] hover:text-[#10b981] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-[#737373] hover:text-[#10b981] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Coverage Map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Specifications
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Troubleshooting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#737373] hover:text-white transition-colors text-xs"
                >
                  Acceptable Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#1a1a1a] pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-[#525252]">
            © 2025 NovaLink Satellite Internet. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#525252] md:justify-end">
            <a href="#" className="transition-colors hover:text-white">
              Sitemap
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Accessibility
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Partner Program
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
