"use client";

import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "$49.99",
    description: "Perfect for individuals",
    tagline: "Essential connectivity",
    features: [
      "Up to 50 Mbps download",
      "Unlimited data",
      "Free standard installation",
      "24/7 email support",
      "No contract required",
    ],
    cta: "Start Basic Plan",
    highlighted: false,
    popular: false,
  },
  {
    name: "Pro",
    price: "$79.99",
    description: "Most popular for families",
    tagline: "🔥 Best Value",
    features: [
      "Up to 150 Mbps download",
      "Unlimited data + priority",
      "Free premium installation",
      "24/7 priority phone support",
      "Advanced router included",
      "Wi-Fi 6 mesh network",
    ],
    cta: "Start Pro Plan →",
    highlighted: true,
    popular: true,
    savings: "Save $240/year",
  },
  {
    name: "Enterprise",
    price: "$149.99",
    description: "For businesses & power users",
    tagline: "Maximum performance",
    features: [
      "Up to 200 Mbps download",
      "Unlimited priority data",
      "Free white-glove installation",
      "Dedicated account manager",
      "99.9% uptime SLA guarantee",
      "Static IP address",
      "Advanced security features",
    ],
    cta: "Start Enterprise Plan",
    highlighted: false,
    popular: false,
  },
];

export function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  return (
    <section
      id="pricing"
      className="py-24 px-6 relative bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <span className="text-[#10b981] font-semibold text-xs uppercase tracking-wider">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Choose Your <span className="text-[#10b981]">Perfect Plan</span>
          </h2>
          <p className="text-base text-[#a3a3a3] max-w-2xl mx-auto mb-6">
            All plans include unlimited data, no contracts, and 30-day
            money-back guarantee
          </p>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/30">
            <Zap className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="text-[#10b981] font-semibold text-xs">
              Limited Time: Free installation on all plans (Save $299)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted ? "scale-105 z-10" : "scale-100"
              }`}
              style={{
                transform:
                  hoveredIndex === index
                    ? "translateY(-8px) scale(1.03)"
                    : plan.highlighted
                    ? "scale(1.03)"
                    : "scale(1)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] text-white font-bold text-[10px] uppercase tracking-wider shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full p-6 rounded-2xl border-2 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-[#10b981]/10 to-[#059669]/10 border-[#10b981] shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                    : "bg-[#0a0a0a] border-[#1a1a1a] hover:border-[#10b981]/30"
                } transition-all duration-300`}
              >
                {/* Savings Tag */}
                {plan.savings && (
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 rounded-full bg-[#10b981]/20 text-[#10b981] font-bold text-[10px]">
                      {plan.savings}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-black text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#737373] mb-4">{plan.tagline}</p>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-[#737373] font-medium text-sm">
                      /month
                    </span>
                  </div>
                  <p className="text-xs text-[#a3a3a3] mt-1">
                    {plan.description}
                  </p>
                </div>

                <Button
                  className={`w-full mb-6 rounded-xl py-5 font-bold text-sm ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white glow-button shadow-lg"
                      : "bg-white/5 hover:bg-white/10 text-white border-2 border-[#1a1a1a] hover:border-[#10b981]/50"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Check className="w-4 h-4 text-[#10b981] shrink-0" />
                      </div>
                      <span className="text-[#a3a3a3] text-xs leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-6 text-xs text-[#737373] flex-wrap">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#10b981]" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Cancel anytime, no fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Free shipping & installation</span>
            </div>
          </div>

          <p className="text-[10px] text-[#525252]">
            All prices in USD. Taxes may apply. Equipment rental included in
            monthly price.
          </p>
        </div>
      </div>
    </section>
  );
}
