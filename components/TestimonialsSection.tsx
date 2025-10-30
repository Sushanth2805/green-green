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
    <section className="py-24 px-6 relative bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <span className="text-[#10b981] font-semibold text-xs uppercase tracking-wider">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Trusted by <span className="text-[#10b981]">250,000+</span> Happy
            Customers
          </h2>
          <p className="text-base text-[#a3a3a3] max-w-2xl mx-auto mb-6">
            Real stories from real people who made the switch to NovaLink
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-[#10b981] fill-[#10b981]"
                />
              ))}
            </div>
            <span className="text-xl font-bold text-white">4.9</span>
            <span className="text-sm text-[#737373]">out of 5</span>
            <span className="text-[#525252]">•</span>
            <span className="text-sm text-[#737373]">12,847 reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black border-2 border-[#1a1a1a] rounded-2xl p-6 hover:border-[#10b981]/30 transition-all duration-300 group hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-[#10b981] fill-[#10b981]"
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 text-[#10b981]/20 mb-2" />
              <p className="text-white text-sm leading-relaxed mb-5 font-medium">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-white font-bold text-xs truncate">
                      {testimonial.author}
                    </p>
                    {testimonial.verified && (
                      <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#10b981] flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-white"
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
                  <p className="text-[#737373] text-[10px] truncate">
                    {testimonial.role}
                  </p>
                  <p className="text-[#525252] text-[10px] truncate">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#a3a3a3] mb-4 text-sm">
            Join thousands of satisfied customers making the switch
          </p>
          <button className="bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white px-8 py-3 rounded-xl font-bold text-sm glow-button transition-all">
            Start Your Free Trial →
          </button>
        </div>
      </div>
    </section>
  );
}
