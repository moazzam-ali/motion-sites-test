"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { HlsVideo } from "./HlsVideo";
import { SectionBadge } from "./SectionBadge";

export function StartSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden min-h-[600px] flex items-center bg-black"
    >
      {/* HLS video background */}
      <HlsVideo />

      {/* Overlay tint */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/40"
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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <SectionBadge>How It Works</SectionBadge>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-heading italic text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-2px] max-w-3xl"
        >
          You dream it. We ship it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-white/75 text-lg max-w-xl font-light"
        >
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          href="#get-started"
          className="mt-8 liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
