"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Home,
  Zap,
  DollarSign,
  HelpCircle,
  LogIn,
  Sparkles,
} from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "top-3" : "top-4"
      }`}
    >
      <div className="relative">
        {/* Glassmorphic Container */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-[#1a1a1a]/50 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-4 pr-4 border-r border-[#1a1a1a]">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg blur opacity-50 -z-10"></div>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-1">
            <a
              href="#"
              className="group relative p-2.5 rounded-lg hover:bg-white/5 transition-all"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-[#a3a3a3] group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Home
              </span>
            </a>

            <a
              href="#how-it-works"
              className="group relative p-2.5 rounded-lg hover:bg-white/5 transition-all"
              aria-label="How it works"
            >
              <Zap className="w-5 h-5 text-[#a3a3a3] group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                How it works
              </span>
            </a>

            <a
              href="#pricing"
              className="group relative p-2.5 rounded-lg hover:bg-white/5 transition-all"
              aria-label="Pricing"
            >
              <DollarSign className="w-5 h-5 text-[#a3a3a3] group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Pricing
              </span>
            </a>

            <a
              href="#faq"
              className="group relative p-2.5 rounded-lg hover:bg-white/5 transition-all"
              aria-label="FAQ"
            >
              <HelpCircle className="w-5 h-5 text-[#a3a3a3] group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                FAQ
              </span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-[#1a1a1a] mx-2"></div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#a3a3a3] hover:text-white hover:bg-white/5 p-2.5 h-auto"
              aria-label="Log in"
            >
              <LogIn className="w-5 h-5" />
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white rounded-lg px-4 py-2 font-semibold text-sm glow-button flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started</span>
            </Button>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
      </div>
    </nav>
  );
}
