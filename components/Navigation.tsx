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
  Menu,
  X,
} from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 z-50 px-4 transition-all duration-300 md:top-4 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="relative hidden md:block">
          {/* Glassmorphic Container */}
          <div className="flex items-center gap-2 rounded-2xl border border-[#1a1a1a]/50 bg-black/40 px-4 py-3 backdrop-blur-xl shadow-2xl">
            {/* Logo */}
            <div className="mr-4 flex items-center gap-2 border-r border-[#1a1a1a] pr-4">
              <div className="relative">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669]">
                  <span className="text-sm font-bold text-white">N</span>
                </div>
                <div className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] blur opacity-50"></div>
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="group relative rounded-lg p-2.5 transition-all hover:bg-white/5"
                aria-label="Home"
              >
                <Home className="h-5 w-5 text-[#a3a3a3] transition-colors group-hover:text-white" />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Home
                </span>
              </a>

              <a
                href="#how-it-works"
                className="group relative rounded-lg p-2.5 transition-all hover:bg-white/5"
                aria-label="How it works"
              >
                <Zap className="h-5 w-5 text-[#a3a3a3] transition-colors group-hover:text-white" />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  How it works
                </span>
              </a>

              <a
                href="#pricing"
                className="group relative rounded-lg p-2.5 transition-all hover:bg-white/5"
                aria-label="Pricing"
              >
                <DollarSign className="h-5 w-5 text-[#a3a3a3] transition-colors group-hover:text-white" />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Pricing
                </span>
              </a>

              <a
                href="#faq"
                className="group relative rounded-lg p-2.5 transition-all hover:bg-white/5"
                aria-label="FAQ"
              >
                <HelpCircle className="h-5 w-5 text-[#a3a3a3] transition-colors group-hover:text-white" />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  FAQ
                </span>
              </a>
            </div>

            {/* Divider */}
            <div className="mx-2 h-6 w-px bg-[#1a1a1a]"></div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-2.5 text-[#a3a3a3] transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Log in"
              >
                <LogIn className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#10b981] to-[#059669] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#10b981]/30 transition hover:from-[#059669] hover:to-[#047857]"
              >
                <Sparkles className="h-4 w-4" />
                <span>Get Started</span>
              </Button>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 blur-xl"></div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between rounded-2xl border border-[#1a1a1a]/60 bg-black/60 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669]">
                  <span className="text-base font-bold text-white">N</span>
                </div>
                <div className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] blur opacity-40"></div>
              </div>
              <span className="text-sm font-semibold text-white">NovaLink</span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="hidden rounded-lg bg-gradient-to-r from-[#10b981] to-[#059669] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#10b981]/30 transition hover:from-[#059669] hover:to-[#047857] sm:flex"
              >
                Get Started
              </Button>
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1a1a1a] bg-black/70 text-white transition hover:border-[#10b981]/60"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div
            className={`origin-top rounded-2xl border border-[#1a1a1a]/60 bg-black/70 backdrop-blur-xl transition-all duration-300 ${
              menuOpen
                ? "mt-2 scale-y-100 opacity-100"
                : "pointer-events-none mt-2 scale-y-95 opacity-0"
            }`}
          >
            <div className="flex flex-col divide-y divide-[#1a1a1a]/60">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm text-[#a3a3a3] transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                Home
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-3 px-4 py-3 text-sm text-[#a3a3a3] transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <Zap className="h-5 w-5" />
                How it works
              </a>
              <a
                href="#pricing"
                className="flex items-center gap-3 px-4 py-3 text-sm text-[#a3a3a3] transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <DollarSign className="h-5 w-5" />
                Pricing
              </a>
              <a
                href="#faq"
                className="flex items-center gap-3 px-4 py-3 text-sm text-[#a3a3a3] transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <HelpCircle className="h-5 w-5" />
                FAQ
              </a>
              <div className="flex items-center justify-between px-4 py-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto px-3 py-2 text-xs text-[#a3a3a3] transition hover:bg-white/5 hover:text-white"
                  aria-label="Log in"
                  onClick={() => setMenuOpen(false)}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Log in
                </Button>
                <Button
                  size="sm"
                  className="flex-1 rounded-lg bg-gradient-to-r from-[#10b981] to-[#059669] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#10b981]/30 transition hover:from-[#059669] hover:to-[#047857]"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
