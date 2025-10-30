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
      className="relative border-t border-[#1a1a1a] bg-black px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-3 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#10b981]">
              Transparent Pricing
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
            Choose Your <span className="text-[#10b981]">Perfect Plan</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-[#a3a3a3] sm:text-base">
            All plans include unlimited data, no contracts, and 30-day
            money-back guarantee
          </p>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-2 text-left">
            <Zap className="h-3.5 w-3.5 text-[#10b981]" />
            <span className="text-xs font-semibold text-[#10b981]">
              Limited Time: Free installation on all plans (Save $299)
            </span>
          </div>
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={index}
              className={`relative rounded-2xl transition-transform duration-300 ${
                hoveredIndex === index ? "md:-translate-y-2 md:scale-[1.02]" : ""
              } ${plan.highlighted ? "xl:z-10 xl:scale-[1.03]" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    <Star className="h-3 w-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full p-6 rounded-2xl border-2 ${
                  plan.highlighted
                    ? "border-[#10b981] bg-gradient-to-br from-[#10b981]/10 to-[#059669]/10 shadow-[0_0_40px_rgba(16,185,129,0.25)]"
                    : "border-[#1a1a1a] bg-[#0a0a0a] transition-colors hover:border-[#10b981]/30"
                } transition-all duration-300`}
              >
                {/* Savings Tag */}
                {plan.savings && (
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#10b981]/20 px-2 py-1 text-[10px] font-bold text-[#10b981]">
                      {plan.savings}
                    </span>
                  </div>
                )}

                <h3 className="mb-1 text-lg font-black text-white sm:text-xl">
                  {plan.name}
                </h3>
                <p className="mb-4 text-xs text-[#737373]">{plan.tagline}</p>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white sm:text-4xl">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-[#737373]">
                      /month
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#a3a3a3]">
                    {plan.description}
                  </p>
                </div>

                <Button
                  className={`mb-6 w-full rounded-xl py-4 text-sm font-bold ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#10b981] to-[#059669] text-white shadow-lg shadow-[#10b981]/30 transition hover:from-[#059669] hover:to-[#047857]"
                      : "border-2 border-[#1a1a1a] bg-white/5 text-white transition hover:border-[#10b981]/40 hover:bg-white/10"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Check className="h-4 w-4 shrink-0 text-[#10b981]" />
                      </div>
                      <span className="text-xs leading-relaxed text-[#a3a3a3]">
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
        <div className="space-y-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#737373] sm:gap-6">
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#10b981]" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#10b981]" />
              <span>Cancel anytime, no fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#10b981]" />
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
