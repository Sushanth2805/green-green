"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black border-t border-[#1a1a1a]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981] rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 mb-6">
          <Zap className="w-4 h-4 text-[#10b981]" />
          <span className="text-[#10b981] font-bold text-xs">
            Limited Offer: First Month 50% Off + Free Installation
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl font-black text-white mb-4 leading-tight">
          Ready to Experience
          <span className="block text-[#10b981]">Internet Freedom?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-[#a3a3a3] mb-8 max-w-2xl mx-auto">
          Join 250,000+ customers who ditched slow internet. Start your 30-day
          risk-free trial today.
        </p>

        {/* Trust Signals */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#10b981]" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm">
                30-Day Guarantee
              </div>
              <div className="text-[#737373] text-xs">
                Full refund if not satisfied
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#10b981]" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm">5-Minute Setup</div>
              <div className="text-[#737373] text-xs">Get online instantly</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#10b981]" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm">No Contracts</div>
              <div className="text-[#737373] text-xs">
                Cancel anytime, no fees
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white rounded-xl px-10 py-6 text-lg font-black glow-button shadow-xl group"
          >
            Claim Your 50% Discount
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Micro Copy */}
        <p className="text-[#525252] text-xs mt-6">
          ⚡ Offer ends in 48 hours • No credit card required for trial • Setup
          in minutes
        </p>

        {/* Counter / Urgency */}
        <div className="mt-8 p-4 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/20 inline-block">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
            <span className="text-white font-semibold text-sm">
              <span className="text-[#10b981]">847 people</span> signed up in
              the last 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
