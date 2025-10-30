import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-12 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
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

        <div className="pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#525252] text-xs">
            © 2025 NovaLink Satellite Internet. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[#525252] text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Partner Program
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
