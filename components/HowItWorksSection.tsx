"use client";

import { Package, Plug, Wifi } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Order Your Kit",
    description:
      "Get your NovaLink dish and router shipped free to your door. No technician required.",
    gradient: "from-[#10b981] to-[#059669]",
    number: "01",
  },
  {
    icon: Plug,
    title: "Quick Setup",
    description:
      "Plug in, power up, and point at the sky. Self-aligning dish connects in under 5 minutes.",
    gradient: "from-[#34d399] to-[#10b981]",
    number: "02",
  },
  {
    icon: Wifi,
    title: "Get Connected",
    description:
      "Stream 4K, work remotely, game online. Fiber-like speeds from anywhere on Earth.",
    gradient: "from-[#059669] to-[#047857]",
    number: "03",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <span className="text-[#10b981] font-semibold text-xs uppercase tracking-wider">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Up & Running in <span className="text-[#10b981]">3 Easy Steps</span>
          </h2>
          <p className="text-base text-[#a3a3a3] max-w-2xl mx-auto">
            No complicated installation. No waiting weeks for a technician. Get
            connected today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#10b981] to-transparent z-0"></div>
                )}

                {/* Card */}
                <div className="relative bg-black border-2 border-[#1a1a1a] rounded-2xl p-6 hover:border-[#10b981]/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white font-black text-sm shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex flex-col items-center text-center mb-4">
                    <div
                      className={`relative mb-4 p-5 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#a3a3a3] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#10b981] font-semibold text-sm mb-3">
            Ready to get started?
          </p>
          <button className="text-white text-sm font-semibold hover:text-[#10b981] transition-colors inline-flex items-center gap-2">
            Check availability in your area
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
