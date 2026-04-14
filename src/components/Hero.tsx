"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";

const HEADING = "The Website Your Brand Deserves";
const PARTNERS = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

export function Hero() {
  const words = HEADING.split(" ");

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: 1000 }}
    >
      {/* Background: black with subtle blue-tinted radial gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(80, 140, 255, 0.28), transparent 65%), radial-gradient(80% 60% at 50% 100%, rgba(30, 60, 120, 0.35), transparent 70%), #000",
        }}
      />
      {/* Subtle grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center px-6 pt-[150px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="liquid-glass rounded-full pl-1 pr-4 py-1 flex items-center gap-2 text-sm"
        >
          <span className="bg-white text-black text-xs font-medium rounded-full px-2.5 py-1">
            New
          </span>
          <span className="text-white/85">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="mt-10 font-heading italic text-white text-center text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.8] tracking-[-4px] max-w-2xl">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-white/70 text-lg md:text-xl text-center font-light max-w-xl"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="mt-8 flex items-center gap-4 flex-wrap justify-center"
        >
          <a
            href="#get-started"
            className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#film"
            className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors px-4 py-2.5"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Watch the Film
          </a>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-auto pb-8 pt-16 flex flex-col items-center gap-6"
        >
          <div className="liquid-glass rounded-full px-4 py-2 text-xs text-white/70">
            Trusted by the teams behind
          </div>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="font-heading italic text-2xl text-white/70"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
