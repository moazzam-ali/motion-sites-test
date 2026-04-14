"use client";

import { motion } from "motion/react";
import { HlsVideo } from "./HlsVideo";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-black py-32 px-6">
      {/* HLS video background, desaturated */}
      <HlsVideo style={{ filter: "saturate(0)" }} />
      <div
        aria-hidden
        className="absolute inset-0 bg-black/50"
      />

      {/* Top fade */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-5xl mx-auto liquid-glass rounded-3xl p-12 md:p-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + idx * 0.1,
              }}
              className="text-center md:text-left"
            >
              <div className="font-heading italic text-white text-5xl tracking-[-1px] leading-none">
                {stat.value}
              </div>
              <div className="mt-3 text-white/60 text-sm font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
