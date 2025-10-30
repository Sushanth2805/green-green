"use client";

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 relative bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Headline */}
          <div>
            <div className="inline-block px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
              <span className="text-[#10b981] font-semibold text-xs uppercase tracking-wider">
                Why NovaLink?
              </span>
            </div>
            <h2 className="text-4xl font-black text-white mb-4 leading-tight">
              Internet That Works
              <span className="block text-[#10b981]">Where Others Can't</span>
            </h2>
            <p className="text-base text-[#a3a3a3] leading-relaxed mb-6">
              Traditional providers can't reach you. Cell towers fail in remote
              areas. But our satellite network covers{" "}
              <span className="text-white font-semibold">
                100% of Earth's surface
              </span>
              .
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
                <div className="text-2xl font-black text-[#10b981] mb-1">
                  200
                </div>
                <div className="text-[10px] text-[#737373] uppercase tracking-wide">
                  Mbps Speed
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
                <div className="text-2xl font-black text-[#10b981] mb-1">
                  20ms
                </div>
                <div className="text-[10px] text-[#737373] uppercase tracking-wide">
                  Low Latency
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
                <div className="text-2xl font-black text-[#10b981] mb-1">
                  24/7
                </div>
                <div className="text-[10px] text-[#737373] uppercase tracking-wide">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#10b981]/10 to-[#059669]/10 border border-[#10b981]/20 p-8 backdrop-blur-sm">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0a0a0a] to-black border border-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
                {/* Globe Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] opacity-10 animate-pulse"></div>
                </div>
                <Globe className="w-24 h-24 text-[#10b981] animate-float relative z-10" />

                {/* Connection Points */}
                <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
                <div
                  className="absolute bottom-20 left-20 w-2 h-2 rounded-full bg-[#34d399] animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-32 left-24 w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-32 right-24 w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 bg-black border-2 border-[#10b981] rounded-xl p-4 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Global Coverage
                  </div>
                  <div className="text-[#737373] text-xs">195+ Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2, Globe } from "lucide-react";
