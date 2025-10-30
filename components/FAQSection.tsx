"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the installation process?",
    answer:
      "Installation is completely DIY and takes about 5-10 minutes. We ship you the dish and router with easy setup instructions. The dish automatically aligns itself to our satellites. If you prefer, we offer free professional installation on all plans.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time through your account dashboard. Changes take effect immediately, and you'll only be charged the prorated difference for upgrades.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No contracts, ever. We believe in earning your business every month. You can cancel anytime with no cancellation fees or penalties. We also offer a 30-day money-back guarantee if you're not completely satisfied.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. Enterprise customers can also pay via ACH bank transfer or wire transfer.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Our support team is available 24/7 via live chat, email, and phone. Pro and Enterprise plans get priority support with faster response times. Most issues are resolved in under 15 minutes.",
  },
  {
    question: "What is the coverage area?",
    answer:
      "NovaLink provides coverage across 100% of Earth's surface. Our satellite constellation ensures connectivity even in the most remote areas. Use our coverage map tool to check signal strength in your specific location.",
  },
  {
    question: "What happens if I use all my data?",
    answer:
      "All our plans include unlimited data - you'll never be charged overage fees or have your speed throttled. Stream, game, and work as much as you want without worrying about data caps.",
  },
  {
    question: "How does weather affect the connection?",
    answer:
      "Our system is designed to maintain connectivity in most weather conditions. Heavy rain or snow may cause brief slowdowns, but the connection remains stable 99.9% of the time with our built-in redundancy.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-6 relative bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
            <span className="text-[#10b981] font-semibold text-xs uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Common <span className="text-[#10b981]">Questions</span>
          </h2>
          <p className="text-base text-[#a3a3a3] max-w-2xl mx-auto">
            Everything you need to know about NovaLink satellite internet
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-[#1a1a1a] rounded-xl overflow-hidden bg-[#0a0a0a] backdrop-blur-sm transition-all duration-300 hover:border-[#10b981]/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className="text-base text-white font-bold pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full bg-[#10b981]/10 flex items-center justify-center transition-all duration-300 ${
                      openIndex === index ? "rotate-180 bg-[#10b981]" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openIndex === index ? "text-white" : "text-[#10b981]"
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-[#a3a3a3] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-8 text-center p-6 rounded-2xl border-2 border-[#10b981]/20 bg-gradient-to-br from-[#10b981]/5 to-transparent">
            <h3 className="text-xl font-bold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-[#a3a3a3] text-sm mb-4">
              Our support team is here to help 24/7
            </p>
            <button className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
