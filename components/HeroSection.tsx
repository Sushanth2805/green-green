"use client";

import { Button } from "@/components/ui/button";
import { Globe, Satellite, CheckCircle2, Users, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a1f1a] px-4 pt-28 pb-16 sm:px-6 md:pt-32">
      {/* Aurora-Style Horizontal Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f1a] via-[#0d1410] to-[#0a1f1a]"></div>

        {/* Smooth flowing horizontal gradients - Aurora effect */}
        <div className="absolute inset-0">
          {/* Main horizontal flow - top */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 120% 50% at 30% 20%, rgba(16, 185, 129, 0.4) 0%, rgba(5, 150, 105, 0.3) 25%, transparent 60%)",
            }}
          ></div>

          {/* Secondary flow - middle */}
          <div
            className="absolute top-1/4 right-0 w-full h-2/3 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 100% 60% at 70% 40%, rgba(52, 211, 153, 0.35) 0%, rgba(16, 185, 129, 0.25) 30%, transparent 65%)",
            }}
          ></div>

          {/* Bottom accent flow */}
          <div
            className="absolute bottom-0 left-1/4 w-full h-1/2 opacity-45"
            style={{
              background:
                "radial-gradient(ellipse 110% 55% at 40% 80%, rgba(5, 150, 105, 0.35) 0%, rgba(4, 120, 87, 0.2) 35%, transparent 70%)",
            }}
          ></div>

          {/* Horizontal sweep effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.15) 20%, rgba(52, 211, 153, 0.2) 50%, rgba(16, 185, 129, 0.15) 80%, transparent 100%)",
            }}
          ></div>
        </div>

        {/* Animated flowing orbs */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, rgba(5, 150, 105, 0.3) 40%, transparent 70%)",
              filter: "blur(80px)",
              animation: "float 25s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, rgba(16, 185, 129, 0.25) 45%, transparent 75%)",
              filter: "blur(90px)",
              animation: "float 20s ease-in-out infinite 5s",
            }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(5, 150, 105, 0.55) 0%, rgba(4, 120, 87, 0.3) 40%, transparent 70%)",
              filter: "blur(85px)",
              animation: "float 30s ease-in-out infinite 10s",
            }}
          ></div>
        </div>

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>

        {/* Fine grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-0 sm:px-4">
        <div className="text-center">
          {/* Refined Headline */}
          <h1 className="mx-auto mb-8 max-w-4xl text-4xl font-black leading-[1.15] text-white sm:text-5xl md:max-w-5xl md:text-6xl lg:text-7xl">
            Blazing-Fast Internet.
            <br />
            <span className="bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#10b981] bg-clip-text text-transparent">
              Anywhere. Anytime.
            </span>
          </h1>

          {/* Balanced Subheadline */}
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-[#a3a3a3] sm:text-lg md:mb-16 md:text-xl">
            Get satellite internet speeds up to{" "}
            <span className="text-white font-semibold">200 Mbps</span> in the
            world's most remote locations.
            <span className="text-[#10b981] font-medium">
              {" "}
              No contracts. No installation fees.
            </span>
          </p>

          {/* Top Row - Trust Indicators */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-5 text-sm text-[#a3a3a3] sm:gap-8 md:mb-20">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="h-4 w-4 text-[#10b981]" />
              <span>250K+ Users</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Zap className="h-4 w-4 text-[#10b981]" />
              <span>5-Min Setup</span>
            </div>
          </div>

          {/* Middle Section - CTA Buttons with Large Spacing */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:mb-20">
            <Button
              size="lg"
              className="rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] px-8 py-5 text-sm font-bold text-white shadow-lg shadow-[#10b981]/30 transition hover:from-[#059669] hover:to-[#047857] sm:px-10 sm:text-base"
            >
              Start Free Trial →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-2 border-[#10b981]/40 px-8 py-5 text-sm font-semibold text-white transition hover:bg-[#10b981]/10 sm:px-10 sm:text-base"
            >
              View Coverage Map
            </Button>
          </div>

          {/* Bottom Row - Guarantee Statements */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#525252] sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#10b981]">✓</span>
              <span>30-day money-back guarantee</span>
            </div>
            <span className="text-[#1a1a1a]">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#10b981]">✓</span>
              <span>Cancel anytime</span>
            </div>
            <span className="text-[#1a1a1a]">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#10b981]">✓</span>
              <span>24/7 support</span>
            </div>
          </div>

          {/* Social Proof - More Spacing Below */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 opacity-30 transition-opacity hover:opacity-50 sm:gap-6 md:mt-20">
            <p className="text-[10px] text-[#525252] uppercase tracking-wider font-semibold">
              Featured In:
            </p>
            <div className="flex items-center gap-4 text-[11px] font-semibold text-[#737373] sm:text-sm sm:gap-6">
              <div>TechCrunch</div>
              <div>Wired</div>
              <div>Forbes</div>
              <div>Verge</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 10px) scale(0.95);
          }
        }
      `}</style>
    </section>
  );
}
