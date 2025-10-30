"use client";

import { Button } from "@/components/ui/button";
import { Globe, Satellite, CheckCircle2, Users, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1f1a] pt-20">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Refined Headline */}
          <h1 className="text-6xl md:text-7xl font-black text-white mb-8 max-w-5xl mx-auto leading-[1.1]">
            Blazing-Fast Internet.
            <br />
            <span className="bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#10b981] bg-clip-text text-transparent">
              Anywhere. Anytime.
            </span>
          </h1>

          {/* Balanced Subheadline */}
          <p className="text-lg md:text-xl text-[#a3a3a3] mb-16 max-w-2xl mx-auto leading-relaxed">
            Get satellite internet speeds up to{" "}
            <span className="text-white font-semibold">200 Mbps</span> in the
            world's most remote locations.
            <span className="text-[#10b981] font-medium">
              {" "}
              No contracts. No installation fees.
            </span>
          </p>

          {/* Top Row - Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mb-20 flex-wrap text-sm text-[#a3a3a3]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#10b981]" />
              <span>250K+ Users</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-[#10b981]" />
              <span>5-Min Setup</span>
            </div>
          </div>

          {/* Middle Section - CTA Buttons with Large Spacing */}
          <div className="flex items-center justify-center gap-12 mb-20 flex-wrap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white rounded-xl px-10 py-6 text-base font-bold glow-button shadow-lg shadow-[#10b981]/30"
            >
              Start Free Trial →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#10b981]/40 text-white hover:bg-[#10b981]/10 rounded-xl px-10 py-6 text-base font-semibold backdrop-blur-sm"
            >
              View Coverage Map
            </Button>
          </div>

          {/* Bottom Row - Guarantee Statements */}
          <div className="flex items-center justify-center gap-6 flex-wrap text-xs text-[#525252]">
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
          <div className="flex items-center justify-center gap-6 flex-wrap opacity-30 hover:opacity-50 transition-opacity mt-20">
            <p className="text-[10px] text-[#525252] uppercase tracking-wider font-semibold">
              Featured In:
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-[#737373] font-semibold">TechCrunch</div>
              <div className="text-[#737373] font-semibold">Wired</div>
              <div className="text-[#737373] font-semibold">Forbes</div>
              <div className="text-[#737373] font-semibold">Verge</div>
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
