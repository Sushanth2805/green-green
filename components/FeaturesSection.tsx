"use client";

export function FeaturesSection() {
  return (
    <section className="relative border-t border-[#1a1a1a] bg-black px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Headline */}
          <div>
            <div className="inline-block px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
              <span className="text-[#10b981] font-semibold text-xs uppercase tracking-wider">
                Why NovaLink?
              </span>
            </div>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Internet That Works
              <span className="block text-[#10b981]">Where Others Can't</span>
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-[#a3a3a3] sm:text-base">
              Traditional providers can't reach you. Cell towers fail in remote
              areas. But our satellite network covers{" "}
              <span className="text-white font-semibold">
                100% of Earth's surface
              </span>
              .
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-4 text-center">
                <div className="mb-1 text-xl font-black text-[#10b981] sm:text-2xl">
                  200
                </div>
                <div className="text-[11px] uppercase tracking-wide text-[#737373]">
                  Mbps Speed
                </div>
              </div>
              <div className="rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-4 text-center">
                <div className="mb-1 text-xl font-black text-[#10b981] sm:text-2xl">
                  20ms
                </div>
                <div className="text-[11px] uppercase tracking-wide text-[#737373]">
                  Low Latency
                </div>
              </div>
              <div className="rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-4 text-center">
                <div className="mb-1 text-xl font-black text-[#10b981] sm:text-2xl">
                  24/7
                </div>
                <div className="text-[11px] uppercase tracking-wide text-[#737373]">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative mx-auto max-w-md sm:max-w-none">
            <div className="aspect-square rounded-2xl border border-[#10b981]/20 bg-gradient-to-br from-[#10b981]/10 to-[#059669]/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a] to-black">
                {/* Globe Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] opacity-10 animate-pulse sm:h-48 sm:w-48"></div>
                </div>
                <Globe className="w-24 h-24 text-[#10b981] animate-float relative z-10" />

                {/* Connection Points */}
                <div className="absolute top-16 right-16 h-2 w-2 rounded-full bg-[#10b981] animate-pulse sm:top-20 sm:right-20"></div>
                <div
                  className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-[#34d399] animate-pulse sm:bottom-20 sm:left-20"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-24 left-20 h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse sm:top-32 sm:left-24"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-24 right-20 h-1.5 w-1.5 rounded-full bg-[#34d399] animate-pulse sm:bottom-32 sm:right-24"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-xl border-2 border-[#10b981] bg-black p-4 shadow-2xl backdrop-blur-sm sm:-bottom-4 sm:left-auto sm:w-auto sm:-translate-x-0 sm:-left-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#10b981] to-[#059669]">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Global Coverage
                  </div>
                  <div className="text-xs text-[#737373]">195+ Countries</div>
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
