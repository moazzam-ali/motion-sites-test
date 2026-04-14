import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

interface Row {
  title: string;
  body: string;
  cta: string;
  reverse?: boolean;
}

const ROWS: Row[] = [
  {
    title: "Designed to convert. Built to perform.",
    body: "Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.",
    cta: "Learn more",
  },
  {
    title: "It gets smarter. Automatically.",
    body: "Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.",
    cta: "See how it works",
    reverse: true,
  },
];

export function FeaturesChess() {
  return (
    <section id="services" className="relative bg-black py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <SectionBadge>Capabilities</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading italic text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-2px] max-w-3xl"
          >
            Pro features. Zero complexity.
          </motion.h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {ROWS.map((row, idx) => (
            <div
              key={row.title}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                row.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  className="font-heading italic text-white text-4xl md:text-5xl leading-[0.95] tracking-[-1px] max-w-md"
                >
                  {row.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-5 text-white/70 max-w-lg font-light leading-relaxed"
                >
                  {row.body}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  href="#learn"
                  className="mt-6 liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {row.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 w-full"
              >
                {/* TODO: replace with <img src="your-gif.gif"> */}
                <div className="w-full h-64 rounded-2xl liquid-glass flex items-center justify-center text-white/30 text-sm">
                  Feature preview {idx + 1}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
