"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Finally have reliable internet at our cabin in Montana. Streaming works flawlessly, video calls are crystal clear. Worth every penny!",
    author: "Sarah Mitchell",
    role: "Remote Software Engineer",
    location: "Montana, USA",
    avatar: "SM",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Setup took literally 10 minutes. The dish auto-aligned itself and we were online instantly. Gaming with friends has never been smoother.",
    author: "Marcus Chen",
    role: "College Student",
    location: "Alaska, USA",
    avatar: "MC",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "We run our entire business from a rural farm. NovaLink replaced our old DSL and the speed difference is like night and day. Absolute game-changer.",
    author: "Jennifer Rodriguez",
    role: "Small Business Owner",
    location: "Wyoming, USA",
    avatar: "JR",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Skeptical at first, but the speeds are legit. Consistently hitting 150+ Mbps even during peak hours. Customer support is top-notch too.",
    author: "David Thompson",
    role: "Photographer & Videographer",
    location: "Oregon, USA",
    avatar: "DT",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Best decision for our RV lifestyle. We work remotely while traveling and NovaLink keeps us connected everywhere. No more hunting for WiFi!",
    author: "Emily & Jake Parker",
    role: "Digital Nomads",
    location: "Full-time RV Travelers",
    avatar: "EP",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Lives up to the hype. Canceled our old provider immediately. The low latency makes online meetings feel local. Highly recommend!",
    author: "Robert Kim",
    role: "Financial Analyst",
    location: "New Mexico, USA",
    avatar: "RK",
    rating: 5,
    verified: true,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative border-t border-[#1a1a1a] bg-[#0a0a0a] px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-4 inline-block rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-3 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#10b981]">
              Customer Reviews
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
            Trusted by <span className="text-[#10b981]">250,000+</span> Happy
            Customers
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-[#a3a3a3] sm:text-base">
            Real stories from real people who made the switch to NovaLink
          </p>

          {/* Overall Rating */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#10b981] text-[#10b981]"
                />
              ))}
            </div>
            <span className="text-lg font-bold text-white sm:text-xl">4.9</span>
            <span className="text-sm text-[#737373]">out of 5</span>
            <span className="text-[#525252]">•</span>
            <span className="text-sm text-[#737373]">12,847 reviews</span>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border-2 border-[#1a1a1a] bg-black p-6 transition-all duration-300 hover:border-[#10b981]/30 hover:shadow-[0_16px_30px_rgba(16,185,129,0.15)] sm:hover:scale-[1.02]"
            >
              {/* Rating */}
              <div className="mb-3 flex items-center gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#10b981] text-[#10b981]"
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="mb-2 h-6 w-6 text-[#10b981]/20" />
              <p className="mb-5 text-sm font-medium leading-relaxed text-white">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] text-xs font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-xs font-bold text-white">
                      {testimonial.author}
                    </p>
                    {testimonial.verified && (
                      <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#10b981]">
                        <svg
                          className="h-2.5 w-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="truncate text-[10px] text-[#737373]">
                    {testimonial.role}
                  </p>
                  <p className="truncate text-[10px] text-[#525252]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-4 text-sm text-[#a3a3a3]">
            Join thousands of satisfied customers making the switch
          </p>
          <button className="rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#10b981]/20 transition hover:from-[#059669] hover:to-[#047857]">
            Start Your Free Trial →
          </button>
        </div>
      </div>
    </section>
  );
}
