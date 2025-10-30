"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-t border-[#1a1a1a] bg-black px-4 py-20 sm:px-6 sm:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981] opacity-10 blur-3xl sm:h-[520px] sm:w-[520px] md:h-[600px] md:w-[600px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center sm:max-w-5xl">
        {/* Urgency Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-2">
          <Zap className="h-4 w-4 text-[#10b981]" />
          <span className="text-xs font-bold text-[#10b981]">
            Limited Offer: First Month 50% Off + Free Installation
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          Ready to Experience
          <span className="block text-[#10b981]">Internet Freedom?</span>
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl text-sm text-[#a3a3a3] sm:text-base">
          Join 250,000+ customers who ditched slow internet. Start your 30-day
          risk-free trial today.
        </p>

        {/* Trust Signals */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/10">
              <Shield className="h-5 w-5 text-[#10b981]" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">
                30-Day Guarantee
              </div>
              <div className="text-xs text-[#737373]">
                Full refund if not satisfied
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/10">
              <Clock className="h-5 w-5 text-[#10b981]" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">5-Minute Setup</div>
              <div className="text-xs text-[#737373]">Get online instantly</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/10">
              <Zap className="h-5 w-5 text-[#10b981]" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">No Contracts</div>
              <div className="text-xs text-[#737373]">
                Cancel anytime, no fees
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="group rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] px-8 py-5 text-base font-black text-white shadow-xl shadow-[#10b981]/30 transition hover:from-[#059669] hover:to-[#047857] sm:px-10 sm:py-6"
          >
            Claim Your 50% Discount
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Micro Copy */}
        <p className="mt-6 text-xs text-[#525252]">
          ⚡ Offer ends in 48 hours • No credit card required for trial • Setup
          in minutes
        </p>

        {/* Counter / Urgency */}
        <div className="mt-8 inline-block rounded-2xl border border-[#10b981]/20 bg-[#10b981]/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#10b981]"></div>
            <span className="text-sm font-semibold text-white">
              <span className="text-[#10b981]">847 people</span> signed up in the
              last 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
