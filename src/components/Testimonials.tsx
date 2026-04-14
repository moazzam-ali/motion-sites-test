import { motion } from "motion/react";
import { SectionBadge } from "./SectionBadge";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: "Sarah Chen",
    role: "CEO",
    company: "Luminary",
  },
  {
    quote:
      "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: "Marcus Webb",
    role: "Head of Growth",
    company: "Arcline",
  },
  {
    quote:
      "They didn't just design our site. They defined our brand. Every page feels inevitable now.",
    name: "Priya Natarajan",
    role: "Founder",
    company: "Northwind",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-black py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionBadge>What They Say</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading italic text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-2px] max-w-3xl"
          >
            Don't take our word for it.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="liquid-glass rounded-2xl p-8 flex flex-col justify-between min-h-[260px]"
            >
              <p className="font-heading italic text-white text-xl leading-snug tracking-[-0.5px]">
                “{t.quote}”
              </p>
              <footer className="mt-6">
                <div className="text-white text-sm font-medium">{t.name}</div>
                <div className="text-white/60 text-xs font-light">
                  {t.role}, {t.company}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
