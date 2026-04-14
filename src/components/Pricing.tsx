"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

interface Tier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const TIERS: Tier[] = [
  {
    name: "Launch",
    price: "$4,900",
    cadence: "one-time",
    description: "A high-conversion marketing site, ready in days.",
    features: [
      "Up to 5 pages",
      "AI-assisted design",
      "Responsive & accessible",
      "CMS integration",
    ],
    cta: "Start Launch",
  },
  {
    name: "Scale",
    price: "$12,900",
    cadence: "one-time",
    description: "A complete brand system, built to grow with you.",
    features: [
      "Up to 20 pages",
      "Custom design system",
      "Motion & interactions",
      "Real-time A/B testing",
      "Ongoing optimization",
    ],
    featured: true,
    cta: "Start Scale",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "per engagement",
    description: "Tailored delivery for teams with big ambitions.",
    features: [
      "Unlimited pages",
      "Dedicated design lead",
      "SOC 2 compliance",
      "Priority SLA",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionBadge>Pricing</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading italic text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-2px] max-w-3xl"
          >
            Simple pricing. Serious outcomes.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${
                tier.featured ? "liquid-glass-strong" : "liquid-glass"
              } rounded-3xl p-8 flex flex-col`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-heading italic text-white text-3xl">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/70 bg-white/10 rounded-full px-2.5 py-1">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-heading italic text-white text-5xl tracking-[-1px]">
                  {tier.price}
                </span>
                <span className="text-white/50 text-sm font-light">
                  {tier.cadence}
                </span>
              </div>

              <p className="mt-4 text-white/65 text-sm font-light leading-relaxed">
                {tier.description}
              </p>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80 font-light"
                  >
                    <Check className="w-4 h-4 mt-0.5 text-white/80 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className={`mt-8 rounded-full px-5 py-2.5 flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
                  tier.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "liquid-glass-strong text-white hover:bg-white/10"
                }`}
              >
                {tier.cta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
