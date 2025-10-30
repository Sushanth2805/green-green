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
    <section id="how-it-works" className="relative bg-[#0a0a0a] px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-4 inline-block rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-3 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#10b981]">
              Simple Process
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
            Up & Running in <span className="text-[#10b981]">3 Easy Steps</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[#a3a3a3] sm:text-base">
            No complicated installation. No waiting weeks for a technician. Get
            connected today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-20 left-[60%] z-0 hidden h-0.5 w-[80%] bg-gradient-to-r from-[#10b981] to-transparent md:block"></div>
                )}

                {/* Card */}
                <div className="relative rounded-2xl border-2 border-[#1a1a1a] bg-black p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#10b981]/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] text-sm font-black text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex flex-col items-center text-center">
                    <div
                      className={`relative mb-4 rounded-2xl bg-gradient-to-br ${step.gradient} p-5 shadow-lg transition-shadow duration-300 group-hover:shadow-xl`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-70`}
                      ></div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg font-black text-white sm:text-xl">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[#a3a3a3]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-3 text-sm font-semibold text-[#10b981]">
            Ready to get started?
          </p>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#10b981]">
            Check availability in your area
            <svg
              className="h-4 w-4"
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
